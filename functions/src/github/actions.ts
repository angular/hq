import * as functions from 'firebase-functions'
import * as firebase from 'firebase'
import * as admin from 'firebase-admin'
import { Observable } from 'rxjs'
import { GithubWebhookEvent, GitHubWebhookEventType } from './events'
import * as PubSub from '@google-cloud/pubsub'
const pubsub = PubSub();

function createTopicEffect(topicId, handler) {
	return functions.pubsub.topic(topicId)
		.onPublish(event => {
			return Observable.of({
				type: event.data.json.type,
				payload: event.data.json.payload
			})
      .let(handler)
      .concatMap(({ type, topic, payload }) =>
        pubsub.topic(topic ? topic : topicId)
          .publish({ type, payload })
          .then(() => ({type, topic, payload}))
      )
      .forEach(({type, topic, payload}) => console.info('published', topic, type))
      .then(() => console.info('complete'))
		});
}

function _githubEffects(actionStream: Observable<any>) {
	return actionStream
		.concatMap(action => {
			switch (action.type) {
				case GitHubWebhookEventType.Issues:
					return Observable.of({ type: 'DO_STUFF' });
				default:
					return Observable.empty();
			}
		})
}

export const githubEffects = createTopicEffect('github-events', _githubEffects);
