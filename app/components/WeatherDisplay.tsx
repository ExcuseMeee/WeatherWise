import { GeolocationData, Units, WeatherData } from "@/types";
import Image from "next/image";

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

  return (
    <div className="border-2 border-black flex flex-col items-center">
      <div className="w-1/3" >
        <span className="font-bold text-2xl">{geo.name}</span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center -mt-8 -mb-14">
          <Image
            src={`https://openweathermap.org/img/wn/${
              weather.weather[0]!.icon
            }@4x.png`}
            alt={"Weather Icon"}
            width={250}
            height={225}
            loading="eager"
          />
        </div>
        <div className="text-center">
          {capitalizeWords(weather.weather[0]!.description)}
        </div>
      </div>

      <div className="border w-1/3">
        TEST
      </div>
    </div>
  );
};
export default WeatherDisplay;
