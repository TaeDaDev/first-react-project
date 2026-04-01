export default function WeatherCard(props) {
  const { main, wind, weather, name } = props.data;
  const temp = props.toggle
    ? `${Math.round((main.temp * 9) / 5 - 459.67)}°F`
    : `${Math.round(main.temp - 273.15)}°C`;
  const low = props.toggle
    ? `${Math.round((main.temp_min * 9) / 5 - 459.67)}°F`
    : `${Math.round(main.temp_min - 273.15)}°C`;
  const high = props.toggle
    ? `${Math.round((main.temp_max * 9) / 5 - 459.67)}°F`
    : `${Math.round(main.temp_max - 273.15)}°C`;

  return (
    <div className="w-full max-w-sm bg-white/15 backdrop-blur-md rounded-3xl p-4 sm:p-6 text-white border border-white/20 shadow-xl text-center">
      <h2 className="text-2xl font-semibold mb-1">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="w-20 h-20 mx-auto"
      />
      <p className="text-6xl sm:text-7xl font-thin my-2">{temp}</p>
      <p className="capitalize text-white/70 text-sm mb-4">{weather[0].description}</p>
      <div className="grid grid-cols-2 gap-3 text-sm bg-white/10 rounded-2xl p-4">
        <div>
          <p className="text-white/50 uppercase text-xs tracking-wide">Low</p>
          <p className="font-medium">{low}</p>
        </div>
        <div>
          <p className="text-white/50 uppercase text-xs tracking-wide">High</p>
          <p className="font-medium">{high}</p>
        </div>
        <div>
          <p className="text-white/50 uppercase text-xs tracking-wide">Humidity</p>
          <p className="font-medium">{main.humidity}%</p>
        </div>
        <div>
          <p className="text-white/50 uppercase text-xs tracking-wide">Wind</p>
          <p className="font-medium">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
