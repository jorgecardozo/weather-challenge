import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentCitiesData, selectCurrentWeatherData } from '../../store/selectors';
import ReactLoading from "react-loading";
// import Card from '../Days/Card';
import Days from '../Days/Days';
import MyCard from '../Days/MyCard';
import Forecast from '../Forecast/Forecast';
import CurrentWeather from "../CurrentWeather/CurrentWeather"
import * as lodash from 'lodash';
import { populateWeather } from '../../store/slices/currentWeatherSlice';

type Props = {}

const MyTabs = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Lunes',
            day_info: 'day_info',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Martes',
            day_info: 'day_info',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Miercoles',
            day_info: 'day_info',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Jueves',
            day_info: 'day_info',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Viernes',
            day_info: 'day_info',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Sabado',
            day_info: 'day_info',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Domingo',
            day_info: 'day_info',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
    ]

    let list = [
        {
          "dt": 1662422400,
          "main": {
            "temp": 291.34,
            "feels_like": 291.59,
            "temp_min": 291.34,
            "temp_max": 293.55,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 1011,
            "humidity": 91,
            "temp_kf": -2.21
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
            "all": 0
          },
          "wind": {
            "speed": 3.31,
            "deg": 205,
            "gust": 8.13
          },
          "visibility": 10000,
          "pop": 0.4,
          "rain": {
            "3h": 0.1
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-06 00:00:00"
        },
        {
          "dt": 1662433200,
          "main": {
            "temp": 291.71,
            "feels_like": 291.81,
            "temp_min": 291.71,
            "temp_max": 292.44,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 1011,
            "humidity": 84,
            "temp_kf": -0.73
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
            "speed": 1.86,
            "deg": 211,
            "gust": 5.25
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-06 03:00:00"
        },
        {
          "dt": 1662444000,
          "main": {
            "temp": 291.71,
            "feels_like": 291.58,
            "temp_min": 291.71,
            "temp_max": 291.9,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 1011,
            "humidity": 75,
            "temp_kf": -0.19
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
            "all": 19
          },
          "wind": {
            "speed": 1.81,
            "deg": 200,
            "gust": 4.18
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-06 06:00:00"
        },
        {
          "dt": 1662454800,
          "main": {
            "temp": 297.25,
            "feels_like": 296.71,
            "temp_min": 297.25,
            "temp_max": 297.25,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 1012,
            "humidity": 38,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 81
          },
          "wind": {
            "speed": 2.31,
            "deg": 227,
            "gust": 3.62
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-06 09:00:00"
        },
        {
          "dt": 1662465600,
          "main": {
            "temp": 300.5,
            "feels_like": 299.75,
            "temp_min": 300.5,
            "temp_max": 300.5,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 1010,
            "humidity": 29,
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
            "all": 89
          },
          "wind": {
            "speed": 2,
            "deg": 238,
            "gust": 3.42
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-06 12:00:00"
        },
        {
          "dt": 1662476400,
          "main": {
            "temp": 302.07,
            "feels_like": 300.8,
            "temp_min": 302.07,
            "temp_max": 302.07,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 1008,
            "humidity": 27,
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
            "all": 99
          },
          "wind": {
            "speed": 2.47,
            "deg": 216,
            "gust": 4.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-06 15:00:00"
        },
        {
          "dt": 1662487200,
          "main": {
            "temp": 296.57,
            "feels_like": 296.27,
            "temp_min": 296.57,
            "temp_max": 296.57,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 1008,
            "humidity": 50,
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
            "all": 99
          },
          "wind": {
            "speed": 4.54,
            "deg": 317,
            "gust": 7.47
          },
          "visibility": 10000,
          "pop": 0.04,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-06 18:00:00"
        },
        {
          "dt": 1662498000,
          "main": {
            "temp": 293.88,
            "feels_like": 293.55,
            "temp_min": 293.88,
            "temp_max": 293.88,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 1010,
            "humidity": 59,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 95
          },
          "wind": {
            "speed": 0.85,
            "deg": 359,
            "gust": 1.42
          },
          "visibility": 10000,
          "pop": 0.04,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-06 21:00:00"
        },
        {
          "dt": 1662508800,
          "main": {
            "temp": 293.56,
            "feels_like": 293.3,
            "temp_min": 293.56,
            "temp_max": 293.56,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 1010,
            "humidity": 63,
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
            "all": 96
          },
          "wind": {
            "speed": 1.4,
            "deg": 165,
            "gust": 2.24
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
            "3h": 0.35
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-07 00:00:00"
        },
        {
          "dt": 1662519600,
          "main": {
            "temp": 291.85,
            "feels_like": 291.58,
            "temp_min": 291.85,
            "temp_max": 291.85,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 1010,
            "humidity": 69,
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
            "all": 59
          },
          "wind": {
            "speed": 2.57,
            "deg": 193,
            "gust": 6.09
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
            "temp": 291.19,
            "feels_like": 290.9,
            "temp_min": 291.19,
            "temp_max": 291.19,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 1010,
            "humidity": 71,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 71
          },
          "wind": {
            "speed": 3.18,
            "deg": 209,
            "gust": 9.11
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-07 06:00:00"
        },
        {
          "dt": 1662541200,
          "main": {
            "temp": 293.79,
            "feels_like": 293.45,
            "temp_min": 293.79,
            "temp_max": 293.79,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 1010,
            "humidity": 59,
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
            "all": 100
          },
          "wind": {
            "speed": 3.81,
            "deg": 203,
            "gust": 7.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-07 09:00:00"
        },
        {
          "dt": 1662552000,
          "main": {
            "temp": 296.55,
            "feels_like": 296.09,
            "temp_min": 296.55,
            "temp_max": 296.55,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 1008,
            "humidity": 44,
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
            "all": 100
          },
          "wind": {
            "speed": 4.31,
            "deg": 223,
            "gust": 7.21
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
            "temp": 298.87,
            "feels_like": 298.41,
            "temp_min": 298.87,
            "temp_max": 298.87,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 1007,
            "humidity": 35,
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
            "all": 100
          },
          "wind": {
            "speed": 4.65,
            "deg": 230,
            "gust": 7.48
          },
          "visibility": 10000,
          "pop": 0.01,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-07 15:00:00"
        },
        {
          "dt": 1662573600,
          "main": {
            "temp": 293.52,
            "feels_like": 293.07,
            "temp_min": 293.52,
            "temp_max": 293.52,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 1007,
            "humidity": 56,
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
            "all": 100
          },
          "wind": {
            "speed": 3.58,
            "deg": 243,
            "gust": 8
          },
          "visibility": 10000,
          "pop": 0.25,
          "rain": {
            "3h": 0.37
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-07 18:00:00"
        },
        {
          "dt": 1662584400,
          "main": {
            "temp": 291.06,
            "feels_like": 290.79,
            "temp_min": 291.06,
            "temp_max": 291.06,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1007,
            "humidity": 72,
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
            "speed": 3.06,
            "deg": 214,
            "gust": 5.79
          },
          "visibility": 10000,
          "pop": 0.62,
          "rain": {
            "3h": 0.47
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-07 21:00:00"
        },
        {
          "dt": 1662595200,
          "main": {
            "temp": 290.27,
            "feels_like": 289.97,
            "temp_min": 290.27,
            "temp_max": 290.27,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1007,
            "humidity": 74,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 95
          },
          "wind": {
            "speed": 3.53,
            "deg": 215,
            "gust": 7.35
          },
          "visibility": 10000,
          "pop": 0.46,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-08 00:00:00"
        },
        {
          "dt": 1662606000,
          "main": {
            "temp": 289.51,
            "feels_like": 289.37,
            "temp_min": 289.51,
            "temp_max": 289.51,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 1006,
            "humidity": 83,
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
            "all": 99
          },
          "wind": {
            "speed": 3.83,
            "deg": 209,
            "gust": 8
          },
          "visibility": 10000,
          "pop": 0.33,
          "rain": {
            "3h": 0.29
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-08 03:00:00"
        },
        {
          "dt": 1662616800,
          "main": {
            "temp": 288.44,
            "feels_like": 288.27,
            "temp_min": 288.44,
            "temp_max": 288.44,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1007,
            "humidity": 86,
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
            "all": 98
          },
          "wind": {
            "speed": 4.11,
            "deg": 218,
            "gust": 8.56
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-08 06:00:00"
        },
        {
          "dt": 1662627600,
          "main": {
            "temp": 292.61,
            "feels_like": 292.18,
            "temp_min": 292.61,
            "temp_max": 292.61,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1007,
            "humidity": 60,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 71
          },
          "wind": {
            "speed": 5.34,
            "deg": 218,
            "gust": 8.25
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-08 09:00:00"
        },
        {
          "dt": 1662638400,
          "main": {
            "temp": 293.91,
            "feels_like": 293.48,
            "temp_min": 293.91,
            "temp_max": 293.91,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1007,
            "humidity": 55,
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
            "all": 76
          },
          "wind": {
            "speed": 5.18,
            "deg": 227,
            "gust": 9.01
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
            "3h": 0.48
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-08 12:00:00"
        },
        {
          "dt": 1662649200,
          "main": {
            "temp": 294.43,
            "feels_like": 293.95,
            "temp_min": 294.43,
            "temp_max": 294.43,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 1007,
            "humidity": 51,
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
            "all": 100
          },
          "wind": {
            "speed": 4.93,
            "deg": 225,
            "gust": 8.85
          },
          "visibility": 10000,
          "pop": 0.22,
          "rain": {
            "3h": 0.11
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-08 15:00:00"
        },
        {
          "dt": 1662660000,
          "main": {
            "temp": 293.55,
            "feels_like": 293.13,
            "temp_min": 293.55,
            "temp_max": 293.55,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 1007,
            "humidity": 57,
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
            "all": 76
          },
          "wind": {
            "speed": 4.44,
            "deg": 228,
            "gust": 8.93
          },
          "visibility": 10000,
          "pop": 0.47,
          "rain": {
            "3h": 0.29
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-08 18:00:00"
        },
        {
          "dt": 1662670800,
          "main": {
            "temp": 291.63,
            "feels_like": 291.23,
            "temp_min": 291.63,
            "temp_max": 291.63,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1008,
            "humidity": 65,
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
            "all": 57
          },
          "wind": {
            "speed": 3.91,
            "deg": 234,
            "gust": 9.61
          },
          "visibility": 10000,
          "pop": 0.49,
          "rain": {
            "3h": 0.12
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-08 21:00:00"
        },
        {
          "dt": 1662681600,
          "main": {
            "temp": 289.98,
            "feels_like": 289.7,
            "temp_min": 289.98,
            "temp_max": 289.98,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1008,
            "humidity": 76,
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
            "all": 77
          },
          "wind": {
            "speed": 3.66,
            "deg": 233,
            "gust": 9.03
          },
          "visibility": 10000,
          "pop": 0.52,
          "rain": {
            "3h": 0.47
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-09 00:00:00"
        },
        {
          "dt": 1662692400,
          "main": {
            "temp": 288.3,
            "feels_like": 288.09,
            "temp_min": 288.3,
            "temp_max": 288.3,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 1008,
            "humidity": 85,
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
            "all": 47
          },
          "wind": {
            "speed": 3.5,
            "deg": 223,
            "gust": 8.9
          },
          "visibility": 10000,
          "pop": 0.31,
          "rain": {
            "3h": 0.14
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-09 03:00:00"
        },
        {
          "dt": 1662703200,
          "main": {
            "temp": 287.97,
            "feels_like": 287.78,
            "temp_min": 287.97,
            "temp_max": 287.97,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 1008,
            "humidity": 87,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 58
          },
          "wind": {
            "speed": 4.23,
            "deg": 221,
            "gust": 9.7
          },
          "visibility": 10000,
          "pop": 0.03,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-09 06:00:00"
        },
        {
          "dt": 1662714000,
          "main": {
            "temp": 291.76,
            "feels_like": 291.32,
            "temp_min": 291.76,
            "temp_max": 291.76,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 1008,
            "humidity": 63,
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
            "all": 90
          },
          "wind": {
            "speed": 5.31,
            "deg": 232,
            "gust": 8.07
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-09 09:00:00"
        },
        {
          "dt": 1662724800,
          "main": {
            "temp": 293.32,
            "feels_like": 292.85,
            "temp_min": 293.32,
            "temp_max": 293.32,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 1008,
            "humidity": 56,
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
            "all": 87
          },
          "wind": {
            "speed": 5.13,
            "deg": 240,
            "gust": 9.01
          },
          "visibility": 10000,
          "pop": 0.65,
          "rain": {
            "3h": 0.88
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-09 12:00:00"
        },
        {
          "dt": 1662735600,
          "main": {
            "temp": 292.56,
            "feels_like": 292.15,
            "temp_min": 292.56,
            "temp_max": 292.56,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 1008,
            "humidity": 61,
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
            "all": 100
          },
          "wind": {
            "speed": 5.06,
            "deg": 243,
            "gust": 9.79
          },
          "visibility": 10000,
          "pop": 0.92,
          "rain": {
            "3h": 1.21
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-09 15:00:00"
        },
        {
          "dt": 1662746400,
          "main": {
            "temp": 291.35,
            "feels_like": 291.03,
            "temp_min": 291.35,
            "temp_max": 291.35,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 1009,
            "humidity": 69,
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
            "all": 90
          },
          "wind": {
            "speed": 4.38,
            "deg": 263,
            "gust": 9.38
          },
          "visibility": 10000,
          "pop": 0.88,
          "rain": {
            "3h": 0.87
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-09 18:00:00"
        },
        {
          "dt": 1662757200,
          "main": {
            "temp": 290.05,
            "feels_like": 289.78,
            "temp_min": 290.05,
            "temp_max": 290.05,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 1010,
            "humidity": 76,
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
            "all": 51
          },
          "wind": {
            "speed": 4.48,
            "deg": 257,
            "gust": 10.21
          },
          "visibility": 10000,
          "pop": 0.39,
          "rain": {
            "3h": 0.22
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-09 21:00:00"
        },
        {
          "dt": 1662768000,
          "main": {
            "temp": 288.94,
            "feels_like": 288.77,
            "temp_min": 288.94,
            "temp_max": 288.94,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 1011,
            "humidity": 84,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 44
          },
          "wind": {
            "speed": 3.75,
            "deg": 261,
            "gust": 9.8
          },
          "visibility": 10000,
          "pop": 0.15,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-10 00:00:00"
        },
        {
          "dt": 1662778800,
          "main": {
            "temp": 287.95,
            "feels_like": 287.78,
            "temp_min": 287.95,
            "temp_max": 287.95,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 1011,
            "humidity": 88,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 39
          },
          "wind": {
            "speed": 3.08,
            "deg": 253,
            "gust": 8.04
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
            "temp": 287.6,
            "feels_like": 287.4,
            "temp_min": 287.6,
            "temp_max": 287.6,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1012,
            "humidity": 88,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "clouds": {
            "all": 46
          },
          "wind": {
            "speed": 3.5,
            "deg": 251,
            "gust": 7.29
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-10 06:00:00"
        },
        {
          "dt": 1662800400,
          "main": {
            "temp": 291.27,
            "feels_like": 290.94,
            "temp_min": 291.27,
            "temp_max": 291.27,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 1013,
            "humidity": 69,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 70
          },
          "wind": {
            "speed": 3.85,
            "deg": 257,
            "gust": 5.45
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-10 09:00:00"
        },
        {
          "dt": 1662811200,
          "main": {
            "temp": 292.82,
            "feels_like": 292.41,
            "temp_min": 292.82,
            "temp_max": 292.82,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 1013,
            "humidity": 60,
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
            "all": 83
          },
          "wind": {
            "speed": 3.08,
            "deg": 252,
            "gust": 4.98
          },
          "visibility": 10000,
          "pop": 0.22,
          "rain": {
            "3h": 0.12
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-10 12:00:00"
        },
        {
          "dt": 1662822000,
          "main": {
            "temp": 294.89,
            "feels_like": 294.5,
            "temp_min": 294.89,
            "temp_max": 294.89,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1012,
            "humidity": 53,
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
            "all": 74
          },
          "wind": {
            "speed": 3.48,
            "deg": 301,
            "gust": 4.95
          },
          "visibility": 10000,
          "pop": 0.24,
          "rain": {
            "3h": 0.15
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-10 15:00:00"
        },
        {
          "dt": 1662832800,
          "main": {
            "temp": 293.82,
            "feels_like": 293.38,
            "temp_min": 293.82,
            "temp_max": 293.82,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1012,
            "humidity": 55,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 69
          },
          "wind": {
            "speed": 2.08,
            "deg": 301,
            "gust": 4.37
          },
          "visibility": 10000,
          "pop": 0.11,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-09-10 18:00:00"
        },
        {
          "dt": 1662843600,
          "main": {
            "temp": 292.62,
            "feels_like": 292.22,
            "temp_min": 292.62,
            "temp_max": 292.62,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 1013,
            "humidity": 61,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 92
          },
          "wind": {
            "speed": 1.35,
            "deg": 333,
            "gust": 3.01
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-09-10 21:00:00"
        }
      ];
    
    const data = [
        {
            data: list
        },
        {
            data: list
        }
    ]

    const { cities } = useCustomSelector(selectCurrentCitiesData)
    const { weather, isLoading } = useCustomSelector(selectCurrentWeatherData)

    // console.log("ver wather", weather)
    // console.log("ver wcities", cities)
    // console.log("lodash",lodash.isEmpty(weather))
    const dispatch = useCustomDispatch();

  useEffect(() => {
    // console.log("effect cties TAB", cities)
  }, [cities])

  useEffect(() => {
    // console.log("effect weather TAB", weather)
    // console.log("effect weather TAB", cities)
    populateLabelCityToWeather(cities, weather)
  }, [])
  
  const populateLabelCityToWeather = (cities: any, weather: any) => {
    dispatch(populateWeather({cities: cities, weather: weather}))
  }
    // Object.entries(weather).map(([key, value]) => {
    //   console.log("value",value)
    //   console.log("key",key)
    //   console.log("name tab",cities[key].label)
    // });


    // const selectedTab = Object.values(weather).length > 0 ? Object.values(weather.weatherList)[0][0]?.labelCity : null
    // console.log("selected", selectedTab)
    // const [key, setKey] = useState<any>(`Tabs ${selectedTab}`);

  return (
    <>
      { 
        isLoading ? <div className='d-flex justify-content-center align-items-center vh-100'><ReactLoading type={'spin'} color="#0d6efd" /></div>  :
     
        !lodash.isEmpty(weather) ?
          (
            <>
              <Tabs
              // activeKey={`Tabs ${selectedTab}`}
              // onSelect={(k) => setKey(`Tabs ${selectedTab}`)}
              id="justify-tab-example"
              className="mb-3"
              justify
              >
                {
                  Object.entries(weather).map(([key, value]) => {
                    return (
                 
                      
                      
                      <Tab eventKey={`Tabs ${value.currentWeather.labelCity}`} title={`${value.currentWeather.labelCity}`}>
                          <div className='container'>
                            <CurrentWeather data={value.currentWeather}></CurrentWeather>
                            <Forecast data={value.weatherList}/>
                          </div>
                      </Tab>
                      
                    

                    )
                  })
                }

              </Tabs>

              {/* <Tabs
              // activeKey={`Tabs ${selectedTab}`}
              // onSelect={(k) => setKey(`Tabs ${selectedTab}`)}
              id="justify-tab-example"
              className="mb-3"
              justify
              >
              {
                Object.entries(weather).map(([key, value]) => {
                  console.warn("value",value)
                  console.warn("value weatherList",value.weatherList)
                  console.warn("key",key)
                  // console.log("name tab",cities[key].label)
                  // if (cities[key]?.label) {
                    return (
                      
                      <Tab eventKey={`Tabs ${value.weatherList[0].labelCity || key}`} title={`${value.weatherList[0].labelCity}`}>
                          <div className='container'>
                              <Forecast data={value.weatherList}/>
                          </div>
                      </Tab>
                    )
                  // }
                })
              } 
              
              </Tabs> */}
            </>
          )
          : <div className='d-flex justify-content-center align-items-center vh-100'> No weathers to render </div>

        
      }
    </>

  )
}

export default MyTabs