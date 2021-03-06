import React, { useState } from "react";
import HourlyForecastPreview from "./HourlyForecastPreview";
import axios from "axios";

export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleHourlyForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="HourlyForecast row">
        {forecast.list.slice(0, 4).map(function (forecastItem, index) {
          return ( <HourlyForecastPreview key={index} data={forecastItem} unit={props.unit} />
            );
        })}
      </div>
    );
  } else {
    let apiKey = "efc805510f87eae6dd68397c12d4ef5f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleHourlyForecast);

    return null;
  }
}