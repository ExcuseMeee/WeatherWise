import { Main, Units } from "@/types";

type ComponentProps = {
  main: Main;
  units: Units;
};

type Measures = {
  [key in Units]: {
    temperature: string;
    windSpeed: string;
  };
};

const MainInfo = ({ main, units }: ComponentProps) => {
  const measurements: Measures = {
    imperial: {
      temperature: "F",
      windSpeed: "mi/h",
    },
    metric: {
      temperature: "C",
      windSpeed: "m/s",
    },
    standard: {
      temperature: "K",
      windSpeed: "m/s",
    },
  };

  return (
    <div className="border w-1/3 mt-3">
      <p className="text-center text-7xl">
        {main.temp}{" "}
        {units === "metric" || units === "imperial" ? (
          <span>&deg;{measurements[units].temperature}</span>
        ) : (
          <span>{measurements[units].temperature}</span>
        )}
      </p>
      <div>wdad</div>
    </div>
  );
};
export default MainInfo;
