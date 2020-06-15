import React, { useEffect, useState } from 'react';
import Facade from '../../actions/facade/Facade';
import { Statistic } from 'semantic-ui-react'
import TodayData from '../../actions/facade/TodayData'
const TodayGrid = () => {
    
    const [todayData, setTodayData] = React.useState<TodayData>({ dailyTemp: {maxTemp: "", minTemp: ""}, sunTime: {sunRiseTime: "", sunSetTime: ""}, uvIndex: {currentUvIndex: "", maxUvIndex: ""}})
    const setValues = () => {
        const todayDataFacade = new Facade();
        todayDataFacade.getTodayData().then(function(todayData) {
            setTodayData(todayData)
       });
    }

    React.useEffect(() => {
        setValues()
    }, [])
    
    return (
        <div style={{paddingRight:'0px', backgroundColor:'rgba(255, 153, 51, 0.6)', borderRadius: '5px',  marginRight:'-160px'}}>
        <Statistic.Group widths='six'>
        <Statistic>
        <Statistic.Value>{todayData.dailyTemp.maxTemp}&deg;</Statistic.Value>
          <Statistic.Label>Max Temp</Statistic.Label>
        </Statistic>
    
        <Statistic>
          <Statistic.Value>
            {todayData.dailyTemp.minTemp}&deg;
          </Statistic.Value>
          <Statistic.Label>Min Temp</Statistic.Label>
        </Statistic>
    
        <Statistic>
          <Statistic.Value>
            {todayData.sunTime.sunRiseTime}
          </Statistic.Value>
          <Statistic.Label>Sunrise Time</Statistic.Label>
        </Statistic>
    
        <Statistic>
          <Statistic.Value>
          {todayData.sunTime.sunSetTime}
          </Statistic.Value>
          <Statistic.Label>Sunset Time</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>
            {todayData.uvIndex.currentUvIndex}
          </Statistic.Value>
          <Statistic.Label>UV index</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>
            {todayData.uvIndex.maxUvIndex}
          </Statistic.Value>
          <Statistic.Label>Max UV index</Statistic.Label>
        </Statistic>
      </Statistic.Group>
      </div>
    )
}
export default TodayGrid;