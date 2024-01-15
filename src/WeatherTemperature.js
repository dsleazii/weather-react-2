import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  if (unit === 'fahrenheit') {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>°F | {""}°C</a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsiusToFahrenheit(props.celsius))}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>°F | {""}°C</a>
        </span>
      </div>
    );
  }
}