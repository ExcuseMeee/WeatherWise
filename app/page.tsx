import Links from "./components/Links";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-around">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-8xl font-extrabold">WeatherWise</h1>
        <p className="text-lg font-medium font-mono">Get the latest climate data for over 200k cities and locations</p>
        <p>TESTEEE</p>
      </div>
      <Links />
    </div>
  );
}
