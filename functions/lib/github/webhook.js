"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Github Webhook API
 */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
function parseRequest(request) {
    const action = request.body;
    if (!action.type) {
        return undefined;
    }
    return action;
}
function handleRequest(request, response) {
    if (request.method === 'OPTIONS') {
        response.sendStatus(200);
        return;
    }
    const ref = admin.database().ref('/github_actions');
    const queueAction = ref.push(request.body);
    console.log(queueAction);
    Promise.resolve(queueAction)
        .then((key) => {
        console.log(key);
        response.sendStatus(203);
    })
        .catch((err) => {
        console.log(err);
        response.sendStatus(203);
    });
}
exports.githubWebhook = functions.https.onRequest(handleRequest);
