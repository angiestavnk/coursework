"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const alert_1 = __importDefault(require("./alert"));
const auth_1 = __importDefault(require("./auth"));
exports.default = redux_1.combineReducers({
    alert: alert_1.default,
    auth: auth_1.default
});
