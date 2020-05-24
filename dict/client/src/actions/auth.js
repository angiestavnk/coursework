"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = exports.loadUser = void 0;
const axios_1 = __importDefault(require("axios"));
const setAuthToken_1 = __importDefault(require("../utils/setAuthToken"));
const alert_1 = require("./alert");
const types_1 = require("./types");
//load User
exports.loadUser = () => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    if (localStorage.token) {
        setAuthToken_1.default(localStorage.token);
    }
    try {
        const res = yield axios_1.default.get('/api/auth');
        dispatch({
            type: types_1.USER_LOADED,
            payload: res.data
        });
    }
    catch (err) {
        dispatch({
            type: types_1.AUTH_ERROR
        });
    }
});
//register user
exports.register = ({ name, email, password }) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, email, password });
    try {
        const res = yield axios_1.default.post('/api/users', body, config);
        dispatch({
            type: types_1.REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(exports.loadUser());
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(alert_1.setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: types_1.REGISTER_FAIL
        });
    }
});
//Login user
exports.login = (email, password) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = yield axios_1.default.post('/api/auth', body, config);
        dispatch({
            type: types_1.LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(exports.loadUser());
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(alert_1.setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: types_1.LOGIN_FAIL
        });
    }
});
//Logout
exports.logout = () => dispatch => {
    dispatch({ type: types_1.LOGOUT });
};
