"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function thst takes a piece of state and dispatch alert in action
const types_1 = require("../actions/types");
const initialState = [];
function default_1(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types_1.SET_ALERT:
            return [...state, payload];
        case types_1.REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}
exports.default = default_1;
