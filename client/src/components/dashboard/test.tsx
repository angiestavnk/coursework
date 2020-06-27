import React, { useEffect, useState } from 'react';
import weatherSubject, { TemperatureObserver } from '../../actions/observer/TemperatureObserver'
const City: React.FC = () =>{
    const [time, setTime] = useState(new Date())
    const [currentTemperature, setCurrentTemperature] = useState<Number>()
    const onTemperatureUpdated: TemperatureObserver = (temperature: Number) => {
        setCurrentTemperature(temperature)
    }
useEffect(() => {
    weatherSubject.attach(onTemperatureUpdated)

    window.setInterval(() => {
        setTime(new Date()) 
     }, 1000);

    return() => weatherSubject.detach(onTemperatureUpdated);
}, [])



return (
    <div className="container-weather" style={{color:'white'}}>
    <div className="background-weather">
    <div className="Circle1"></div>
    <div className="Circle2"></div>
    <div className="Circle3"></div>
     <div className="content-weather">
        <h1 className="Condition"><i className="material-icons sun"></i> Cloudy</h1>
        <h1 className="Temp"> {currentTemperature}&deg;</h1>
        <h1 className="Time">{time.toLocaleTimeString()} </h1>
        <h1 className="Location"><i className="material-icons locationIcon"></i>Chisinau</h1>
      </div>
    </div>
    </div>

    
)}
export default City;