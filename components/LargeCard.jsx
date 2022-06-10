import React from "react";
import Image from "next/image";

const LargeCard = ({ img, title, description, btnText }) => {
  return (
    <div className="relative h-96 min-w-[300px]">
      <Image
        className="rounded-xl"
        src={img}
        layout="fill"
        objectFit="cover"
        alt=""
      />

      <div className="absolute top-1/3 left-12">
        <h3 className="text-3xl sm:text-4xl w-64 mb-3">{title}</h3>

        <p>{description}</p>

        <button className="mt-5 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
