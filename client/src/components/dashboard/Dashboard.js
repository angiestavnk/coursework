import React from 'react';
import City from './test.tsx';

import TemperatureChart from './TemperatureChart.tsx';
import TodayGrid from './TodayGrid.tsx'

const Dashboard = () => {
	const [chartData, setChartData] = React.useState({})
	const [chart1, setChart] = React.useState("TemperatureChart")
	const chart = () => {
		setChart("TemperatureChart")
		// setChartData({
		// 	labels: ['monday', 'tuesday', 'wednsday','thursday', 'friday'],
		// 	datasets: [
		// 		{
		// 			label: 'temperature',
		// 			data: [31, 29, 23, 30, 25],
		// 			backgroundColor: [
		// 				'rgba(75, 192, 192, 0.6)'
		// 			],
		// 			borderWidth: 4
		// 		}
		// 	]
		// })
	}

	
	const CustomTag = `TemperatureChart`
	React.useEffect(() => {
		chart ()
	}, [])
	return(
	
		<div className="App">
			<h1></h1>
			<City>Bla</City>
			<div style={{height:'400px', width: '700px', marginTop: '-24px', marginRight:'40px', marginBottom:'32px'}}>
				<TemperatureChart></TemperatureChart>
			</div>
			<TodayGrid></TodayGrid>
		</div>

	)
}
export default Dashboard;