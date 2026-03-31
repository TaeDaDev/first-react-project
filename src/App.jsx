import React from "react";
import SearchBar from "./components/SearchBar";
import ToggleTemp from "./components/ToggleTemp";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { handleSearch } from "./service/Weather";

function App() {
  const [weather, setWeather] = React.useState(null);
  const [toggle, setToggle] = React.useState(true);
  const [forecast, setForecast] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const city = localStorage.getItem("city");
    if (city) {
      handleSearch(city, setWeather, setForecast, setLoading);
    }
  }, []);
  return (
    <>
      <SearchBar
        handleSearch={(city) =>
          handleSearch(city, setWeather, setForecast, setLoading)
        }
      />
      {weather && <WeatherCard data={weather} toggle={toggle} />}
      {weather && <ToggleTemp toggle={toggle} setToggle={setToggle} />}
      {forecast && <Forecast data={forecast} toggle={toggle} />}
      {loading && <Loader />}
    </>
  );
}

export default App;
