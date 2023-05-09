"use client";
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [locationBuffer, setLocationBuffer] = useState("");
  const [open, setOpen] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    setLocation(locationBuffer);
    setOpen(true);
  }

  return (
    <div>
      SearchBar
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          className="border-2"
          value={locationBuffer}
          onChange={(e) => {
            setLocationBuffer(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      {open && <WeatherDisplay location={location} />}
    </div>
  );
};

export default SearchBar;
