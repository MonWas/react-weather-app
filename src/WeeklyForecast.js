import React, { useState } from "react";
import WeeklyForecastPreview from "./WeeklyForecastPreview";
import axios from "axios";

export default function WeeklyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleWeeklyForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.lat === forecast.lat && props.lon === forecast.lon) {
    return (
      <div className="WeeklyForecast row-align-items-center">
        {forecast.daily.slice(1, 7).map(function (forecastItem, index) {
          return <WeeklyForecastPreview key={index} data={forecastItem} />
        })}
      </div>
    );
  } else {
    let apiKey = "efc805510f87eae6dd68397c12d4ef5f";
    let exclude = "exclude=hourly,minutely";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&${exclude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeeklyForecast);

    return null;
  }
}