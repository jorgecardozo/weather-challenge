// Libraries
import { Tab, Tabs } from 'react-bootstrap';

// Components
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';

interface Props {
	weather: any;
}

const WeatherTabs = ({ weather }: Props) => {
	return (
		<Tabs id='justify-tab-example' className='mb-3' justify>
			{Object.values(weather).map((data: any, id: number) => {
				return (
					<Tab
						key={data.currentWeather.labelCity}
						eventKey={`Tabs ${data.currentWeather.labelCity}`}
						title={`${data.currentWeather.labelCity}`}
					>
						<div className='container'>
							<CurrentWeather data={data.currentWeather}></CurrentWeather>
							<Forecast data={data.weatherList} />
						</div>
					</Tab>
				);
			})}
		</Tabs>
	);
};

export default WeatherTabs;
