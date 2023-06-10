import { GeoWeatherData, GeolocationData, WeatherData } from "@/types";
import WeatherDisplay from "../components/WeatherDisplay";

type PageProps = {
  params: {
    location: string;
  };
};

async function fetchWeather(location: string) {
  const geoResponse: Response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.WEATHER_API_KEY}`
  );
  const geolocationList: GeolocationData[] = await geoResponse.json();

  if (geolocationList.length == 0) {
    // error occured
    throw new Error("Location Not Found");
  } else {
    const geoData: GeolocationData = geolocationList.at(0)!;
    const weatherResponse: Response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lon=${geoData.lon}&lat=${geoData.lat}&appid=${process.env.WEATHER_API_KEY}`,
      { next: { revalidate: 0 } }
    );

    const weatherData: WeatherData = await weatherResponse.json();

    const geoWeatherData: GeoWeatherData = {
      geo: geoData,
      weather: weatherData,
    };

    return geoWeatherData;
  }
}

const WeatherPage = async ({ params }: PageProps) => {
  const { location } = params;
  const data = await fetchWeather(location);

  return (
    <div>
      <WeatherDisplay geo={data.geo} weather={data.weather} />
    </div>
  );
};
export default WeatherPage;
