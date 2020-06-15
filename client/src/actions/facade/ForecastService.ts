import DailyTemp from "./IDailyTemp";

export default class ForecastService {
   public async getForecast(): Promise<DailyTemp>  {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=47.003670&lon=28.907089&exclude=minutely,hourly&appid=87fb91943d7ebff1f25af0b5b4da4fd5&units=metric'
    const response = await fetch(url);
    const jsonWeather = await response.json();
    const maxTemperature = jsonWeather.daily[0].temp.max;
    const minTemperature = jsonWeather.daily[0].temp.min;
    const dailyTempElement: DailyTemp = {
        maxTemp: maxTemperature,
        minTemp: minTemperature
    }
    return dailyTempElement;
}
}