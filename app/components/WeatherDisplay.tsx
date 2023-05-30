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
    <div className="border flex flex-col items-center">
      <div className="w-1/3 flex justify-between">
        <LocationInfo geo={geo} />
        <TimeInfo timeShift={weather.timezone} />
      </div>
      <div className="flex flex-col select-none">
        <div className="flex justify-center -mt-12 -mb-14">
          <Image
            src={`https://openweathermap.org/img/wn/${
              weather.weather[0]!.icon
            }@4x.png`}
            alt={"Weather Icon"}
            width={250}
            height={250}
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
