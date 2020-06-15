import SunTime from './ISunTemp'
export default class SunriseService {
    public async getSunTime(): Promise<SunTime>  {
        const url = 'https://api.sunrise-sunset.org/json?lat=47.003670&lng=28.907089&date=today&formatted=0'
        const response = await fetch(url);
        const jsonSunrise = await response.json();
       
        const sunRiseDate = this.prepareTime(new Date(jsonSunrise.results.sunrise));
        const sunSetDate = this.prepareTime(new Date(jsonSunrise.results.sunset));
        const sunTimeElement: SunTime = {
            sunRiseTime: sunRiseDate,
            sunSetTime: sunSetDate
        }
        return sunTimeElement;
    }

    private prepareTime(date:Date) {
        const currentHours: string = ("0" + date.getHours()).slice(-2);
        const currentMinutes: string = ("0" + date.getMinutes()).slice(-2);
        return `${currentHours}:${currentMinutes}`
    }
}