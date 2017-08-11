"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.ping = functions.https.onRequest((req, res) => {
    res.send(JSON.stringify({ pong: Date.now() }));
});
