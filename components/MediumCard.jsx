import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="pt-3 cursor-pointer hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl" src={img} layout="fill" alt="" />
      </div>

      <h3 className="text-xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
