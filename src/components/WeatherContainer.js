import React, { useState } from "react";
import "../styles/Weather.css";
import WeatherInfo from "./WeatherInfo";

const WeatherContainer = () => {
  const API_KEY = "47e0c6dd87ddfc77d3dd5d3f840592e7";
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState({
    temp: null,
    humidity: null,
    description: null,
    city: null
  });

  const [isValidZipCode, setIsValidZipCode] = useState(true);

  const updateSearchQuery = event => {
    let zipCode = event.target.value;
    let isValid = validateZipCode(zipCode);
    setSearchQuery(zipCode);

    if (isValid || zipCode === "" || isValid.lenght === 5) {
      setIsValidZipCode(true);
    } else {
      setIsValidZipCode(false);
    }
  };

  const validateZipCode = zipCode => {
    let regex = /[0-9]{5}/;
    return regex.test(zipCode);
  };

  const getWeatherData = e => {
    e.preventDefault();
    if (!isValidZipCode || searchQuery === "") {
      setIsValidZipCode(false);
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${searchQuery},us&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(data =>
        setWeatherData({
          temp: convertToFarenheit(data.main.temp),
          humidity: data.main.humidity,
          description: data.weather[0].description.toUpperCase(),
          city: data.name
        })
      );
  };

  const convertToFarenheit = temp => {
    return ((temp - 273.15) * (9.0 / 5.0) + 32).toFixed(0);
  };

  return (
    <section className="weather-container">
      <header className="weather-header">
        <h3>Weather</h3>
        <form onSubmit={getWeatherData}>
          <input
            type="text"
            placeholder="Zip code"
            className="search-input"
            maxLength="5"
            onChange={updateSearchQuery}
          />
          <button className="material-icons">search</button>
        </form>
      </header>
      <p className="error">{isValidZipCode ? "" : "Invalid zip code"}</p>
      <section className="weather-info">
        {weatherData.temp === null ? (
          <p>
            No weather to display <i className="material-icons">wb_sunny</i>
          </p>
        ) : (
          <WeatherInfo data={weatherData} />
        )}
      </section>
    </section>
  );
};

export default WeatherContainer;
