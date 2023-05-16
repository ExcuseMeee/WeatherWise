"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Units } from "@/types";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const SearchBar = () => {
  useEffect(() => {
    // prefetch random location to prerender location route
    router.prefetch(`/FAKELOCATION?units=imperial`);
  }, []);

  const router = useRouter();

  const [location, setLocation] = useState("");
  const [units, setUnits] = useState<Units>("imperial");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (location.trim()) {
      router.push(`${location.trim()}?units=${units}`);
    } else {
      // do something
      console.log("no valid string");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-dotted border-red-600 w-full h-1/2 flex justify-center items-center"
    >
      <div className="flex w-1/2 border-2 border-black h-1/2 rounded-lg">
        <button
          className="w-[5%] flex items-center justify-center rounded-full hover:bg-black/10 m-1"
          type="submit"
        >
          <SearchRoundedIcon />
        </button>
        <input
          required
          type="text"
          pattern="^[A-Za-z\s]+$"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          className="w-[90%] focus:outline-none bg-transparent"
          placeholder="Enter a Location..."
        />
        <div className="flex justify-center items-center w-[5%] rounded-full m-1 hover:bg-black/10 hover:cursor-pointer">
          <SettingsRoundedIcon />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
