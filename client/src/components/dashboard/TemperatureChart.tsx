import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import TemperatureStrategy from '../../actions/strategy/TemperatureStrategy'
import ContextStrategy from '../../actions/strategy/ContextStrategy'
import HumidityStrategy from '../../actions/strategy/HumidityStrategy';
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
            data.forEach(function(element){
                labels.push(element.date)
                temp.push(element.value)
            })
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


    const options = ['Temperature', 'Humidity'];

    function handleClick(event: any) {
        console.log("DID SELECT")
        if (event.value === "Temperature") {
            strategy.setStrategy(new TemperatureStrategy());

            setStrategyType('Temperature')            
            labelName = 'Temperature'

        } else {
            setStrategyType('Humidity')
            strategy.setStrategy(new HumidityStrategy());
            labelName = 'Humidity'
            bkColor = ['rgba(255, 153, 51, 0.6)']
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