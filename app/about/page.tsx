import React from "react";
import Image from "next/image";
import Contact from "../../public/images/Frame 95.svg";
import Head from "../../public/images/heading.svg";

const page = () => {
  return (
    <div className="flex flex-col pt-[15%] px-3 md:px-5 py-2 lg:px-8">
      <Image
        src={Contact}
        alt=""
        className="w-[35%] md:w-[20%] pb-4 lg:w-[10%] xl:w-[15%] md:pb-9 pt-4"
      />
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center">
        <div className="md:w-[40%] bg-red lg:w-[35%] xl:w-[27%] flex flex-col items-center rounded-md text-white px-3 pt-7 pb-10">
          <Image
            src={Head}
            alt=""
            className="w-[60%] md:w-[65%] xl:w-[45%] pb-4"
          />
          <p className="text-center">
            <span className="text-yellow">Net Motors</span> offers comprehensive
            vehicle services, including car sales, hiring, new and used vehicle
            acquisition, disposal, port collection and delivery, clearing,
            border control, vehicle registration, returning resident services,
            chauffeur and airport shuttle services. Your trusted partner for all
            vehicle needs.&quot;
          </p>
        </div>
        <div className="md:w-1/2 lg:w-[43%] xl:w-[30%] text-center md:px-2">
          <h2 className="text-red font-bold pb-2 md:text-2xl text-[18px]">
            Our Aim
          </h2>{" "}
          <div className=" ">
            <p className="text-xs lg:text-[15px] font-normal pb-5">
              To be the best and most reliable plug in the importation, supply
              and distribution of automobiles in the region at large
            </p>
          </div>
          <h2 className="text-red font-bold pb-2 md:text-2xl text-[18px]">
            Our Mission
          </h2>
          <p className="text-xs font-normal lg:text-[15px] pb-5">
            To earn, retain and invest our Customer&apos;s loyalty by delivering
            exquisite sales and service experiences with high quality, excellent
            value, integrity and enthusiasm.
          </p>
          <div className="pb-4 md:pt-4">
            {" "}
            <button className="w-[35%] text-white rounded-md text-xs py-2 bg-gradient-to-r from-red to-yellow">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
