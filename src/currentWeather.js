import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.data.city}</h1>
      <h6><FormattedDate date={props.data.date} /></h6>
      <h6 className="text-capitalize" id="description">{props.data.description}</h6>
      <WeatherTemperature celsius={props.data.temperature}/>
      <br />
      <WeatherIcon code={props.data.icon} />
    </div>
  );
}