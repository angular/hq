"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
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
    const action = parseRequest(request);
    if (!action) {
        response.sendStatus(406); //not acceptable
        return;
    }
    response.status(203);
    response.json({ dispatched: true });
}
exports.dispatch = functions.https.onRequest(handleRequest);
