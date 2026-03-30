import React from "react";
import SearchBar from "./components/SearchBar";
//import ToggleTemp from "./components/ToggleTemp";
//import Forecast from "./components/Forecast";
//import Loader from "./components/Loader";
import WeatherCard from "./components/WeatherCard";

function App(props) {
  const [weather, setWeather] = React.useState(null);

  function handleSearch(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3f4077a9f828dce3c21c9514c8fb978`,
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
      console.log(weather)  }
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
    </>
  );
}

export default App;
