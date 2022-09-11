// Libraries
import axios from 'axios';

export const apiWeathers = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
});

apiWeathers.interceptors.request.use(config => {
	config.url = `${config.url}&units=metric&appid=${
		import.meta.env.VITE_APP_API_KEY
	}`;
	return config;
});

export const apiCities = axios.create({
	baseURL: import.meta.env.VITE_APP_API_CITIES_URL,
});

apiCities.interceptors.request.use(config => {
	config.url = `${config.url}&rapidapi-key=${
		import.meta.env.VITE_APP_API_CITIES_KEY
	}`;
	return config;
});
