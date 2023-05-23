import { GeolocationData } from "@/types";
import lookup from 'country-code-lookup'

type ComponentProps = {
  geo: GeolocationData;
};

const LocationInfo = ({ geo }: ComponentProps) => {
  return (
    <div className="select-none">
      <p className="font-bold text-2xl">
        {geo.name}
        {geo.country == "US" ? `, ${geo.state}` : ""}
      </p>
      <p>
        {lookup.byIso(geo.country)?.country},{" "}
        {lookup.byIso(geo.country)?.continent}
      </p>
    </div>
  );
};
export default LocationInfo;
