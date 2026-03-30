import React from "react";
import SearchBar from "./components/SearchBar";
import ToggleTemp from "./components/ToggleTemp";
import Forecast from "./components/Forecast";
import { Analytics } from "@vercel/analytics/react";
import Loader from "./components/Loader";
import WeatherCard from "./components/WeatherCard";


function App() {
  const [weather, setWeather] = React.useState(null);
  const [toggle, setToggle] = React.useState(true);
  const [forecast, setForecast] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function handleSearch(city) {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3f4077a9f828dce3c21c9514c8fb978`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          localStorage.setItem("city", city);
          setWeather(data);
        } else {
          setWeather(null);
        }
      })

      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f3f4077a9f828dce3c21c9514c8fb978`,
    )
      .then((res) => res.json())
      .then((data) => setForecast(data))
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    const city = localStorage.getItem("city");
    if (city) {
      handleSearch(city);
    }
  }, []);
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {weather && <WeatherCard data={weather} toggle={toggle} />}
      {weather && <ToggleTemp toggle={toggle} setToggle={setToggle} />}
      {forecast && <Forecast data={forecast} toggle={toggle} />}
      {loading && <Loader />}
      <Analytics />
    </>
  );
}

export default App;
