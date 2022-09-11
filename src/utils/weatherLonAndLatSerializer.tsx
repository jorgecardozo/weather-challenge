import * as lodash from "lodash";

export const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayInAWeek = new Date().getDay();
export const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

const response =
{
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1662508800,
            "main": {
                "temp": 16.38,
                "feels_like": 16.14,
                "temp_min": 15.38,
                "temp_max": 16.38,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1012,
                "humidity": 79,
                "temp_kf": 1
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.28,
                "deg": 35,
                "gust": 6.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-07 00:00:00"
        },
        {
            "dt": 1662519600,
            "main": {
                "temp": 15.25,
                "feels_like": 15,
                "temp_min": 14.43,
                "temp_max": 15.25,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1011,
                "humidity": 83,
                "temp_kf": 0.82
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.75,
                "deg": 26,
                "gust": 10.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-07 03:00:00"
        },
        {
            "dt": 1662530400,
            "main": {
                "temp": 13.67,
                "feels_like": 13.39,
                "temp_min": 13.67,
                "temp_max": 13.67,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1009,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.26,
                "deg": 7,
                "gust": 10.39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-07 06:00:00"
        },
        {
            "dt": 1662541200,
            "main": {
                "temp": 13,
                "feels_like": 12.68,
                "temp_min": 13,
                "temp_max": 13,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1009,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.29,
                "deg": 8,
                "gust": 9.41
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-07 09:00:00"
        },
        {
            "dt": 1662552000,
            "main": {
                "temp": 14.24,
                "feels_like": 13.78,
                "temp_min": 14.24,
                "temp_max": 14.24,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1009,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 4.74,
                "deg": 9,
                "gust": 8.27
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-07 12:00:00"
        },
        {
            "dt": 1662562800,
            "main": {
                "temp": 17.92,
                "feels_like": 17.36,
                "temp_min": 17.92,
                "temp_max": 17.92,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1007,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 4.07,
                "deg": 19,
                "gust": 6.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-07 15:00:00"
        },
        {
            "dt": 1662573600,
            "main": {
                "temp": 20.33,
                "feels_like": 19.7,
                "temp_min": 20.33,
                "temp_max": 20.33,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 18
            },
            "wind": {
                "speed": 4.22,
                "deg": 20,
                "gust": 6.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-07 18:00:00"
        },
        {
            "dt": 1662584400,
            "main": {
                "temp": 19.45,
                "feels_like": 18.97,
                "temp_min": 19.45,
                "temp_max": 19.45,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 4.02,
                "deg": 24,
                "gust": 7.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-07 21:00:00"
        },
        {
            "dt": 1662595200,
            "main": {
                "temp": 17.21,
                "feels_like": 16.84,
                "temp_min": 17.21,
                "temp_max": 17.21,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 3.71,
                "deg": 29,
                "gust": 8.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-08 00:00:00"
        },
        {
            "dt": 1662606000,
            "main": {
                "temp": 15.61,
                "feels_like": 15.34,
                "temp_min": 15.61,
                "temp_max": 15.61,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.41,
                "deg": 23,
                "gust": 8.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-08 03:00:00"
        },
        {
            "dt": 1662616800,
            "main": {
                "temp": 14.98,
                "feels_like": 14.86,
                "temp_min": 14.98,
                "temp_max": 14.98,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 3.9,
                "deg": 21,
                "gust": 9.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-08 06:00:00"
        },
        {
            "dt": 1662627600,
            "main": {
                "temp": 14.38,
                "feels_like": 14.22,
                "temp_min": 14.38,
                "temp_max": 14.38,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1001,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.28,
                "deg": 17,
                "gust": 8.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-08 09:00:00"
        },
        {
            "dt": 1662638400,
            "main": {
                "temp": 15.88,
                "feels_like": 15.48,
                "temp_min": 15.88,
                "temp_max": 15.88,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.88,
                "deg": 341,
                "gust": 3.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-08 12:00:00"
        },
        {
            "dt": 1662649200,
            "main": {
                "temp": 18.2,
                "feels_like": 17.77,
                "temp_min": 18.2,
                "temp_max": 18.2,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 15
            },
            "wind": {
                "speed": 1.38,
                "deg": 336,
                "gust": 2.29
            },
            "visibility": 10000,
            "pop": 0.3,
            "rain": {
                "3h": 0.15
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-08 15:00:00"
        },
        {
            "dt": 1662660000,
            "main": {
                "temp": 18.9,
                "feels_like": 18.57,
                "temp_min": 18.9,
                "temp_max": 18.9,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1001,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 53
            },
            "wind": {
                "speed": 0.95,
                "deg": 251,
                "gust": 1.59
            },
            "visibility": 10000,
            "pop": 0.48,
            "rain": {
                "3h": 0.31
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-08 18:00:00"
        },
        {
            "dt": 1662670800,
            "main": {
                "temp": 15.49,
                "feels_like": 15.13,
                "temp_min": 15.49,
                "temp_max": 15.49,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1003,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 8.39,
                "deg": 212,
                "gust": 12.92
            },
            "visibility": 10000,
            "pop": 0.77,
            "rain": {
                "3h": 0.32
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-08 21:00:00"
        },
        {
            "dt": 1662681600,
            "main": {
                "temp": 11.72,
                "feels_like": 11.19,
                "temp_min": 11.72,
                "temp_max": 11.72,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1007,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 7.87,
                "deg": 186,
                "gust": 13.69
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.35
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-09 00:00:00"
        },
        {
            "dt": 1662692400,
            "main": {
                "temp": 11.39,
                "feels_like": 10.67,
                "temp_min": 11.39,
                "temp_max": 11.39,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1010,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.92,
                "deg": 186,
                "gust": 10.15
            },
            "visibility": 10000,
            "pop": 0.42,
            "rain": {
                "3h": 0.31
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-09 03:00:00"
        },
        {
            "dt": 1662703200,
            "main": {
                "temp": 9.96,
                "feels_like": 7.89,
                "temp_min": 9.96,
                "temp_max": 9.96,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1010,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 61
            },
            "wind": {
                "speed": 4.15,
                "deg": 187,
                "gust": 8.2
            },
            "visibility": 10000,
            "pop": 0.34,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-09 06:00:00"
        },
        {
            "dt": 1662714000,
            "main": {
                "temp": 8.74,
                "feels_like": 6.68,
                "temp_min": 8.74,
                "temp_max": 8.74,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1010,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.55,
                "deg": 187,
                "gust": 6.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-09 09:00:00"
        },
        {
            "dt": 1662724800,
            "main": {
                "temp": 9.43,
                "feels_like": 7.05,
                "temp_min": 9.43,
                "temp_max": 9.43,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1013,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.57,
                "deg": 213,
                "gust": 7.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-09 12:00:00"
        },
        {
            "dt": 1662735600,
            "main": {
                "temp": 13.8,
                "feels_like": 12.33,
                "temp_min": 13.8,
                "temp_max": 13.8,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1013,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 4.92,
                "deg": 236,
                "gust": 7.41
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-09 15:00:00"
        },
        {
            "dt": 1662746400,
            "main": {
                "temp": 15.53,
                "feels_like": 14.1,
                "temp_min": 15.53,
                "temp_max": 15.53,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1011,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 6.46,
                "deg": 251,
                "gust": 9.14
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-09 18:00:00"
        },
        {
            "dt": 1662757200,
            "main": {
                "temp": 15.74,
                "feels_like": 14.34,
                "temp_min": 15.74,
                "temp_max": 15.74,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1010,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 5.58,
                "deg": 265,
                "gust": 9.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-09 21:00:00"
        },
        {
            "dt": 1662768000,
            "main": {
                "temp": 13.72,
                "feels_like": 12.11,
                "temp_min": 13.72,
                "temp_max": 13.72,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1012,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 5.27,
                "deg": 265,
                "gust": 11.59
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-10 00:00:00"
        },
        {
            "dt": 1662778800,
            "main": {
                "temp": 12.22,
                "feels_like": 10.41,
                "temp_min": 12.22,
                "temp_max": 12.22,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1013,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.4,
                "deg": 260,
                "gust": 13.18
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-10 03:00:00"
        },
        {
            "dt": 1662789600,
            "main": {
                "temp": 11.19,
                "feels_like": 9.33,
                "temp_min": 11.19,
                "temp_max": 11.19,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1013,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 7.27,
                "deg": 252,
                "gust": 13.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-10 06:00:00"
        },
        {
            "dt": 1662800400,
            "main": {
                "temp": 9.61,
                "feels_like": 6.59,
                "temp_min": 9.61,
                "temp_max": 9.61,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1014,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.5,
                "deg": 239,
                "gust": 13.29
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-10 09:00:00"
        },
        {
            "dt": 1662811200,
            "main": {
                "temp": 10.38,
                "feels_like": 8.54,
                "temp_min": 10.38,
                "temp_max": 10.38,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1016,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.93,
                "deg": 231,
                "gust": 13.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-10 12:00:00"
        },
        {
            "dt": 1662822000,
            "main": {
                "temp": 14.93,
                "feels_like": 13.55,
                "temp_min": 14.93,
                "temp_max": 14.93,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1017,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.88,
                "deg": 229,
                "gust": 8.79
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-10 15:00:00"
        },
        {
            "dt": 1662832800,
            "main": {
                "temp": 17.63,
                "feels_like": 16.41,
                "temp_min": 17.63,
                "temp_max": 17.63,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1016,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.55,
                "deg": 221,
                "gust": 6.54
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-10 18:00:00"
        },
        {
            "dt": 1662843600,
            "main": {
                "temp": 17.08,
                "feels_like": 15.91,
                "temp_min": 17.08,
                "temp_max": 17.08,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1016,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.16,
                "deg": 202,
                "gust": 4.93
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-10 21:00:00"
        },
        {
            "dt": 1662854400,
            "main": {
                "temp": 14.52,
                "feels_like": 13.41,
                "temp_min": 14.52,
                "temp_max": 14.52,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1017,
                "humidity": 53,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.65,
                "deg": 173,
                "gust": 1.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-11 00:00:00"
        },
        {
            "dt": 1662865200,
            "main": {
                "temp": 12.82,
                "feels_like": 12.12,
                "temp_min": 12.82,
                "temp_max": 12.82,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.45,
                "deg": 98,
                "gust": 6.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-11 03:00:00"
        },
        {
            "dt": 1662876000,
            "main": {
                "temp": 11.76,
                "feels_like": 11.08,
                "temp_min": 11.76,
                "temp_max": 11.76,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1018,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.66,
                "deg": 55,
                "gust": 3.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-11 06:00:00"
        },
        {
            "dt": 1662886800,
            "main": {
                "temp": 11.04,
                "feels_like": 10.37,
                "temp_min": 11.04,
                "temp_max": 11.04,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.47,
                "deg": 26,
                "gust": 2.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-11 09:00:00"
        },
        {
            "dt": 1662897600,
            "main": {
                "temp": 12.15,
                "feels_like": 11.38,
                "temp_min": 12.15,
                "temp_max": 12.15,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1018,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.52,
                "deg": 29,
                "gust": 2.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-11 12:00:00"
        },
        {
            "dt": 1662908400,
            "main": {
                "temp": 14.09,
                "feels_like": 13.2,
                "temp_min": 14.09,
                "temp_max": 14.09,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1018,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.74,
                "deg": 42,
                "gust": 2.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-11 15:00:00"
        },
        {
            "dt": 1662919200,
            "main": {
                "temp": 15.9,
                "feels_like": 14.96,
                "temp_min": 15.9,
                "temp_max": 15.9,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1015,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 2.94,
                "deg": 81,
                "gust": 2.58
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-11 18:00:00"
        },
        {
            "dt": 1662930000,
            "main": {
                "temp": 15.07,
                "feels_like": 14.2,
                "temp_min": 15.07,
                "temp_max": 15.07,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1014,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 4.14,
                "deg": 97,
                "gust": 4.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-11 21:00:00"
        }
    ],
    "city": {
        "id": 6693229,
        "name": "San Nicolas",
        "coord": {
            "lat": -34.5997,
            "lon": -58.3819
        },
        "country": "AR",
        "population": 0,
        "timezone": -10800,
        "sunrise": 1662458747,
        "sunset": 1662500305
    }
}

interface Weather {
    id: string;
    icon: string;
    description: string;
    day: string;
    temp: string;
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

export const serializerCurrentWeather = (data:any, cities: any) => {
    console.log("data",data)
    console.log("cities",cities)
    const id = `${data.coord.lat.toFixed(2)}#${data.coord.lon.toFixed(2)}`;
    console.log("id", id)
    const labelCity =  cities[id].label;

    let currentWeather = { } as Weather;
    currentWeather["icon"] = data.weather[0].icon;
    currentWeather["description"] = data.weather[0].description;
    currentWeather["temp"] = data.main.temp;
    currentWeather["temp_max"] = data.main.temp_max;
    currentWeather["temp_min"] = data.main.temp_min;
    currentWeather["pressure"] = data.main.pressure;
    currentWeather["humidity"] = data.main.humidity;
    currentWeather["clouds"] = data.clouds.all;
    currentWeather["wind_speed"] = data.wind.speed;
    currentWeather["sea_level"] = data.main.sea_level;
    currentWeather["feels_like"] = data.main.feels_like;
    currentWeather["id"] = id;
    currentWeather["labelCity"] = labelCity;

    return { currentWeather: currentWeather, currentWeatherId: id };
}
export const serializerForeCastWeather = (data:any, cities: any) => {
    console.log("data",data)
    const id = `${data.city.coord.lat.toFixed(2)}#${data.city.coord.lon.toFixed(2)}`;
    const labelCity =  cities[id].label;

    let forecastWeather = [] as any;

    data.list.splice(0, 7).map((day: any,idx: number) => {
        let object = { } as Weather;
        object["icon"] = day.weather[0].icon;
        object["description"] = day.weather[0].description;
        object["day"] = forecastDays[idx];
        object["temp_max"] = day.main.temp_max;
        object["temp_min"] = day.main.temp_min;
        object["pressure"] = day.main.pressure;
        object["humidity"] = day.main.humidity;
        object["clouds"] = day.clouds.all;
        object["wind_speed"] = day.wind.speed;
        object["sea_level"] = day.main.sea_level;
        object["feels_like"] = day.main.feels_like;
        object["id"] = id;
        object["labelCity"] = labelCity;
        forecastWeather.push(object);
    })

    return { forecastWeather: forecastWeather, weatherForecastId: id };
}

export const populate = (cities: any, weather: any) => {
    let newCities = lodash.clone(cities)
    let newWeather = lodash.clone(weather)
    if (!lodash.isEmpty(newCities)) {
        Object.entries(newCities).map(([keyCity, valueCity]) => {
            const labelCity = valueCity.label;
            Object.entries(newWeather).map(([keyWeather, valueWeather]) => {
                if (keyCity === keyWeather) {
                    let itVaueWeather = [...valueWeather]
                    const newValueWeather = itVaueWeather.map((m: Weather) => {
                        const newObject = {} as any; 
                        Object.entries(m).map(([key, value]) => {
                            newObject[`${key}`] = value;
                        })
                        return newObject;
                    })
                    newWeather[keyWeather] = newValueWeather;
                }
            })
        })
    }

    return newWeather;
} 