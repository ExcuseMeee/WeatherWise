import Links from "./components/Links";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-around w-full">
      <div className="flex flex-col items-center space-y-2 w-full">
        <h1 className="md:text-8xl font-extrabold sm:text-7xl text-5xl text-center">WeatherWise</h1>
        <p className="md:text-lg font-medium font-mono sm:text-sm text-xs text-center">Get the latest climate data for over 200k cities and locations</p>
      </div>
      <Links />
    </div>
  );
}
