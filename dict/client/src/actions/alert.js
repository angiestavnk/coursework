"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAlert = void 0;
const uuid_1 = require("uuid");
const types_1 = require("./types");
exports.setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid_1.v4();
    dispatch({
        type: types_1.SET_ALERT,
        payload: { msg, alertType, id }
    });
    setTimeout(() => dispatch({ type: types_1.REMOVE_ALERT, payload: id }), timeout);
};
