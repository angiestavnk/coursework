import TemperatureStrategy from "./TemperatureStrategy";
import BrightnessStrategy from "./BrightnessStrategy";
import HumidityStrategy from "./HumidityStrategy"
import ITableData from "./ITableData"

export default class TableDataService {
    async getChartsData(): Promise<ITableData[]> {
        let temperatureService = new TemperatureStrategy() 
        let brightnessService = new BrightnessStrategy()
        let humidityService = new HumidityStrategy()
        let data: ITableData[] = [];
        return new Promise((resolve, reject) => 
        
        temperatureService.async().then(function(temperatureData){
          brightnessService.async().then(function(brightnessData){
            humidityService.async().then(function(humidityData){
              for(let i = 0; i < humidityData.length; i++) {
                const element: ITableData = {
                    date: humidityData[i].date,
                    temperature: temperatureData[i].value,
                    brightness: brightnessData[i].value,
                    humidity: humidityData[i].value
                }
                data.push(element)
              }
              resolve(data)
            })
          })
        })
    )}
}