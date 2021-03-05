import React, { useState} from "react";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import "./Weather.css";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed)
    });
  }

  function search() {
    let apiKey = "efc805510f87eae6dd68397c12d4ef5f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function searchLocation(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiKey = "efc805510f87eae6dd68397c12d4ef5f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="weather-app">
            <CurrentWeather data={weatherData} />
            <br />
            <form onSubmit={handleSubmit}>
              <div className="row align-items-center">
                <div className="col-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                      />
                      <path
                        d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Change location"
                    aria-label="Change location"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-primary"
                    onClick={getCurrentLocation}
                    type="submit"
                    value="Search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <br />
            <HourlyForecast city={weatherData.city} />
            <br />
            <WeeklyForecast city={weatherData.city} lon={weatherData.lon} lat={weatherData.lat} />
            <br />
            <div className="card details">
              <h5 className="card-header">Details</h5>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-6">
                    CLOUDINESS<br />
                    <p>
                      <strong>40<span></span>%</strong>
                    </p>
                  </div>
                  <div className="col-6">
                    DEW POINT<br />
                    <p>
                      <strong>0<span></span>°</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card details">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-6">
                    FEELS LIKE<br />
                    <p>
                      <strong>7<span></span>°</strong>
                    </p>
                  </div>
                  <div className="col-6">
                    HUMIDITY<br />
                    <p>
                      <strong>{weatherData.humidity}<span></span>%</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card details">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-6">
                    PRESSURE<br />
                    <p>
                      <strong>1022<span></span> hPa</strong>
                    </p>
                  </div>
                  <div className="col-6">
                    SUNRISE<br />
                    <p>
                      <strong>07:00<span></span></strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card details">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-6">
                    SUNSET<br />
                    <p>
                      <strong>18:14<span></span></strong>
                    </p>
                  </div>
                  <div className="col-6">
                    UV INDEX<br />
                    <p>
                      <strong>2<span></span></strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card details">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-6">
                    VISIBILITY<br />
                    <p>
                      <strong>10<span></span> km</strong>
                    </p>
                  </div>
                  <div className="col-6">
                    WIND<br />
                    <p>
                      <strong>{Math.round(weatherData.wind)}<span></span> km/h</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
