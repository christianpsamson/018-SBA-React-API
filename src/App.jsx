import "./App.css";
import React, { useState } from "react";
import CitySearch from "./components/search/CitySearch";
import CityWeather from "./components/city-weather/CityWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Api";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const fetchCurrentWeather = fetch(
      `${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const fetchForecast = fetch(
      `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([fetchCurrentWeather, fetchForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <CitySearch onSearchChange={handleOnSearchChange} />
      {currentWeather && <CityWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
