import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Persona {
  image: StaticImageData;
  description: string;
  client: string;
}

const testimonials = (props: Persona) => {
  return (
    <div className="flex flex-col justify-center items-center md:px-4 w-[90%]">
      <div className="border-2 border-red h-[350px] md:h-[380px] lg:w-[87%] xl:w-[65%] flex flex-col justify-between items-center p-5  space-y-3">
        <Image src={props.image} alt="image" className="w-[40%]"/>
        <p className="text-sm text-center">{props.description}</p>
      </div>
      <div className="flex space-x-2">
        <p>Client:</p>
        <p className="text-red font-bold">{props.client}</p>
      </div>  
    </div>
  );
};

export default testimonials;
