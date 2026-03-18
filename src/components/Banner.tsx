'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const covers = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  function handleBannerClick() {
    setIndex((prev) => (prev + 1) % covers.length);
  }

  return (
    <div
      className="relative w-full h-125 cursor-pointer"
      onClick={handleBannerClick}
    >
      <Image
        src={covers[index]}
        alt="banner"
        fill
        className="object-cover"
        priority
      />
      <button
        className="absolute bottom-6 right-6 bg-white text-gray-800 font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-100 z-10"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </div>
  );
}