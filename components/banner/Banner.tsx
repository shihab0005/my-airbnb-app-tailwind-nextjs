import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src={"/images/natural.jpg"}
        layout="fill"
        objectFit="cover"
        alt="natural"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go?</p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3
        hover:shadow-2xl active:scale-90 transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}
