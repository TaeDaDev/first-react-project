import React from "react";

export default function SearchBar(props) {
  const [city, setCity] = React.useState("");

  function handleSubmit() {
    props.handleSearch(city);
    setCity("");
  }

  return (
    <>
    <h1>Welcome to the Weather App!</h1>
      <h2>Enter City Name</h2>
      <div>
        <input
        id="search-input"
          type="text"
          placeholder="Clayton"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </>
  );
}
