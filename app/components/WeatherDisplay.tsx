import { GeolocationData, Units, WeatherData } from "@/types";
import Image from "next/image";

type ComponentProps = {
  geo: GeolocationData;
  weather: WeatherData;
  units: Units;
};

const WeatherDisplay = ({ geo, weather, units }: ComponentProps) => {
  return (
    <div className={`border-2 border-black flex flex-col items-center`}>
      <div className={`flex flex-col border`}>
        <div>
          Image: {weather.weather[0]!.icon}
          <Image src={`https://openweathermap.org/img/wn/${weather.weather[0]!.icon}@2x.png`} alt={"Weather Icon"} width={50} height={50}/>
        </div>
        <div>
          {weather.weather[0]!.description}
        </div>
      </div>

    </div>
  );
};
export default WeatherDisplay;
