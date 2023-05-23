"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Units } from "@/types";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [location, setLocation] = useState("");
  const [units, setUnits] = useState<Units>(
    (params.get("units") as Units) || "imperial"
  );

  useEffect(() => {
    // prefetch random location to prerender location route
    if (
      !sessionStorage.getItem("prefetch") ||
      sessionStorage.getItem("prefetch") != "true"
    ) {
      console.log("prefetch dne...creating prefetch");
      router.prefetch(`/greenwich?units=imperial`);
      sessionStorage.setItem("prefetch", "true");
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (location.trim()) {
      router.push(`${location.trim()}?units=${units}`);
    } else {
      // do something
      console.log("no valid string");
    }
  }

  function cycle() {
    switch (units) {
      case "imperial":
        setUnits("metric");
        break;
      case "metric":
        setUnits("standard");
        break;
      case "standard":
        setUnits("imperial");
        break;
      default:
        setUnits("imperial");
        break;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-3/5 flex justify-center items-center"
    >
      <div className="flex w-1/2 border-2 border-black h-2/3 rounded-lg">
        <button
          className="w-[5%] flex items-center justify-center rounded-full hover:bg-black/10 m-1"
          type="submit"
        >
          <SearchRoundedIcon />
        </button>
        <input
          required
          type="text"
          pattern="^[A-Za-z\s]+|\d+$"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          className="w-[90%] focus:outline-none bg-transparent"
          placeholder="Enter a City Location..."
        />
        <div
          className="flex justify-center items-center w-[5%] rounded-full m-1 hover:bg-black/10 hover:cursor-pointer font-medium text-lg select-none"
          onClick={cycle}
        >
          {units == "metric" ? (
            <span>&deg;C</span>
          ) : units == "standard" ? (
            <span>K</span>
          ) : (
            <span>&deg;F</span>
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
