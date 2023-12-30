import React from "react";
import "./city-weather.css";

const CityWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Manila</p>
          <p className="weather-desc">Sunny</p>
        </div>
      </div>
      <img src="icons/01d.png" alt="weather" className="weather-icon" />
    </div>
  );
};

export default CityWeather;
