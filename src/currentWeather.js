import React from "react";
import FormattedDate from "./FormattedDate";

export default function currentWeather(props) {
  return (
    <div className="heading currentWeather">
              <h1>{props.data.city}</h1>
              <h6><FormattedDate date={props.data.date} /></h6>
              <h6 className="text-capitalize" id="description">{props.data.description}</h6>
              <h1 className="temperature">{Math.round(props.data.temperature)}</h1>
              <div class="units">
                <span className="active">°C</span> | <span>°F</span>
              </div>
              <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Scattered Clouds" />
    </div>
  );
}