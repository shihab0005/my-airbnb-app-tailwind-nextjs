import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";

export default function InfoCard({ item }) {
  const { img, location, title, description, star, price, total, long, lat } =
    item;
  return (
    <div
      className="flex py-7 px-2 pr-4 border-b cursor-pointer
    hover:opacity-70 hover:shadow-lg transition transform duration-200 ease-out 
    first:border-t"
    >
      <div
        className="relative h-24 w-40 md:h-52 md:w-80
      flex-shrink-0"
      >
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className=" flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <FaRegHeart className="text-xl cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-3" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center gap-2">
            <AiTwotoneStar className="text-lg text-amber-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
