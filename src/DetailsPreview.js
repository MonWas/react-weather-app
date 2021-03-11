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

  function feelsLike() {
    let feelsLike = props.weatherData.feelsLike;
    return `${feelsLike}°`;
  }

  function feelsLikeFahrenheit() {
    let feelsLike = Math.round((props.weatherData.feelsLike * 9) / 5 + 32);
    return `${feelsLike}°`;
  }

  function humidity() {
    let humidity = props.weatherData.humidity;
    return `${humidity}%`;
  }

  function pressure() {
    let pressure = props.weatherData.pressure;
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
    let sunrise = formatHours(props.weatherData.sunrise);
    return `${sunrise}`
  }

  function sunset() {
    let sunset = formatHours(props.weatherData.sunset);
    return `${sunset}`
  }

  function uvIndex() {
    let uvIndex = Math.round(props.data.current.uvi);
    return `${uvIndex}`
  }

  function visibility() {
    let visibility = props.data.current.visibility / 1000;
    return `${visibility} km`
  }

  function visibilityFahrenheit() {
    let visibility = Math.round(props.data.current.visibility /1000 / 1.609);
    return `${visibility} mi`
  }

  function wind() {
    let wind = props.weatherData.wind;
    return `${wind} km/h`
  }

  function windFahrenheit() {
    let wind = Math.round(props.weatherData.wind / 1.609);
    return `${wind} mph`
  }

  if (props.unit === "celsius") {
    return (
      <div className="DetailsPreview col">
        <div className="row align-items-center">
          <div className="col-6">
            Cloudiness<br />
            <p>
              <strong>{cloudiness()}<span></span></strong>
            </p>
          </div>
          <div className="col-6">
            Dew Point<br />
            <p>
              <strong>{dewPoint()}<span></span></strong>
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            Feels Like<br />
            <p>
              <strong>{feelsLike()}<span></span></strong>
            </p>
          </div>
          <div className="col-6">
            Humidity<br />
            <p>
              <strong>{humidity()}<span></span></strong>
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            Pressure<br />
            <p>
              <strong>{pressure()}<span></span></strong>
            </p>
          </div>
          <div className="col-6">
            Sunrise<br />
            <p>
              <strong>{sunrise()}<span></span></strong>
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            Sunset<br />
            <p>
              <strong>{sunset()}<span></span></strong>
            </p>
          </div>
          <div className="col-6">
            UV Index<br />
            <p>
              <strong>{uvIndex()}<span></span></strong>
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            Visibility<br />
            <p>
              <strong>{visibility()}<span></span></strong>
            </p>
          </div>
          <div className="col-6">
            Wind<br />
            <p>
              <strong>{wind()}<span></span></strong>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="DetailsPreview col">
          <div className="row align-items-center">
            <div className="col-6">
              CLOUDINESS<br />
              <p>
                <strong>{cloudiness()}<span></span></strong>
              </p>
            </div>
            <div className="col-6">
              DEW POINT<br />
              <p>
                <strong>{dewPointFahrenheit()}<span></span></strong>
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              FEELS LIKE<br />
              <p>
                <strong>{feelsLikeFahrenheit()}<span></span></strong>
              </p>
            </div>
            <div className="col-6">
              HUMIDITY<br />
              <p>
                <strong>{humidity()}<span></span></strong>
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              PRESSURE<br />
              <p>
                <strong>{pressure()}<span></span></strong>
              </p>
            </div>
            <div className="col-6">
              SUNRISE<br />
              <p>
                <strong>{sunrise()}<span></span></strong>
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              SUNSET<br />
              <p>
                <strong>{sunset()}<span></span></strong>
              </p>
            </div>
            <div className="col-6">
              UV INDEX<br />
              <p>
                <strong>{uvIndex()}<span></span></strong>
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              VISIBILITY<br />
              <p>
                <strong>{visibilityFahrenheit()}<span></span></strong>
              </p>
            </div>
            <div className="col-6">
              WIND<br />
              <p>
                <strong>{windFahrenheit()}<span></span></strong>
              </p>
            </div>
          </div>
        </div>
    );
  }
}