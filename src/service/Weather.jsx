export function handleSearch(city, setWeather, setForecast, setLoading) {
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
