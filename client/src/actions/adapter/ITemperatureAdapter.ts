export default interface ITemperatureService {
    async(): Promise<number>
}