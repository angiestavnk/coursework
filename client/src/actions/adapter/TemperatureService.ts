export default class TemperatureSevice {
    static shared: TemperatureSevice = new TemperatureSevice();
    private constructor() {};

    /**
     * fetchTemperature
     */
    public async fetchWeather(): Promise<number> {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=Chisinau,md&appid=87fb91943d7ebff1f25af0b5b4da4fd5&units=imperial'
        const response = await fetch(url);
        const jsonWeather = await response.json();
        //console.log(jsonWeather)
        return jsonWeather.main.temp;
    }
}