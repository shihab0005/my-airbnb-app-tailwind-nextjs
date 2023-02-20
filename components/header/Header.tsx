import Image from "next/image";
import React, { useReducer, useState } from "react";
import { BiSearch, BiMenu, BiUserCircle } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

export default function Header({ palceholder }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleResetInput = () => {
    setInputValue("");
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: inputValue,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-3 px-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-12 w-20 cursor-pointer my-auto lg:h-15 lg:h-30"
      >
        <Image
          src={"/images/Airbnb.jpg"}
          layout="fill"
          alt="Airbnb"
          objectFit="contain"
          // objectPosition="left"
        />
      </div>

      <div className="flex items-center justify-between rounded-full md:border-2 py-2 md:shadow-sm">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pl-5 bg-transparent outline-none placeholder-slate-300"
          type="text"
          placeholder={palceholder || "Search Here"}
        />

        <BiSearch className="hidden md:inline-flex h-7 w-7 p-1 bg-red-400 text-white rounded-full cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline-block cursor-pointer">Become Host</p>
        <AiOutlineGlobal className="h-7 w-7" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <BiMenu className="h-7 w-7" />
          <BiUserCircle className="h-7 w-7" />
        </div>
      </div>

      {inputValue ? (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number Of Guests{" "}
            </h2>
            <BsFillPeopleFill className="text-xl" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-500"
            />
          </div>

          <div className="flex">
            <button
              onClick={handleResetInput}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button onClick={handleSearch} className="flex-grow text-red-500">
              Search
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
