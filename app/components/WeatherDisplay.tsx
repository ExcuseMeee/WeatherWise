import { GeolocationData, Units, WeatherData } from "@/types"

type ComponentProps = {
  geo: GeolocationData,
  weather: WeatherData,
  units: Units,
}

const WeatherDisplay = ({geo, weather, units}: ComponentProps) => {
  return (
    <div>
      WeatherDisplay
    </div>
  )
}
export default WeatherDisplay