"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const [location, setLocation] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(location);
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
