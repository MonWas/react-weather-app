import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./HourlyForecast.css";

export default function WeeklyForecastPreview(props) {
  function hours() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[Date.getDay()];
    return `${day}`;
  }

  function maximumTemperature() {
    let maxTemperature = Math.round(props.data.main.max_temp);
    return `${maxTemperature}°`;
  }

  function minimumTemperature() {
    let minTemperature = Math.round(props.data.main.min_temp);
    return `${minTemperature}°`;
  }

  return (
    <div>
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {maximumTemperature()}
      {minimumTemperature()}
    </div>
  );
}