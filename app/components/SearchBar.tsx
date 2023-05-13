"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Units } from "@/types";

const SearchBar = () => {
  const router = useRouter();

  const [location, setLocation] = useState("");
  const [units, setUnits] = useState<Units>("imperial")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(location.trim()){
      router.push(`${location.trim()}?units=${units}`);
    }else{
      // do something
      console.log("no valid string")
    }
  }

  return (
    <div>
      SearchBar
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          pattern="^[A-Za-z\s]+$"
          className="border-2"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
