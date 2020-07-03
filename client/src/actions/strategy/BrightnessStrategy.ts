import ChartData from './ChartData';
import IChartStrategy from './IChartStrategy';
import Axios from 'axios';
export default class BrightnessStrategy {
    async(): Promise<ChartData[]> {
        const response = Axios.get('/api/brightness')
        return new Promise<ChartData[]>((resolve, reject) => {
            response.then(function(data) {
                let brightnesses: ChartData[] = []
                data.data.forEach( function(brightness: any) {
                    let chartElement: ChartData = {
                        value: 4095 - (brightness.brightness as number),
                        date: brightness.date as string
                    };
                    brightnesses.push(chartElement);
                })
                resolve(brightnesses);
        })
        })
    }
}