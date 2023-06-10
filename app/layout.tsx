import SearchBar from "./components/SearchBar";
import "./globals.css";

export const metadata = {
  title: "WeatherWise",
  description: "Get the Latest Climate Data for any Location",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-500 h-screen w-screen flex flex-col justify-start`}
      >
        <div className={`h-1/6 flex flex-col justify-center items-center`}>
          <SearchBar />
        </div>
        <div className="h-5/6">{children}</div>
      </body>
    </html>
  );
}
