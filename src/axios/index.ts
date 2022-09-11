import axios from 'axios';
// console.log("env ", import.meta.env.VITE_APP_API_URL)
// console.log("env vite", import.meta.env.VITE_TEST_VAR)
// console.log("key vite", import.meta.env.VITE_APP_API_KEY)
export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
})

api.interceptors.request.use(config => {
    // console.log("config",config.url)
    config.url = `${config.url}&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`;
    return config;
})

export const apiCities = axios.create({
    baseURL: import.meta.env.VITE_APP_API_CITIES_URL,
})

apiCities.interceptors.request.use(config => {
    // console.log("config",config.url)
    config.url = `${config.url}&rapidapi-key=${import.meta.env.VITE_APP_API_CITIES_KEY}`;
    return config;
})
