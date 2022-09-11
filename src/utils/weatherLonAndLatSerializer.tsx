export const WEEK_DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];
const dayInAWeek = new Date().getDay();
export const forecastDays = WEEK_DAYS.slice(
	dayInAWeek,
	WEEK_DAYS.length
).concat(WEEK_DAYS.slice(0, dayInAWeek));

export interface Weather {
	id: string;
	icon: string;
	description: string;
	day: string;
	temp: number;
	temp_max: number;
	temp_min: number;
	pressure: number;
	humidity: number;
	clouds: number;
	wind_speed: number;
	sea_level: number;
	feels_like: number;
	labelCity: string;
}

export const serializerCurrentWeather = (data: any, cities: any) => {
	const id = `${data.coord.lat.toFixed(2)}#${data.coord.lon.toFixed(2)}`;
	const currentWeather = {} as Weather;

	currentWeather.icon = data.weather[0].icon;
	currentWeather.description = data.weather[0].description;
	currentWeather.temp = data.main.temp;
	currentWeather.temp_max = data.main.temp_max;
	currentWeather.temp_min = data.main.temp_min;
	currentWeather.pressure = data.main.pressure;
	currentWeather.humidity = data.main.humidity;
	currentWeather.clouds = data.clouds.all;
	currentWeather.wind_speed = data.wind.speed;
	currentWeather.sea_level = data.main.sea_level;
	currentWeather.feels_like = data.main.feels_like;
	currentWeather.id = id;
	currentWeather.labelCity = cities
		? cities[id].label
		: `${data.name}, ${data.sys.country}`;

	return { currentWeather, currentWeatherId: id };
};
export const serializerForeCastWeather = (data: any, cities: any) => {
	const id = `${data.city.coord.lat.toFixed(2)}#${data.city.coord.lon.toFixed(
		2
	)}`;
	const forecastWeather = [] as any;

	data.list.splice(0, 7).map((day: any, idx: number) => {
		const object = {} as Weather;
		object.icon = day.weather[0].icon;
		object.description = day.weather[0].description;
		object.day = forecastDays[idx];
		object.temp_max = day.main.temp_max;
		object.temp_min = day.main.temp_min;
		object.pressure = day.main.pressure;
		object.humidity = day.main.humidity;
		object.clouds = day.clouds.all;
		object.wind_speed = day.wind.speed;
		object.sea_level = day.main.sea_level;
		object.feels_like = day.main.feels_like;
		object.id = id;
		object.labelCity = cities
			? cities[id].label
			: `${data.city.name}, ${data.city.country}`;
		forecastWeather.push(object);
	});

	return { forecastWeather, weatherForecastId: id };
};
