import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.data.city}</h1>
      <h6><FormattedDate date={props.data.date} /></h6>
      <h6 className="text-capitalize" id="description">{props.data.description}</h6>
      <h1 className="temperature">{Math.round(props.data.temperature)}</h1>
      <div class="units">
        <span className="active">°C</span> | <span>°F</span>
      </div>
      <br />
      <WeatherIcon code={props.data.icon} />
    </div>
  );
}