import React from "react";
import SearchBar from "./components/SearchBar";
//import ToggleTemp from "./components/ToggleTemp";
//import Forecast from "./components/Forecast";
//import Loader from "./components/Loader";
//import WeatherCard from "./components/WeatherCard";


function App() {
  function handleSearch(city) {
    console.log(city);
  }
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
    </>
  )
}

export default App;
