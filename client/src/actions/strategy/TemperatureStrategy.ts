import ChartData from './ChartData';
import IChartStrategy from './IChartStrategy';
import Axios from 'axios';
export default class TemperatureStrategy implements IChartStrategy{
    async(): Promise<ChartData[]> {
        const response = Axios.get('http://localhost:5000/api/temperature')
        return new Promise<ChartData[]>((resolve, reject) => {
            response.then(function(data) {
                // console.log(data.data)
                let temperatures: ChartData[] = []
                data.data.forEach( function(temperature: any) {
                    let chartElement: ChartData = {
                        value: temperature.temperature as number,
                        date: temperature.date as string
                    };
                    temperatures.push(chartElement);
                })
                resolve(temperatures);
        })
        })
        // console.log(responseData)
    }

}