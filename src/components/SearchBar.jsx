import React from "react";

export default function SearchBar(props) {
  const [city, setCity] = React.useState("");

  function handleSubmit() {
    props.handleSearch(city);
    setCity("");
  }

  return (
    <>
      <h1>Enter City Name</h1>
      <div>
        <input
          type="text"
          placeholder="Clayton, NC"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </>
  );
}
