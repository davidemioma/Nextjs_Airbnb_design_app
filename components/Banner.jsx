import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt=""
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? perfect.</p>

        <button className="bg-white text-purple-500 my-3 py-3 px-10 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150 ">
          I&apos;m Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
