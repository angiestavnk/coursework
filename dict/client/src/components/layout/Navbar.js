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
exports.Navbar = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const prop_types_1 = __importDefault(require("prop-types"));
const auth_1 = require("../../actions/auth");
exports.Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (<ul>
      <li>
        <a onClick={logout} href='#!'>
          <i className="fas fa-sign-out-alt"></i>{' '}
         <span className="hide-sm"> Logout </span> </a>
      </li>
  </ul>);
    const guestLinks = (<ul>
    <li><react_router_dom_1.Link to="/register">Register</react_router_dom_1.Link></li>
    <li><react_router_dom_1.Link to="/login">Login</react_router_dom_1.Link></li>
  </ul>);
    return (<nav className="navbar bg-dark">
        <h1>
          <react_router_dom_1.Link to="/">UniversalHelper</react_router_dom_1.Link>
        </h1>
    {!loading && (<react_1.Fragment>{isAuthenticated ? authLinks : guestLinks}</react_1.Fragment>)}
      </nav>);
};
exports.Navbar.propTypes = {
    logout: prop_types_1.default.func.isRequired,
    auth: prop_types_1.default.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
exports.default = react_redux_1.connect(mapStateToProps, { logout: auth_1.logout })(exports.Navbar);
