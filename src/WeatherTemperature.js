import React from "react";

export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1 className="temperature">{Math.round(props.celsius)}</h1>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h1 className="temperature">{Math.round(fahrenheit)}</h1>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          {" "}| °F
        </span>
      </div>
    );
  }
}