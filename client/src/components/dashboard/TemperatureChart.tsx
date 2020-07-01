import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import TemperatureStrategy from '../../actions/strategy/TemperatureStrategy'
import ContextStrategy from '../../actions/strategy/ContextStrategy'
import HumidityStrategy from '../../actions/strategy/HumidityStrategy';
import BrightnessStrategy from '../../actions/strategy/BrightnessStrategy'
import ForecastService from '../../actions/facade/ForecastService';
import SunriseService from '../../actions/facade/SunriseService';
import UVIndexService from '../../actions/facade/UVIndexService';
import Facade from '../../actions/facade/Facade';
import TodayGrid from './TodayGrid';
const TemperatureChart = () => {
    let strategy = new ContextStrategy(new TemperatureStrategy())
    let labelName = 'Temperature'
    let bkColor = ['rgba(255, 153, 51, 0.6)']
    const [strategyType, setStrategyType] = React.useState("Temperature")

    const [chartData, setChartData] = React.useState({})
	const chart = () => {
        strategy.getChartsData().then(function(data) {
            console.log(data)
            let labels: String[] = [];
            let temp: number[] = [];
            data = data.slice(data.length - 20, data.length)
            data.forEach(function(element){
                let time = element.date.split(' ')
                labels.push(time[1])
                temp.push(element.value)
            })
            // temp = temp.slice(temp.length - 20, temp.length)
            // labels = labels.slice(labels.length - 20, labels.length)
            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: labelName,
                        data: temp,
                        backgroundColor: bkColor,
                        borderWidth: 4
                    }
                ]
            })
        })
    }

	React.useEffect(() => {
        chart ()
       const todayDataFacade = new Facade();
       todayDataFacade.getTodayData().then(function(todayData) {
           console.log(todayData)
       });
    }, [])


    const options = ['Temperature', 'Humidity', 'Brightness'];

    function handleClick(event: any) {
        console.log("DID SELECT")
        if (event.value === "Temperature") {
            strategy.setStrategy(new TemperatureStrategy());

            setStrategyType('Temperature')            
            labelName = 'Temperature'

        } else if(event.value === "Humidity") {
            setStrategyType('Humidity')
            strategy.setStrategy(new HumidityStrategy());
            labelName = 'Humidity'
            bkColor = ['rgba(3, 211, 252, 0.6)']
        } else {
            setStrategyType('Brightness')
            strategy.setStrategy(new BrightnessStrategy());
            labelName = 'Brightness'
            bkColor = ['rgba(52, 168, 87, 0.6)']
        }
       chart()
      }
    return (
        <div style={{borderColor: '#000FFF', boxShadow: "3px 3px 3px 3px #9E9E9E", borderRadius: '12px' }}>
        <Dropdown options={options} onChange = { handleClick } value={strategyType} placeholder="Select an option" />
        <Line data={chartData} options={{
            responsive: true, 
            title: {text: 'My Chart', display: true},
            scales: {
                yAxes: [
                    {
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }
                ]
            }
        }}/>
    </div>
    
    )
}
export default TemperatureChart;