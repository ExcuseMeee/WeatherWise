import { GeolocationData, WeatherData } from "@/types";
import Image from "next/image";
import LocationInfo from "./LocationInfo";
import TimeInfo from "./TimeInfo";
import MainInfo from "./MainInfo";

type ComponentProps = {
  geo: GeolocationData;
  weather: WeatherData;
};

const WeatherDisplay = ({ geo, weather }: ComponentProps) => {
  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="lg:w-1/3 flex justify-between md:w-1/2 w-4/5">
        <LocationInfo geo={geo} />
        <TimeInfo timeShift={weather.timezone} />
      </div>
      <div className="flex flex-col select-none lg:w-1/3 md:w-1/2 w-4/5">
        <div className="flex justify-center -mt-12 -mb-14">
          <Image
            src={`/conditions/${weather.weather[0]!.icon}.png`}
            alt={"Weather Icon"}
            width={250}
            height={250}
            priority={true}
          />
        </div>
        <div className="text-center select-none">
          {capitalizeWords(weather.weather[0]!.description)}
        </div>
      </div>
      <MainInfo
        main={weather.main}
        wind={weather.wind}
        visibility={weather.visibility}
      />
    </div>
  );
};
export default WeatherDisplay;
