"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import * as ApartBuilder from '../../actions/builder/ApartBuilder';
const Dashboard = props => {
    function createFirst(e) {
        e.preventDefault();
        console.log('По ссылке кликнули.');
        //   const apartBuilder = new ApartBuilder();
        //   apartBuilder.setApartmentId("test");
        //   apartBuilder.setTempSensorId("test123");
        //   console.log(apartBuilder.build());
    }
    function createSecond(e) {
        e.preventDefault();
        console.log('По ссылке тоже кликнули.');
    }
    return (<>
          <a href="#" onClick={createFirst}>
            Нажми на меня
          </a>
          <a href="#" onClick={createSecond}>
            Нажми на меня
        </a>
        </>);
};
Dashboard.propTypes = {};
exports.default = Dashboard;
