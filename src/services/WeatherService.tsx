import axios, { AxiosResponse } from 'axios';
import { Weather } from '../store/types/types';
import { api } from '../axios';

export class WeatherService {
  static getCurrentWeather(lat: number, lon: number): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?lat=${lat}&lon=${lon}`);
    // return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e5590247cb53e40b0e4047917f744ab6`)
  }

  static getWeatherLatAndLon(lat: number, lon: number): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/forecast?lat=${lat}&lon=${lon}`);
    // return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e5590247cb53e40b0e4047917f744ab6`)
  }
}
