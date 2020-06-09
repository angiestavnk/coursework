import ChartData from './ChartData'
export default interface IChartStrategy {
    async(): Promise<ChartData[]>
}