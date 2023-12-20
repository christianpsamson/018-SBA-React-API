import "./App.css";
import CitySearch from "./components/search/CitySearch";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <CitySearch onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
