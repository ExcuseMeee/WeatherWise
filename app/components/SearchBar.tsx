"use client";
import { useState } from "react";
import { GeoWeatherData } from "../api/[location]/route";

const SearchBar = () => {
  const [location, setLocation] = useState("");

  async function logGeoWeatherData(location: string) {
    console.log(location)
    const response = await fetch(`/api/${location}`);
    if (response.ok) {
      const data: GeoWeatherData[] = await response.json();
      console.log(data);
    } else {
      console.log(response.statusText);
    }
  }

  return (
    <div>
      SearchBar
      <input
        type="text"
        className="border-2"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button
        onClick={() => {
          logGeoWeatherData(location);
        }}
      >
        Fetch
      </button>
    </div>
  );
};

export default SearchBar;
