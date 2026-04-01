import React from "react";

export default function SearchBar(props) {
  const [city, setCity] = React.useState("");

  function handleSubmit() {
    props.handleSearch(city);
    setCity("");
  }

  return (
    <div className="text-center w-full max-w-sm">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Weather App</h1>
      <p className="text-sm sm:text-base text-white/60 mb-4 sm:mb-6">Search for a city to get the current weather</p>
      <div className="flex gap-2">
        <input
          id="search-input"
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          className="flex-1 px-4 py-2.5 rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-2.5 rounded-xl bg-white text-sky-900 font-semibold hover:bg-white/90 transition-colors cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
}
