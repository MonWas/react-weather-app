import React, { useState } from "react";
import DetailsPreview from "./DetailsPreview";
import axios from "axios";

export default function Details(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleDetails(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.lat === forecast.lat && props.lon === forecast.lon) {
    return (
      <div className="Details row">
        <DetailsPreview data={forecast} unit={props.unit} />
      </div>
    );
  } else {
    let apiKey = "efc805510f87eae6dd68397c12d4ef5f";
    let exclude = "exclude=hourly,minutely";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&${exclude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleDetails);

    return null;
  }
}