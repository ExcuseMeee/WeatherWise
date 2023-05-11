export declare type GeoWeatherData = {
  geo: GeolocationData;
  weather: WeatherData;
};

export declare type GeolocationData = {
  name: string;
  local_names?: { [key: string]: string };
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export declare type WeatherData = {
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

export declare type Units = "standard" | "imperial" | "metric";

declare type Clouds = {
  all: number;
};

declare type Coord = {
  lon: number;
  lat: number;
};

declare type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

declare type Sys = {
  country: string;
  sunrise: number;
  sunset: number;
};

declare type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

declare type Wind = {
  speed: number;
  deg: number;
  gust: number;
};