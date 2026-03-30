export default function WeatherCard(props) {
  const { main, wind, weather } = props.data;
  if (!main || !wind || !weather) {
    return <p>Please enter a valid city name.</p>;
  }

  return (
    <div>
      <h2>{props.data.name}</h2>
      {props.toggle ? (
        <p>{Math.round((main.temp * 9) / 5 - 459.67)}°F</p>
      ) : (
        <p>{Math.round(main.temp - 273.15)}°C</p>
      )}
      {props.toggle ? (
        <>
          <p>Low: {Math.round((main.temp_min * 9) / 5 - 459.67)}°F</p>
          <p>High: {Math.round((main.temp_max * 9) / 5 - 459.67)}°F</p>
        </>
      ) : (
        <>
          <p>Low: {Math.round(main.temp_min - 273.15)}°C</p>
          <p>High: {Math.round(main.temp_max - 273.15)}°C</p>
        </>
      )}
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
