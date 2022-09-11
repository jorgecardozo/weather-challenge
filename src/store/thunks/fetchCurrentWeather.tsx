import { WeatherService } from "../../services/WeatherService"
import { currentWeatherSlice, setLoading } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getCurrentWeather(payload);

        console.log("response: ", res)
    
        if (res.status === 200) {
            console.log("success: ", res)
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
        }
        else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
        }
    } catch (error) {
        console.log("Error", error)
    }
} 

export const fetchWeatherLatAndLon = (lat: number, lon: number, cities: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
        const currentResponse = await WeatherService.getCurrentWeather(lat, lon);
        const forecastResponse = await WeatherService.getWeatherLatAndLon(lat, lon);

        console.log("response currentResponse: ", currentResponse)
        console.log("response forecastResponse: ", forecastResponse)
    
        if (currentResponse.status === 200) {
            console.log("success lat and lon: ", currentResponse)
            dispatch(setLoading(false));
            dispatch(currentWeatherSlice.actions.fetchWeatherLatAndLonSuccess({forecastResponse: forecastResponse, currentResponse: currentResponse, cities: cities}))
        }
        else {
            dispatch(currentWeatherSlice.actions.fetchWeatherLatAndLonError({forecastResponse: forecastResponse, currentResponse: currentResponse, cities: cities}))
        }
    } catch (error) {
        console.log("Error", error)
    }
} 