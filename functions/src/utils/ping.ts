import * as functions from 'firebase-functions'

export const ping = functions.https.onRequest((req,res) => {
	res.send(JSON.stringify({pong: Date.now()}));
});
