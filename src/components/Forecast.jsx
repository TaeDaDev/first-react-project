export default function Forecast(props) {
  const { list } = props.data;
  if (!list) {
    return <p className="text-white/60">No forecast data available. Please enter a valid city name.</p>;
  }
  const days = list.filter((_, index) => index % 8 === 0);
  return (
    <div className="w-full max-w-sm sm:max-w-2xl">
      <h3 className="text-white font-semibold text-lg mb-3">5-Day Forecast</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
        {days.map((item, index) => (
          <div
            key={index}
            className="min-w-[130px] bg-white/15 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20 text-center flex-shrink-0"
          >
            <p className="text-xs text-white/60 mb-1">
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="w-12 h-12 mx-auto"
            />
            <p className="text-xl font-light">
              {props.toggle
                ? `${Math.round((item.main.temp * 9) / 5 - 459.67)}°F`
                : `${Math.round(item.main.temp - 273.15)}°C`}
            </p>
            <p className="text-xs text-white/60 capitalize mt-1">{item.weather[0].description}</p>
            <div className="mt-2 text-xs text-white/50 space-y-1">
              <p>💧 {item.main.humidity}%</p>
              <p>💨 {item.wind.speed} m/s</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
