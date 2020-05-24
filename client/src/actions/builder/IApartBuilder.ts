import Apartment from './Apartment';
export default interface IApartBuilder {
    setApartmentId(apartmentId: string): void;
    setTempSensorId(tempSensorId: string): void;    
    setBrightSensorId(brightSensorId: string): void;
    setHumSensorId(humSensorId: string): void;
    build(): Apartment;
}


