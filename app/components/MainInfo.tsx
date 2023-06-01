"use client";
import { Main, Units, Wind, WeatherData } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChangeUnits from "./ChangeUnits";
import configureMeasurements, {
  length,
  speed,
  temperature,
  LengthSystems,
  LengthUnits,
  SpeedSystems,
  SpeedUnits,
  TemperatureSystems,
  TemperatureUnits,
} from "convert-units";

type ComponentProps = {
  main: Main;
  wind: Wind;
  visibility: WeatherData["visibility"];
};
type ConvertMeasures = "length" | "speed" | "temperature";
type Systems = LengthSystems | SpeedSystems | TemperatureSystems;
type ConvertUnits = LengthUnits | SpeedUnits | TemperatureUnits;
type Measures = {
  [key in Units]: {
    temperature: TemperatureUnits;
    windSpeed: SpeedUnits;
    visibility: LengthUnits;
  };
};

const PREFERRED_UNIT = "preferredUnit";
const MEASURES: Measures = {
  imperial: {
    temperature: "F",
    windSpeed: "mph",
    visibility: "ft",
  },
  metric: {
    temperature: "C",
    windSpeed: "m/s",
    visibility: "m",
  },
  standard: {
    temperature: "K",
    windSpeed: "m/s",
    visibility: "m",
  },
};
const convert = configureMeasurements<ConvertMeasures, Systems, ConvertUnits>({
  length,
  speed,
  temperature,
});

const MainInfo = ({ main, wind, visibility }: ComponentProps) => {
  // todo: convert unit values

  const [units, setUnits] = useState<Units>(
    (localStorage.getItem(PREFERRED_UNIT) as Units) || "metric"
  );

  useEffect(() => {
    let pref = localStorage.getItem(PREFERRED_UNIT);
    if (!pref) {
      localStorage.setItem(PREFERRED_UNIT, units);
      pref = localStorage.getItem(PREFERRED_UNIT);
    }
    setUnits(pref as Units);
  }, []);

  useEffect(() => {
    console.log("units changed: ", units);
    localStorage.setItem(PREFERRED_UNIT, units);
  }, [units]);

  return (
    <div className="w-1/3 mt-4">
      <ChangeUnits setUnits={setUnits} units={units} />
      {/* Temperature Display */}
      <div className="text-center text-7xl select-none">
        {convert(main.temp)
          .from("C")
          .to(MEASURES[units].temperature)
          .toFixed(2)}{" "}
        {units === "metric" || units === "imperial" ? (
          <span>&deg;{MEASURES[units].temperature}</span>
        ) : (
          <span>{MEASURES[units].temperature}</span>
        )}
      </div>

      {/* Wind Speed, Humidity, Pressure Display */}
      <div className="flex justify-around mt-6 select-none">
        <div className="weatherIcon">
          <Image
            src={"/wind-icon.png"}
            alt="Wind Speed"
            height={50}
            width={50}
          />
          <p>
            {convert(wind.speed)
              .from("m/s")
              .to(MEASURES[units].windSpeed)
              .toFixed(2)}{" "}
            <span>{MEASURES[units].windSpeed}</span>
          </p>
        </div>
        <div className="weatherIcon">
          <Image
            src={"/humidity-icon.png"}
            alt="Humidity"
            height={50}
            width={50}
          />
          <p>
            {main.humidity} <span>%</span>
          </p>
        </div>
        <div className="weatherIcon">
          <Image
            src={"/pressure-icon.png"}
            alt="Atmospheric Pressure"
            height={50}
            width={50}
          />
          <p>
            {main.pressure} <span>hPa</span>
          </p>
        </div>
        <div className="weatherIcon">
          <Image
            src={"/visibility-icon.png"}
            alt="Visibility"
            height={50}
            width={50}
          />
          <p>
            {convert(visibility)
              .from("m")
              .to(MEASURES[units].visibility)
              .toFixed(0)}{" "}
            <span>{MEASURES[units].visibility}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default MainInfo;
