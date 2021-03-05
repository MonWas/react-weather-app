import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeeklyForecast.css";
import "./WeeklyForecastPreview.css";

export default function WeeklyForecastPreview(props) {
  function hours() {
    let now = new Date(props.data.dt * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    return `${day}`;
  }

  function maximumTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }

  function minimumTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  return (
    <div className="row">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {maximumTemperature()}
      {minimumTemperature()}
    </div>
  );
}