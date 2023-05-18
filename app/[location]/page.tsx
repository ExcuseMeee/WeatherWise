import { GeoWeatherData, GeolocationData, WeatherData, Units } from "@/types";
import WeatherDisplay from "../components/WeatherDisplay";

type PageProps = {
  params: {
    location: string;
  };
  searchParams: {
    units: Units;
  };
};

async function fetchWeather(location: string, units: Units = "imperial") {
  const geoResponse: Response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.WEATHER_API_KEY}`
  );
  const geolocationList: GeolocationData[] = await geoResponse.json();

  if (geolocationList.length == 0) {
    // error occured
    throw new Error("Error: Location Not Found");
  } else {
    const geoData: GeolocationData = geolocationList.at(0)!;
    const weatherResponse: Response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=${units}&lon=${geoData.lon}&lat=${geoData.lat}&appid=${process.env.WEATHER_API_KEY}`,
      { next: { revalidate: 30 } }
    );

    const weatherData: WeatherData = await weatherResponse.json();

    const geoWeatherData: GeoWeatherData = {
      geo: geoData,
      weather: weatherData,
    };

    return geoWeatherData;
  }
}

const WeatherPage = async ({ params, searchParams }: PageProps) => {
  const { location } = params;
  const { units } = searchParams;
  const data = await fetchWeather(location, units);

  return (
    <div className="h-full border">
      <WeatherDisplay geo={data.geo} weather={data.weather} units={units} />
    </div>
  );
};
export default WeatherPage;
