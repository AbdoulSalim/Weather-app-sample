import React, { useState } from "react";
import "../styles/Weather.css";

const WeatherContainer = () => {
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

  const getWeatherData = () => {};

  return (
    <section className="weather-container">
      <header className="weather-header">
        <h3>Weather</h3>
        <div>
          <input
            type="text"
            placeholder="Zip code"
            className="search-input"
            maxLength="5"
            onChange={updateSearchQuery}
          />
          <button className="material-icons" onClick={getWeatherData}>
            search
          </button>
        </div>
      </header>
      <p className="error">{isValidZipCode ? "" : "Invalid zip code"}</p>
      <section className="weather-info">
        {weatherData.temp === null ? (
          <p>
            No weather to display <i className="material-icons">wb_sunny</i>
          </p>
        ) : (
          ""
        )}
      </section>
    </section>
  );
};

export default WeatherContainer;
