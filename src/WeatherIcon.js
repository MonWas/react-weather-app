import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "https://bmcdn.nl/assets/weather-icons/all/clear-day.svg",
    "01n": "https://bmcdn.nl/assets/weather-icons/all/clear-night.svg",
    "02d": "https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day.svg",
    "02n": "https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-night.svg",
    "03d": "https://bmcdn.nl/assets/weather-icons/all/cloudy.svg",
    "03n": "https://bmcdn.nl/assets/weather-icons/all/cloudy.svg",
    "04d": "https://bmcdn.nl/assets/weather-icons/all/overcast.svg",
    "04n": "https://bmcdn.nl/assets/weather-icons/all/overcast.svg",
    "09d": "https://bmcdn.nl/assets/weather-icons/all/rain.svg",
    "09n": "https://bmcdn.nl/assets/weather-icons/all/rain.svg",
    "10d": "https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg",
    "10n": "https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-night-rain.svg",
    "11d": "https://bmcdn.nl/assets/weather-icons/all/thunderstorms-day.svg",
    "11n": "https://bmcdn.nl/assets/weather-icons/all/thunderstorms-night.svg",
    "13d": "https://bmcdn.nl/assets/weather-icons/all/snow.svg",
    "13n": "https://bmcdn.nl/assets/weather-icons/all/snow.svg",
    "50d": "https://bmcdn.nl/assets/weather-icons/all/mist.svg",
    "50n": "https://bmcdn.nl/assets/weather-icons/all/mist.svg"
  };

  return (
    <div className="WeatherIcon">
      <img src={codeMapping[props.code]} alt={props.description} />
    </div>
  );
}