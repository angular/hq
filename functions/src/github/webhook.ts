/**
 * Github Webhook API
 */
import * as functions from 'firebase-functions'
import * as firebase from 'firebase'
import * as admin from 'firebase-admin'

admin.initializeApp(functions.config().firebase);

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

	const ref = admin.database().ref('/_github_events');
	const queueAction = ref.push(request.body);

	Promise.resolve(queueAction)
	  .then((key) => {
		  response.sendStatus(203);
	  })
	  .catch((err) => {
		  response.sendStatus(203);
	  });
}



export const githubWebhook = functions.https.onRequest(handleGithubRequest);
