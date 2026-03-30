export default function WeatherCard(props) {
  const { main, wind, weather } = props.data;
  return (
    <div>
      <h2>{props.data.name}</h2>
      {props.toggle ? <p>{Math.round(main.temp * 9/5 - 459.67)}°F</p> : <p>{Math.round(main.temp - 273.15)}°C</p>}
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>
        Weather Description: {weather[0].description}{" "}
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
      </p>
    </div>
  );
}


