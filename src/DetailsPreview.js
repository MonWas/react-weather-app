import React from "react";
import "./Details.css";

export default function DetailsPreview(props) {
  function cloudiness() {
    let cloudiness = props.data.current.clouds;
    return `${cloudiness}%`;
  }

  function dewPoint() {
    let dewPoint = Math.round(props.data.current.dew_point);
    return `${dewPoint}°`;
  }

  function dewPointFahrenheit() {
    let dewPoint = Math.round((props.data.current.dew_point * 9) / 5 + 32);
    return `${dewPoint}°`;
  }

  /*function feelsLike() {
    let feelsLike = Math.round(props.data.main.feels_like);
    return `${feelsLike}°`;
  }

  function feelsLikeFahrenheit() {
    let feelsLike = Math.round((props.data.main.feels_like * 9) / 5 + 32);
    return `${feelsLike}°`;
  }

  function humidity() {
    let humidity = (props.data.main.humidty);
    return `${humidity}%`;
  }

  function pressure() {
    let pressure = (props.data.main.pressure);
    return `${pressure} hPa`
  }

  function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

  function sunrise() {
    let sunrise = formatHours(props.data.sys.sunrise * 1000);
    return `${sunrise}`
  }

  function sunset() {
    let sunset = formatHours(props.data.sys.sunset * 1000);
    return `${sunset}`
  }*/

  function uvIndex() {
    let uvIndex = Math.round(props.data.current.uvi);
    return `${uvIndex}`
  }

  function visibility() {
    let visibility = props.data.current.visibility / 1000;
    return `${visibility} km`
  }
/*
  function wind() {
    let wind = Math.round(props.data.wind.speed * 3.6);
    return `${wind} km/h`
  }*/

  if (props.unit === "celsius") {
    return (
      <div className="DetailsPreview col">
        <div className="col-3">Cloudiness<br /><strong>{cloudiness()}</strong></div>
        <div className="col-3">Dew Point<br /><strong>{dewPoint()}</strong></div>
        <div className="col-3">UV Index<br /><strong>{uvIndex()}</strong></div>
        <div className="col-3">Visibility<br /><strong>{visibility()}</strong></div>
      </div>
    );
  } else {
   return (
      <div className="DetailsPreview col">
        {cloudiness()}{" "}
        {dewPointFahrenheit()}{" "}
        {uvIndex()}{" "}
        {visibility()}
      </div>
    );
  }
}