import { createSlice, PayloadAction, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Weather } from '../types/types'
import { AxiosResponse } from 'axios';
import { populate, serializerCurrentWeather, serializerForeCastWeather } from '../../utils/weatherLonAndLatSerializer';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

type CurrentWeather = {
    weather: Weather,
    isLoading: boolean,
    currentResponse: Response,
    forecastResponse: Response,
}

type Response = {
    status: number,
    message: string
}

const initialState: CurrentWeather = {
    weather: {},
    isLoading: false,
    currentResponse: {
        status: 0,
        message: ''
    },
    forecastResponse: {
        status: 0,
        message: ''
    }
}

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state: any) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state: any,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state: any,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchWeatherLatAndLon(state: any) {
      state.isLoading = true;
    },
    fetchWeatherLatAndLonSuccess(
      state: any,
      action: PayloadAction<any>
    ) {
      const cities = action.payload.cities;
      const { forecastWeather, weatherForecastId } = serializerForeCastWeather(action.payload.forecastResponse.data, cities);
      const { currentWeather, currentWeatherId } = serializerCurrentWeather(action.payload.currentResponse.data, cities);
      console.log("forecastWeather", forecastWeather)
      console.log("currentWeather", currentWeather)
      console.log("id", weatherForecastId)
      state.weather[`${weatherForecastId}`] = { 
        weatherList: forecastWeather,
        currentWeather: currentWeather
      };
      state.forecastResponse = {
        status: action.payload.forecastResponse.status,
        message: action.payload.forecastResponse.statusText,
      };
      state.currentResponse = {
        status: action.payload.currentResponse.status,
        message: action.payload.currentResponse.statusText,
      };
      // console.warn("cambio a true")
      
    },
    fetchWeatherLatAndLonError(
      state: any,
      action: PayloadAction<any>
    ) {
      state.isLoading = true;
      
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    removeAllWeather(
      state: any,
    ) {
      // console.log("entro al remove")
      state.weather = {}
    },
    populateWeather(
      state: any,
      action: PayloadAction<any>
    ) {
      // console.log("populate payloas", action.payload)
      state.weather = populate(action.payload.cities, action.payload.weather)
    },
    setLoading(
      state: any,
      action: PayloadAction<any>
    ){
      state.isLoading = action.payload;
    }
  },
});

export const { removeAllWeather, populateWeather, setLoading } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
