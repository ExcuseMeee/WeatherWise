import { GeolocationData, Units, WeatherData } from "@/types";
import Image from "next/image";
import LocationInfo from "./LocationInfo";
import TimeInfo from "./TimeInfo";

type ComponentProps = {
  geo: GeolocationData;
  weather: WeatherData;
  units: Units;
};

const WeatherDisplay = ({ geo, weather, units }: ComponentProps) => {
  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  // show weather, pressure, humid, wind
  // console.log(geo);

  return (
    <div className="border-2 border-black flex flex-col items-center">
      <div className="w-1/3 flex justify-between">
        <LocationInfo geo={geo} />
        <TimeInfo timeShift={weather.timezone} />
      </div>
      <div className="flex flex-col">
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
        <div className="text-center">
          {capitalizeWords(weather.weather[0]!.description)}
        </div>
      </div>

      <div className="border w-1/3">TEST</div>
    </div>
  );
};
export default WeatherDisplay;
