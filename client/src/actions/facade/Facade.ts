import TodayData from "./TodayData";
import SunriseService from "./SunriseService";
import ForecastService from "./ForecastService";
import UVIndexService from "./UVIndexService";

export default class Facade {
    public async getTodayData(): Promise<TodayData> {

        const sunService = new SunriseService();
        const forecastService = new ForecastService();
        const uvService = new UVIndexService();

        return new Promise((resolve, reject) => sunService.getSunTime().then(function (sunData){
            forecastService.getForecast().then(function(forecastData){
                uvService.getUVIndex().then(function(uvData){
                    const todayDataElement: TodayData = {
                        dailyTemp: forecastData,
                        sunTime: sunData,
                        uvIndex: uvData
                    }
                    console.log(todayDataElement)
                    resolve(todayDataElement);
                })
            })
        }))
    }
}