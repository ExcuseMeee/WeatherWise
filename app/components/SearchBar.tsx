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
    router.push(`${location}?units=${units}`);
  }

  return (
    <div>
      SearchBar
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
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
