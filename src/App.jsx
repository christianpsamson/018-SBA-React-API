import "./App.css";
import CitySearch from "./components/search/CitySearch";
import CityWeather from "./components/city-weather/CityWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <CitySearch onSearchChange={handleOnSearchChange} />
      <CityWeather />
    </div>
  );
}

export default App;
