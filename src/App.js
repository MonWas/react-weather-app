import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
    <Weather defaultCity="Zurich" />
    <footer>
      This project was coded by Monique Wassermann and is <a href="https://github.com/MonWas/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
    </footer>
    </div>
  </div>
  );
}