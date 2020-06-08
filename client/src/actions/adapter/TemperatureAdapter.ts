import TemperatureSevice from './TemperatureService'
import ITemperatureService  from './ITemperatureAdapter'
export default class TemperatureAdapter implements ITemperatureService {
     async(): Promise<number> {
        return new Promise((resolve, reject) => { TemperatureSevice.shared.fetchWeather().then(function(value) {
            resolve(Math.floor((value - 32) * 5 / 9));
        })})
    }}