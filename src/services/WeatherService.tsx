import { AxiosResponse } from 'axios';
import { Weather } from '../store/types/types';
import { apiWeathers } from '../axios';

export class WeatherService {
	static async getCurrentWeather(
		lat: number,
		lon: number
	): Promise<AxiosResponse<Weather>> {
		return await apiWeathers.get<Weather>(`/weather?lat=${lat}&lon=${lon}`);
	}

	static async getWeatherLatAndLon(
		lat: number,
		lon: number
	): Promise<AxiosResponse<Weather>> {
		return await apiWeathers.get<Weather>(`/forecast?lat=${lat}&lon=${lon}`);
	}
}
