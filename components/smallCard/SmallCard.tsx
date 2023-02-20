import Image from "next/image";
import React from "react";

export default function ({ item }) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
    hover:bg-gray-200 hover:scale-105 transform duration-300 ease-out"
    >
      <div className="relative h-16 w-16">
        <Image src={item.image} alt="" layout="fill" className="rounded-lg" />
      </div>
      <div className="">
        <h2>{item.location}</h2>
        <h3 className="text-gray-500">{item.distance}</h3>
      </div>
    </div>
  );
}
