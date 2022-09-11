import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../../types/types';
import { AxiosResponse } from 'axios';
import {
	serializerCurrentWeather,
	serializerForeCastWeather,
} from '../../../utils/weatherLonAndLatSerializer';

interface CurrentWeather {
	weather: Object;
	isLoading: boolean;
	currentResponse: Response;
	forecastResponse: Response;
}

interface Response {
	status: number;
	message: string;
}

const initialState: CurrentWeather = {
	weather: {},
	isLoading: false,
	currentResponse: {
		status: 0,
		message: '',
	},
	forecastResponse: {
		status: 0,
		message: '',
	},
};

export const currentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		fetchWeatherLatAndLon(state: any) {
			state.isLoading = true;
		},
		fetchWeatherLatAndLonSuccess(state: any, action: PayloadAction<any>) {
			const cities = action.payload.cities;
			const { forecastWeather, weatherForecastId } = serializerForeCastWeather(
				action.payload.forecastResponse.data,
				cities
			);
			const { currentWeather } = serializerCurrentWeather(
				action.payload.currentResponse.data,
				cities
			);

			state.weather[`${weatherForecastId}`] = {
				weatherList: forecastWeather,
				currentWeather,
			};
			state.forecastResponse = {
				status: action.payload.forecastResponse.status,
				message: action.payload.forecastResponse.statusText,
			};
			state.currentResponse = {
				status: action.payload.currentResponse.status,
				message: action.payload.currentResponse.statusText,
			};
		},
		fetchWeatherLatAndLonError(state: any, action: PayloadAction<any>) {
			state.isLoading = false;

			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			};
		},
		removeAllWeather(state: any) {
			state.weather = {};
		},
		setLoading(state: any, action: PayloadAction<any>) {
			state.isLoading = action.payload;
		},
	},
});

export const { removeAllWeather, setLoading } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
