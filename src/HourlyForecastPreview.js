import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./HourlyForecast.css";

export default function HourlyForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="HourlyForecastPreview col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {Math.round(props.data.main.temp)}°
      </div>
    );
  } else {
    return (
      <div className="HourlyForecastPreview col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {Math.round((props.data.main.temp * 9) / 5 + 32)}°
      </div>
    );
  }
  
}