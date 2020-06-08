import React from 'react';
import {Line} from 'react-chartjs-2'
import { Divider } from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import City from './test.tsx';

const Dashboard = () => {
	const [chartData, setChartData] = React.useState({})
	const chart = () => {
		setChartData({
			labels: ['monday', 'tuesday', 'wednsday','thursday', 'friday'],
			datasets: [
				{
					label: 'temperature',
					data: [31, 29, 23, 30, 25],
					backgroundColor: [
						'rgba(75, 192, 192, 0.6)'
					],
					borderWidth: 4
				}
			]
		})
	}
	React.useEffect(() => {
		chart ()
	}, [])
	return(
		<div className="App">
			<h1>hello</h1>
			<City>Bla</City>
			<div style={{height:'500px', width: '500px'}}>
				<Line data={chartData} options={{
					responsive: true, 
					title: {text: 'First Chart', display: true},
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
		</div>

	)
}
export default Dashboard;