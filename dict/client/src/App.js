"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./components/layout/Navbar"));
const Landing_1 = __importDefault(require("./components/layout/Landing"));
const setAuthToken_1 = __importDefault(require("./utils/setAuthToken"));
const Login_1 = __importDefault(require("./components/auth/Login"));
const Register_1 = __importDefault(require("./components/auth/Register"));
const Alert_1 = __importDefault(require("./components/layout/Alert"));
const Dashboard_1 = __importDefault(require("./components/dashboard/Dashboard"));
const PrivateRoute_1 = __importDefault(require("./components/routing/PrivateRoute"));
//Redux
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./store"));
const auth_1 = require("./actions/auth");
require("./App.css");
if (localStorage.token) {
    setAuthToken_1.default(localStorage.token);
}
const App = () => {
    react_1.useEffect(() => {
        store_1.default.dispatch(auth_1.loadUser());
    }, []);
    return (<react_redux_1.Provider store={store_1.default}>
    <react_router_dom_1.BrowserRouter>
    <react_1.Fragment>
    <Navbar_1.default />
    
    <react_router_dom_1.Route exact path='/' component={Landing_1.default}/>
    <section className="container">
        <Alert_1.default />
        <react_router_dom_1.Switch>
            <react_router_dom_1.Route exact path="/register" component={Register_1.default}/>
            <react_router_dom_1.Route exact path="/login" component={Login_1.default}/>
            <PrivateRoute_1.default exact path="/dashboard" component={Dashboard_1.default}/>
        </react_router_dom_1.Switch>
    </section>
    </react_1.Fragment>
 </react_router_dom_1.BrowserRouter>
 </react_redux_1.Provider>);
};
exports.default = App;
