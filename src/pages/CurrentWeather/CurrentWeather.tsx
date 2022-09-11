import React from "react";
import "./CurrentWeather.scss";

type Props = {
  data: {}
}

const CurrentWeather = ({data}: Props) => {
   return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.labelCity}</p>
          <p className="weather-description">{data.description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind_speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather
