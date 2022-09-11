import React from 'react';
import { Weather } from '../../utils/weatherLonAndLatSerializer';
import './CurrentWeather.scss';

interface Props {
	data: Weather;
}

const CurrentWeather = ({ data }: Props) => {
	return (
		<div className='weather mb-4'>
			<div className='d-flex justify-content-between align-items-center'>
				<div>
					<p className='city'>{data.labelCity}</p>
					<p className='weather-description m-0'>{data.description}</p>
				</div>
				<img
					alt='weather'
					className='weather-icon'
					src={`icons/${data.icon}.png`}
				/>
			</div>
			<div className='d-flex justify-content-between align-items-center'>
				<p className='temperature w-auto'>{Math.round(data.temp)}°C</p>
				<div className='details'>
					<div className='d-flex justify-content-between mb-2'>
						<span className='parameter-label'>Details</span>
					</div>
					<div className='d-flex justify-content-between'>
						<span className='parameter-label'>Feels like</span>
						<span className='parameter-value'>
							{Math.round(data.feels_like)}°C
						</span>
					</div>
					<div className='d-flex justify-content-between'>
						<span className='parameter-label'>Wind</span>
						<span className='parameter-value'>{data.wind_speed} m/s</span>
					</div>
					<div className='d-flex justify-content-between'>
						<span className='parameter-label'>Humidity</span>
						<span className='parameter-value'>{data.humidity}%</span>
					</div>
					<div className='d-flex justify-content-between'>
						<span className='parameter-label'>Pressure</span>
						<span className='parameter-value'>{data.pressure} hPa</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
