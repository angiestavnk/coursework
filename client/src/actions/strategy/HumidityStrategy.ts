import ChartData from './ChartData';
import IChartStrategy from './IChartStrategy';
import Axios from 'axios';
export default class HumidityStrategy {
    async(): Promise<ChartData[]> {
        const response = Axios.get('/api/humidity')
        return new Promise<ChartData[]>((resolve, reject) => {
            response.then(function(data) {
                let humidities: ChartData[] = []
                data.data.forEach( function(humidity: any) {
                    let chartElement: ChartData = {
                        value: humidity.humidity as number,
                        date: humidity.date as string
                    };
                    humidities.push(chartElement);
                })
                resolve(humidities);
        })
        })
    }
}