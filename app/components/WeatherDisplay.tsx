import { useEffect, useState } from "react";
import { GeoWeatherData } from "../api/[location]/route";

const WeatherDisplay = ({ location }: { location: string }) => {
  const [geoWeatherData, setGeoWeatherData] = useState<GeoWeatherData>();
  const [errorMsg, setErrorMsg] = useState<string>();

  useEffect(() => {
    console.log("useeffect ran");
    async function fetchData() {
      setGeoWeatherData(undefined);
      setErrorMsg(undefined);
      const res: Response = await fetch(`/api/${location}`);
      if (res.ok) {
        const data: GeoWeatherData = await res.json();
        setGeoWeatherData(data);
      } else {
        console.log(res.statusText);
        setErrorMsg(res.statusText);
      }
    }
    fetchData();
  }, [location]);

  return geoWeatherData ? (
    <div>
      WEATHER DATA {location}
      <div>{JSON.stringify(geoWeatherData)}</div>
    </div>
  ) : errorMsg ? (
    <div>{errorMsg}</div>
  ) : (
    <div>LOADING...</div>
  );
};

export default WeatherDisplay;
