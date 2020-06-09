import ChartData from './ChartData';
import IChartStrategy from './IChartStrategy';
import TemperatureStrategy from './TemperatureStrategy'
export default class ContextStrategy {
    strategy: IChartStrategy;
    constructor(strategy: IChartStrategy) {
        this.strategy = strategy
    }
    public setStrategy(strategy: IChartStrategy) {
        this.strategy = strategy
    }
    async getChartsData(): Promise<ChartData[]> {
        return new Promise((resolve, reject) => this.strategy.async().then( function(data) {
            console.log(data)
            resolve(data)
            // resolve([])
        }))
    }
}