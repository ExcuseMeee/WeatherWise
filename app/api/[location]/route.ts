import { NextRequest, NextResponse } from "next/server";

export type GeoWeatherData = {
  geo: GeolocationData;
  weather: WeatherData;
};
type GeolocationData = {
  name: string;
  local_names?: { [key: string]: string };
  lat: number;
  lon: number;
  country: string;
  state: string;
};
type WeatherData = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export async function GET(
  request: NextRequest,
  { params }: { params: { location: string } }
) {
  const { location } = params;

  const geoResponse: Response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${
      process.env.WEATHER_API_KEY
    }`
  );

  const geolocationList: GeolocationData[] = await geoResponse.json();

  if(geolocationList.length == 0){
    return new Response("Unknown Location", {
      status: 400,
      statusText: "Unkown Location"
    })
  } else {
    const geoData: GeolocationData  = geolocationList.at(0)!;
    const weatherResponse: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lon=${geoData.lon}&lat=${geoData.lat}&appid=${process.env.WEATHER_API_KEY}`)
  
    const weatherData: WeatherData = await weatherResponse.json();

    const geoWeatherData: GeoWeatherData = {
      geo: geoData,
      weather: weatherData
    }
  
    return NextResponse.json(geoWeatherData);
  }



}

type Clouds = {
  all: number;
};

type Coord = {
  lon: number;
  lat: number;
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

type Sys = {
  country: string;
  sunrise: number;
  sunset: number;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};