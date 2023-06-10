"use client";
import { Main, Units, Wind, WeatherData } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChangeUnits from "./ChangeUnits";
import configureMeasurements, {
  length,
  speed,
  temperature,
  pressure,
  LengthSystems,
  LengthUnits,
  SpeedSystems,
  PressureSystems,
  SpeedUnits,
  TemperatureSystems,
  TemperatureUnits,
  PressureUnits,
} from "convert-units";

type ComponentProps = {
  main: Main;
  wind: Wind;
  visibility: WeatherData["visibility"];
};

export type ConvertMeasures = "length" | "speed" | "temperature" | "pressure";
export type Systems =
  | LengthSystems
  | SpeedSystems
  | TemperatureSystems
  | PressureSystems;
export type ConvertUnits =
  | LengthUnits
  | SpeedUnits
  | TemperatureUnits
  | PressureUnits;

type Measures = {
  [key in Units]: {
    temperature: TemperatureUnits;
    windSpeed: SpeedUnits;
    visibility: LengthUnits;
    pressure: PressureUnits;
  };
};

const PREFERRED_UNIT = "preferredUnit" as const;
const MEASURES: Measures = {
  imperial: {
    temperature: "F",
    windSpeed: "mph",
    visibility: "mi",
    pressure: "psi",
  },
  metric: {
    temperature: "C",
    windSpeed: "m/s",
    visibility: "km",
    pressure: "bar",
  },
  standard: {
    temperature: "K",
    windSpeed: "m/s",
    visibility: "m",
    pressure: "hPa",
  },
};
const convert = configureMeasurements<ConvertMeasures, Systems, ConvertUnits>({
  length,
  speed,
  temperature,
  pressure,
});

const MainInfo = ({ main, wind, visibility }: ComponentProps) => {
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
    localStorage.setItem(PREFERRED_UNIT, units);
  }, [units]);

  return (
    <div className="lg:w-1/3 mt-4 md:w-1/2 w-4/5">
      <ChangeUnits setUnits={setUnits} units={units} />
      {/* Temperature Display */}
      <div className="text-center md:text-7xl select-none text-6xl">
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
      <div className="flex justify-around mt-6 select-none md:text-base text-sm">
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
            {convert(main.pressure)
              .from("hPa")
              .to(MEASURES[units].pressure)
              .toPrecision(4)}{" "}
            <span>{MEASURES[units].pressure}</span>
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
