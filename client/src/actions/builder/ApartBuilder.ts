import IApartBuilder  from './IApartBuilder';
import Apartment from './Apartment';
export default class ApartBuilder implements IApartBuilder {
    private readonly apartment: Apartment;
    constructor() {
        this.apartment = {
            apartmentId: "",
            tempSensorId: "",
            humSensorId: "",
            brightSensorId: ""
        };
    }

    setApartmentId(apartmentId: string): void {
        this.apartment.apartmentId = apartmentId;
    }

    setTempSensorId(tempSensorId: string): void {
        this.apartment.tempSensorId = tempSensorId;
    }
    setHumSensorId(humSensorId: string): void {
        this.apartment.humSensorId = humSensorId;
    }
    setBrightSensorId(brightSensorId: string): void {
        this.apartment.brightSensorId = brightSensorId;
    }

    build(): Apartment {
        return this.apartment;
    }
}