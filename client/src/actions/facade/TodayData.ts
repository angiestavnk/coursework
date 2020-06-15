import DailyTemp from './IDailyTemp'
import SunTime from './ISunTemp'
import UVIndex from './IUVindex'

export default interface TodayData {
    dailyTemp: DailyTemp;
    sunTime: SunTime;
    uvIndex: UVIndex;
}