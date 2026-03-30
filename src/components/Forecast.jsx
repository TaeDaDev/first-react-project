export default function Forecast(props) {
  const { list } = props.data;
  return list
    .filter((item, index) => index % 8 === 0)
    .map((item, index) => (
      <div key={index}>
        <p>{item.name}</p>
        <p>{Math.round(item.main.temp - 273.15)}°C</p>
        <p>{item.dt_txt}</p>
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
