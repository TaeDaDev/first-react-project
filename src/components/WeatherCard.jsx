export default function WeatherCard(props) {
    const { main } = props.data
  return (
    <div>
      <h2>{props.data.name}</h2>
      <p>{Math.round(main.temp * 9/5 - 459.67)}°F / {Math.round(main.temp - 273.15)}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
}
