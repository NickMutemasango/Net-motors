import React from "react";
import Image, { StaticImageData } from "next/image";



interface Gallery {
  title: string;
  type:string;
  image: StaticImageData;
  describe:string;
}

const bus = (props:Gallery) => {
  return (
    <div className="bg-lightred relative  w-[100%] md:-[40%] pt-1 pl-1 shadow-2xl ">
      <div className=" bg-white">
        <div className="w-[100%] pt-[5px] pl-[5px]">
          <Image src={props.image} alt="" className="w-[97%] h-[80%]" />
        </div>
        <div className="pt-5 pb-3 pl-[5px]">
          <h2 className="font-medium pb-5">{props.title}</h2>
          <p>{props.type}</p>
          <p>{props.describe}</p>
        </div>
      </div>
    </div>
  );
};

export default bus;
