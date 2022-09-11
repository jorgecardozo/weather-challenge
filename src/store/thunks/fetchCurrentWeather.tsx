// Services
import { WeatherService } from '../../services/WeatherService';

// Slices
import {
	currentWeatherSlice,
	setLoading,
} from '../slices/currentWeather/currentWeatherSlice';

// Store
import { AppDispatch } from '../store';

export const fetchWeatherLatAndLon =
	(lat: number, lon: number, cities: any) => async (dispatch: AppDispatch) => {
		try {
			dispatch(currentWeatherSlice.actions.fetchWeatherLatAndLon());
			const currentResponse = await WeatherService.getCurrentWeather(lat, lon);
			const forecastResponse = await WeatherService.getWeatherLatAndLon(
				lat,
				lon
			);
				console.log('currentResponse.status',currentResponse.status)
				console.log('forecastResponse.status',forecastResponse.status)
			if (currentResponse.status === 200 && forecastResponse.status === 200) {
				dispatch(setLoading(false));
				dispatch(
					currentWeatherSlice.actions.fetchWeatherLatAndLonSuccess({
						forecastResponse,
						currentResponse,
						cities,
					})
				);
			} else {
				dispatch(
					currentWeatherSlice.actions.fetchWeatherLatAndLonError({
						forecastResponse,
						currentResponse,
						cities,
					})
				);
			}
		} catch (error) {
			console.log('Error', error);
			dispatch(setLoading(false));
		}
	};
