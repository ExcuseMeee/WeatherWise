import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-col items-center h-full">
      <Image
        src={"/rainy-1.svg"}
        alt="Animated Raincloud"
        width={250}
        height={250}
      />
      <p>Loading...</p>
    </div>
  );
}
