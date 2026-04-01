import React from "react";
import SearchBar from "./components/SearchBar";
import ToggleTemp from "./components/ToggleTemp";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import {handleSearch} from "./service/Weather";

function App() {
  const [weather, setWeather] = React.useState(null);
  const [toggle, setToggle] = React.useState(true);
  const [forecast, setForecast] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const city = localStorage.getItem("city");
    if (city) {
      handleSearch(city, setWeather, setForecast, setLoading);
    }
  }, []);
  return (
    <div className={`min-h-screen px-4 py-6 sm:py-10 flex flex-col items-center gap-4 sm:gap-6 overflow-x-hidden transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950' : 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600'}`}>
      <SearchBar handleSearch={(city) => handleSearch(city, setWeather, setForecast, setLoading)} />
      {weather && <WeatherCard data={weather} toggle={toggle} />}
      {weather && <ToggleTemp toggle={toggle} setToggle={setToggle} darkMode={darkMode} setDarkMode={setDarkMode} />}
      {forecast && <Forecast data={forecast} toggle={toggle} />}
      {loading && <Loader />}
    </div>
  );
}

export default App;
