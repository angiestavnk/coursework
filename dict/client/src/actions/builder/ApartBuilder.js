"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
class ApartBuilder {
    constructor() {
        this.apartment = {
            apartmentId: "",
            tempSensorId: "",
            humSensorId: "",
            brightSensorId: ""
        };
    }
    setApartmentId(apartmentId) {
        this.apartment.apartmentId = apartmentId;
    }
    setTempSensorId(tempSensorId) {
        this.apartment.tempSensorId = tempSensorId;
    }
    setHumSensorId(humSensorId) {
        this.apartment.humSensorId = humSensorId;
    }
    setBrightSensorId(brightSensorId) {
        this.apartment.brightSensorId = brightSensorId;
    }
    build() {
        return this.apartment;
    }
}
__exportStar(require("./ApartBuilder"), exports);
