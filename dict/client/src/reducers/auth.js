"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../actions/types");
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};
function default_1(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types_1.USER_LOADED:
            return Object.assign(Object.assign({}, state), { isAuthenticated: true, loading: false, user: payload });
        case types_1.REGISTER_SUCCESS:
        case types_1.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return Object.assign(Object.assign(Object.assign({}, state), payload), { isAuthenticated: true, loading: false });
        case types_1.REGISTER_FAIL:
        case types_1.AUTH_ERROR:
        case types_1.LOGIN_FAIL:
        case types_1.LOGOUT:
            localStorage.removeItem('token');
            return Object.assign(Object.assign({}, state), { token: null, isAuthenticated: false, loading: false });
        default:
            return state;
    }
}
exports.default = default_1;
