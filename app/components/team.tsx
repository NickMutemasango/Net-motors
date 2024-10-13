import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Team {
  department: string;
  image: StaticImageData;
  name: string;
  description: string;
}

const team = (props: Team) => {
  return (
    <div className="flex flex-col md:px-5   pb-[5%] justify-center items-center relative w-[90%] xl:w-[25%] md:w-[40%] lg:w-[30%]">
      <div className="flex flex-col mt-[40%] md:mt-0 justify-center items-center text-red absolute top-[-25%]">
        <h2 className="font-bold">{props.department}</h2>
        <div className="border-2 border-red  w-[80%] md:w-[61%] xl:w-[70%] h-[60%]">
          <Image src={props.image} alt="image" />
        </div>
        <p className="font-bold pt-2">{props.name}</p>
      </div>
      <div className="flex flex-col border-2   border-t-hidden  md:w-[100%] md:h-[38vh] lg:h-[60vh] xl:h-[65vh] border-red  justify-center items-center p-5 text-sm mt-[40%] md:mt-0 pt-[70%] lg:pt-[65%] xl:pt-[75%] text-center">
        <p className="text-">{props.description}</p>
      </div>
    </div>
  );
};

export default team;
