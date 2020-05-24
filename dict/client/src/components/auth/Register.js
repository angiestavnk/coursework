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
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const alert_1 = require("../../actions/alert");
const auth_1 = require("../../actions/auth");
const react_router_dom_1 = require("react-router-dom");
const prop_types_1 = __importDefault(require("prop-types"));
const test_ts_1 = require("./test.ts");
const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = react_1.useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = formData;
    const onChange = e => setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    const onSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        }
        else {
            test_ts_1.foo();
            //            register({ name, email, password });
        }
    });
    if (isAuthenticated) {
        return <react_router_dom_1.Redirect to='/dashboard'/>;
    }
    return (<react_1.Fragment>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" onChange={e => onChange(e)} value={name}/>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" onChange={e => onChange(e)} value={email}/>
          <small className="form-text">This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" 
    //    minLength="6"
    onChange={e => onChange(e)} value={password}/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" name="password2" 
    //  minLength="6"
    onChange={e => onChange(e)} value={password2}/>
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
      </form>
      <p className="my-1">
        Already have an account? <react_router_dom_1.Link to="/login">Sign In</react_router_dom_1.Link>
      </p>
        </react_1.Fragment>);
};
Register.propTypes = {
    setAlert: prop_types_1.default.func.isRequired,
    register: prop_types_1.default.func.isRequired,
    isAuthenticated: prop_types_1.default.bool,
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
exports.default = react_redux_1.connect(mapStateToProps, { setAlert: alert_1.setAlert, register: auth_1.register })(Register);
