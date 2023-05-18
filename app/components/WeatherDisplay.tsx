import { GeolocationData, Units, WeatherData } from "@/types";
import Image from "next/image";

type ComponentProps = {
  geo: GeolocationData;
  weather: WeatherData;
  units: Units;
};

const WeatherDisplay = ({ geo, weather, units }: ComponentProps) => {

  // show weather, pressure, humid, wind

  return (
    <div className={`border-2 border-black flex flex-col items-center`}>
      <div className={`flex flex-col`}>
        <div className="flex justify-center border">
          <Image src={`https://openweathermap.org/img/wn/${weather.weather[0]!.icon}@4x.png`} alt={"Weather Icon"} width={200} height={200} loading="eager"/>
        </div>
          {weather.weather[0]!.description}
        <div>
        </div>
      </div>

    </div>
  );
};
export default WeatherDisplay;
