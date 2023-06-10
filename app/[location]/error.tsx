"use client"; // Error components must be Client components

import { useEffect } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  

  return (
    <div className="flex flex-col items-center justify-center font-mono">
      <p>Something went wrong!</p>
      <div className="flex items-center justify-center m-4">
        <ErrorOutlineIcon fontSize="medium" />
        <p className="font-bold">Location Not Found</p>
      </div>
      <div className="flex space-x-10 mt-2">
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="border-2 border-black w-16 h-8 rounded-md hover:bg-black/10"
        >
          Retry
        </button>
        <Link href={"/"}>
          <button className="border-2 border-black w-16 h-8 rounded-md hover:bg-black/10">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
