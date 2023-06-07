import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center h-full">
      <Image
        src={"/rainy-1.svg"}
        alt="Animated Raincloud"
        width={250}
        height={250}
        priority={true}
      />
      <p>Loading...</p>
    </div>
  );
}
