import Image from "next/image";
import React from "react";

export default function MediumCard({ mitem }) {
  return (
    <div
      className="cursor-pointer hover:scale-105 transform 
    transition duration-300 ease-out"
    >
      <div className="relative h-80 w-80">
        <Image
          src={mitem.image}
          layout="fill"
          alt={mitem.location}
          className="rounded-lg"
        />
        <h3 className="text-2xl mt-3">{mitem.location}</h3>
      </div>
    </div>
  );
}
