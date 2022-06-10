import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Nav = ({ placeholder }) => {
  const router = useRouter();

  const [input, setInput] = useState("");

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [numOfGuest, setNumOfGuest] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);

    setEndDate(ranges.selection.endDate);
  };

  return (
    <nav className="bg-white grid grid-cols-3 md:grid-cols-3 p-4 sticky top-0 z-50 shadow-md md:px-10 items-center overflow-x-scroll scrollbar-hide">
      <div
        className="relative flex items-center h-7 md:h-10 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt=""
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full md:shadow-sm ">
        <input
          className="flex-1 bg-transparent outline-none px-2 text-gray-600 text-sm placeholder-gray-400"
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder ? placeholder : "Start your search"}
        />

        <button className="hidden bg-red-400  items-center justify-center rounded-full p-2 md:inline-flex md:mx-2">
          <SearchIcon className="h-4 text-white" />
        </button>
      </div>

      <div className="flex items-center space-x-3 justify-self-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>

        <GlobeAltIcon className="hidden md:inline h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />

          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {input.trim() && (
        <div className="mt-3 flex flex-col col-span-3 mx-auto ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5861"]}
            onChange={handleSelect}
          />

          <div className="flex items-center px-2 border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of guests
            </h2>

            <UserIcon className="h-5" />

            <input
              className="w-12 ml-2 text-lg outline-none text-red-400"
              value={numOfGuest}
              type="number"
              min={1}
              max={5}
              onChange={(e) => setNumOfGuest(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setInput("")}
            >
              Cancel
            </button>

            <button
              className="flex-grow text-red-400"
              disabled={!input.trim()}
              onClick={() =>
                router.push({
                  pathname: "/search",
                  query: {
                    location: input,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    numOfGuest,
                  },
                })
              }
            >
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
