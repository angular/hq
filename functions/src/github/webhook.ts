/**
 * Github Webhook API
 */
import * as functions from 'firebase-functions'
import * as firebase from 'firebase'
import * as admin from 'firebase-admin'
import * as PubSub from '@google-cloud/pubsub'
// Instantiates a client

admin.initializeApp(functions.config().firebase);
const pubsub = PubSub();
const topic = pubsub.topic('github-events');

function parseRequest(request:functions.Request){
  const action = request.body;
  if(!action.type){
	  return undefined;
  }
  return action;
}

function handleGithubRequest(request:functions.Request, response:functions.Response): void {
	if(request.method === 'OPTIONS'){
		response.sendStatus(200);
		return;
	}

	const githubAction = {
		type: request.header('X-GitHub-Event'),
		payload: request.body
	}

	topic.publish(githubAction)
	  .then((key) => {
		  response.sendStatus(203);
	  })
	  .catch((err) => {
		  response.sendStatus(203);
	  });
}



export const githubWebhook = functions.https.onRequest(handleGithubRequest);
