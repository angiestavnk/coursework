import * as request from 'request'
import TemperatureAdapter from '../adapter/TemperatureAdapter'
export type TemperatureObserver = (temperature: Number) => void;

interface Subject {
    attach(observer: TemperatureObserver): void;
    detach(observer: TemperatureObserver): void;
}

class WeatherSubeject implements Subject {
    private observers: TemperatureObserver[] = [];
    private intervalId: number = 0;

    public attach(observer: TemperatureObserver) {
      //  console.log("DID SUBSCRIBE")
        this.observers.push(observer)
    }
    public detach(observerToRemove: TemperatureObserver) {
        this.observers = this.observers.filter(observer => observer !== observerToRemove);
    }
    public updateWeather() {
        this.fetchWeather();
        this.intervalId = window.setInterval(() => {
            this.fetchWeather();
        }, 3600000);
    }
    public cleanUpdates() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = 0;
        }
    }
    private fetchWeather = async() => {
        let adapter = new TemperatureAdapter()
        let test: number
        const self = this
        adapter.async().then(function(success) {
            self.notify(success)
        })
    }
    
    private notify(temperature: Number) {
        this.observers.forEach(observer => observer(temperature));
    }
}
const weatherSubeject = new WeatherSubeject();
weatherSubeject.updateWeather();
export default weatherSubeject;