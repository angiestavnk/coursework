"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Landing = () => {
    return (<section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Universal Helper</h1>
            <p className="lead">
            Learn statistics. Control the light and fan. Create comfort Conditions.
            </p>
            <div className="buttons">
              <react_router_dom_1.Link to="/register" className="btn btn-primary">Sign Up</react_router_dom_1.Link>
              <react_router_dom_1.Link to="/login" className="btn btn-light">Login</react_router_dom_1.Link>
            </div>
          </div>
        </div>
      </section>);
};
exports.default = Landing;
