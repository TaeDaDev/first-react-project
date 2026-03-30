export default function Forecast(props) {
  const { list } = props.data;
  if (!list) {
    return <p>No forecast data available.</p>;
  }
  return list
    .filter((item, index) => index % 8 === 0)
    .map((item, index) => (
      <div key={index}>
        {props.toggle ? (
          <p>{Math.round((item.main.temp * 9) / 5 - 459.67)}°F</p>
        ) : (
          <p>{Math.round(item.main.temp - 273.15)}°C</p>
        )}
        <p>{item.name}</p>
        <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
        <p>Humidity: {item.main.humidity}%</p>
        <p>Wind Speed: {item.wind.speed} m/s</p>
        <p>
          Weather Description: {item.weather[0].description}{" "}
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={item.weather[0].description}
          />
        </p>
      </div>
    ));
}
