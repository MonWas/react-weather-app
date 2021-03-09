import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeeklyForecastPreview.css";

export default function WeeklyForecastPreview(props) {
  function day() {
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

  function maximumTemperatureFahrenheit() {
    let maxTemperature = Math.round((props.data.temp.max * 9) / 5 + 32);
    return `${maxTemperature}°`;
  }

  function minimumTemperatureFahrenheit() {
    let minTemperature = Math.round((props.data.temp.min * 9) / 5 + 32);
    return `${minTemperature}°`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeeklyForecastPreview row">
        <div className="col-4"><strong>{day()}</strong></div>
        <div className="col-4"><WeatherIcon code={props.data.weather[0].icon} /></div>
        <div className="col-4"><strong>{maximumTemperature()}</strong>
        {" | "}
        {minimumTemperature()}</div>
      </div>
    );
  } else {
    return (
      <div className="WeeklyForecastPreview row">
        <div className="col-4"><strong>{day()}</strong></div>
        <div className="col-4"><WeatherIcon code={props.data.weather[0].icon} /></div>
        <div className="col-4"><strong>{maximumTemperatureFahrenheit()}</strong>
        {" | "}
        {minimumTemperatureFahrenheit()}</div>
      </div>
    );
  }
}