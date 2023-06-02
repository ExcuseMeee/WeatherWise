"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeIcon from "@mui/icons-material/Home";

const SearchBar = () => {
  const router = useRouter();

  const [location, setLocation] = useState("");

  useEffect(() => {
    // prefetch random location to prerender location route
    if (
      !sessionStorage.getItem("prefetch") ||
      sessionStorage.getItem("prefetch") != "true"
    ) {
      router.prefetch(`/greenwich`);
      sessionStorage.setItem("prefetch", "true");
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (location.trim()) {
      router.push(`${location.trim()}`);
    } else {
      // do something
      console.log("no valid string");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-3/5 flex justify-center items-center"
    >
      <div className="flex w-1/2 border-2 border-black h-2/3 rounded-lg focus-within:shadow-md">
        <button
          className="w-[5%] flex items-center justify-center rounded-full m-1 hover:bg-black/10 focus:bg-black/10 focus:outline-none"
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
          className="w-[5%] flex items-center justify-center rounded-full m-1 hover:bg-black/10 focus:bg-black/10 focus:outline-none hover:cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <HomeIcon />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
