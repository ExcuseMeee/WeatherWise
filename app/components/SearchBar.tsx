"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Units } from "@/types";

const SearchBar = () => {
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
    <form onSubmit={handleSubmit} className={`border-2 border-dotted border-black w-full h-1/2 flex justify-center items-center`}>
      <div className={`w-2/5 border h-12 flex`}>
        <div className={`border border-black w-[5%]`}>
          ICN
        </div>
        <input
          required
          type="text"
          pattern="^[A-Za-z\s]+$"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          className={`rounded-lg w-[95%] focus:outline-none focus:shadow-2xl`}
        />
      </div>
    </form>
  );
};

export default SearchBar;
