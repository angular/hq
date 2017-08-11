"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ping_1 = require("./utils/ping");
exports.ping = ping_1.ping;
const handler_1 = require("./actions/handler");
exports.dispatch = handler_1.dispatch;
const webhook_1 = require("./github/webhook");
exports.githubWebhook = webhook_1.githubWebhook;
