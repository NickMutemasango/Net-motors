import React from "react";
import Image from "next/image";
import Gallery from "../../public/images/gallery.svg";
import Net from "../../public/images/Net Motors.svg";
import One from "../../public/images/one.svg";
import Two from "../../public/images/two.svg";
import Three from "../../public/images/three.svg";
import Four from "../../public/images/four.svg";
import Five from "../../public/images/five.svg";
import Six from "../../public/images/six.svg";

const page = () => {
  return (
    <div className="px-3 flex flex-col pt-[15%] md:pt-[15%] md:px-6 md:py-6 py-3">
      <div className="flex relative lg:justify-center space-x-5 md:space-x-8">
        <Image
          src={Gallery}
          alt=""
          className=" w-[28%] lg:absolute left-5 md:w-[20%] lg:w-[10%] xl:w-[15%]"
        />
        <Image
          src={Net}
          alt=""
          className="md:w-[20%]   lg:w-[40%] xl:w-[40%] xl:left-40 md:left-40 w-[50%]"
        />
      </div>

      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row py-6 md:space-x-5 lg:w-[50%]">
          <div className="flex flex-col w-full">
            <Image src={One} alt="" className="w-full" />
            <div className="flex justify-between pt-3">
              <Image src={Two} alt="" className="w-[48%] " />
              <Image src={Three} alt="" className="w-[48%] " />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-col md:pt-0 w-full pt-3">
            <div className="flex justify-between pt-3 md:pt-0 md:pb-3">
              <Image src={Four} alt="" className="w-[48%] " />
              <Image src={Five} alt="" className="w-[48%] " />
            </div>
            <Image src={Six} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
