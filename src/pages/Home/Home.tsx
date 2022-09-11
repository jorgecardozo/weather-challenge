import ReactLoading from 'react-loading';
import * as lodash from 'lodash';
import { useEffect } from 'react';

// Store
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchWeatherLatAndLon } from '../../store/thunks/fetchCurrentWeather';

// Components
import WeatherTabs from '../WeatherTab/WeatherTabs';

interface Props {}

const Home = (props: Props) => {
	const { weather, isLoading } = useCustomSelector(selectCurrentWeatherData);
	const dispatch = useCustomDispatch();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			dispatch(
				fetchWeatherLatAndLon(
					position.coords.latitude,
					position.coords.longitude,
					null
				)
			);
		});
	}, []);

	return (
		<>
			{isLoading ? (
				<div className='d-flex justify-content-center align-items-center vh-100'>
					<ReactLoading type={'spin'} color='#0d6efd' />
				</div>
			) : !lodash.isEmpty(weather) ? (
				<>
					<WeatherTabs weather={weather} />
				</>
			) : (
				<div className='d-flex justify-content-center align-items-center vh-100'>
					{' '}
					No weathers to render{' '}
				</div>
			)}
		</>
	);
};

export default Home;
