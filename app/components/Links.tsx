"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-col font-mono select-none md:text-base text-sm w-full items-center px-2 md:px-0">
      <p>Created By: Oscar Lin</p>
      <div className="flex justify-center space-x-4">
        <Link
          href={"https://github.com/ExcuseMeee/WeatherWise"}
          target="_blank"
          className="hover:text-gray-300"
        >
          <GitHubIcon fontSize="large" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/oscarlin01"}
          target="_blank"
          className="hover:text-blue-700"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </div>
      <div className="mt-2">
        <p>
          Powered by{" "}
          <span className="underline hover:text-white">
            <Link href={"https://nextjs.org/"} target="_blank">
              Next.Js v13
            </Link>
          </span>{" "}
          and{" "}
          <span className="underline hover:text-white">
            <Link href={"https://openweathermap.org/"} target="_blank">
              OpenWeatherMap API
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Links;
