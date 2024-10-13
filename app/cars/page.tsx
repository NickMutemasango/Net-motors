"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Heading from "../../public/images/Net Motors.svg";
import Featured from "../../public/images/Group 46.svg";
import Cars from "../components/car";
import Bus from "../components/bus";
import Gl6 from "../../public/images/gl3.svg";
import Gl1 from "../../public/images/gl6.svg";
import Gl2 from "../../public/images/gl5.svg";
import Gl3 from "../../public/images/gl4.svg";
import Gl4 from "../../public/images/gl2.svg";
import Gl5 from "../../public/images/gl1.svg";
import Gl9 from "../../public/images/gl9.svg";
import Bus1 from "../../public/images/bus1.svg";
import Bus2 from "../../public/images/bus2.svg";
import Bus3 from "../../public/images/bus3.svg";
import Bus4 from "../../public/images/bus4.svg";
import Bushead from '../../public/images/bus.svg'
import Choose from "../../public/images/choose.svg";
import Net from "../../public/images/Net Motors.svg";
import Brands from "../../public/images/brands.svg";
import Agent from "../../public/images/agent.svg";
import Flag from "../../public/images/Flage.svg";
import BMW from "../../public/images/bmw.svg";

const page = () => {
  // Slider settings
  const settings = {
    dots: false, // Remove navigation dots
    infinite: true, // Enable infinite looping of slides
    speed: 3000, // Speed of transition between slides (adjust for smoothness)
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 0, // Set to 0 for continuous scroll without pause
    cssEase: "linear", // Use linear easing for smooth, uninterrupted scroll
    arrows: false, // Remove navigation arrows
    pauseOnHover: true, // Prevent stopping when hovering
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  const setting = {
    dots: false, // Remove navigation dots
    infinite: true, // Enable infinite looping of slides
    speed: 3000, // Speed of transition between slides (adjust for smoothness)
    slidesToShow: 2, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 0, // Set to 0 for continuous scroll without pause
    cssEase: "linear", // Use linear easing for smooth, uninterrupted scroll
    arrows: false, // Remove navigation arrows
    pauseOnHover: true, // Prevent stopping when hovering
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex relative pt-[15%] lg:w-full md:pt-[15%] lg:justify-center py-4 md:py-8 px-5">
        <Image
          src={Featured}
          alt=""
          className=" w-[40%]  lg:absolute left-5 md:w-[20%] lg:w-[15%] xl:w-[20%] "
        />
        <Image
          src={Heading}
          alt=""
          className="md:w-[20%]  lg:w-[40%] xl:w-[40%] xl:left-40 md:left-40 w-[50%]"
        />
      </div>

      {/* Auto carousel slider */}
      <Slider {...settings} className="caroulsel flex justify-between">
        <div className="md:w-[24%] px-5 md:pb-10">
          <Cars
            image={Gl6}
            title="TOYOTA HILUX REVO DOUBLE CAB ENTRY"
            type="Diesel / 2022 / 2WD"
            describe="9 500km 2400cc Automatic"
          />
        </div>
        <div className="md:w-[24%] px-5">
          <Cars
            image={Gl1}
            title="TOYOTA HILUX REVO DOUBLE CAB ENTRY"
            type="Diesel / 2022 / 2WD"
            describe="9 500km 2400cc Automatic"
          />
        </div>
        <div className="md:w-[24%] px-5">
          <Cars
            image={Gl2}
            title="TOYOTA AQUA"
            type="Diesel / 2022 / 2WD"
            describe="9 500km 2400cc Automatic"
          />
        </div>
        <div className="md:w-[24%] px-5">
          <Cars
            image={Gl3}
            title="TOYOTA FORTUNER"
            type="Petrol / 2023 / 2WD"
            describe="9 500km 2400cc Automatic"
          />
        </div>
        <div className="md:w-[24%] px-5">
          <Cars
            image={Gl4}
            title="TOYOTA HILUX REVO DOUBLE CAB ENTRY"
            type="Diesel / 2022 / 2WD"
            describe="9 500km 2400cc Automatic"
          />
        </div>
        <div className="md:w-[24%] px-5">
          <Cars
            image={Gl5}
            title="TOYOTA HILUX REVO DOUBLE CAB ENTRY"
            type="Diesel / 2022 / 2WD"
            describe="9 500km 2400cc Automatic"
          />
        </div>
        <div className="md:w-[24%] px-5">
          <Cars
            image={Gl9}
            title="TOYOTA HILUX REVO DOUBLE CAB ENTRY"
            type="Diesel / 2022 / 2WD"
            describe="9 500km 2400cc Automatic"
          />
        </div>
      </Slider>

      {/* Bus slider */}
      <div className="pt-[15%] md:pt-[5%]">
        <div className="px-5 pb-5 w-[50%] md:w-[24%] lg:w-[20%] xl:w-[20%]">
          <Image src={Bushead} alt="" />
        </div>
      </div>


      <Slider {...setting} className="caroulsel  flex justify-between">
        <div  className="md:w-[45%] px-5 md:pb-10">
          <Bus image={Bus1} title="ZK6110 YUTONG 47-51 SEATER" type="Diesel / 12300kg / Used vehicle" describe=" 90km/hr 8ltr Manual" />
        </div>
        <div className="md:w-[45%] px-5">
          <Bus image={Bus2} title="ZK6110 YUTONG 47-51 SEATER" type="Diesel / 12300kg / Used vehicle" describe="90km/hr 8ltr Manual" />
        </div>
        <div className=" px-5">
          <Bus image={Bus3} title="COASTER" type="Diesel / 12300kg / Used vehicle" describe="90km/hr 8ltr Manual" />
        </div>
        <div className=" px-5">
          <Bus image={Bus4} title="MINI BUS" type="Diesel / 12300kg / Used vehicle" describe="90km/hr 8ltr Manual" />
        </div>
      </Slider>

      <div className="bg-grey pt-5 mt-5">
        <div className="flex px-3 items-center space-x-3 md:space-x-8 py-4 md:py-8 ">
          <Image
            src={Choose}
            alt=""
            className=" w-[30%] md:w-[20%] lg:w-[15%] xl:w-[12%] "
          />
          <Image
            src={Net}
            alt=""
            className="lg:left-36 md:w-[35%] lg:w-[25%] xl:w-[27%] xl:left-40 md:left-40 w-[50%]"
          />
        </div>
        <h2 className="font-bold px-3 md:text-2xl">WE ARE THE BEST</h2>
        <div className="pt-2  text-base font-semibold">
          <div className="w-[100%] md:py-5 px-3 flex justify-center">
            <div className="md:w-[58%] lg:w-[60%] xl:w-[50%]">
              {" "}
              <p className="md:text-[27px] font-normal text-lg">
                <span className="text-red"> Net Motors</span> for trusted
                vehicle sales, hassle-free imports, expert customs clearance,
                and dedicated customer service every step.
              </p>
            </div>
          </div>
          <div className="flex flex-col pt-5 md:pt-0 pb-5  md:flex-row md:justify-center">
            <div className="md:w-1/2 px-3 md:flex md:flex-col md:px-0 md:pl-3 md:items-center space-y-3 md:space-y-7 md:justify-center">
              {" "}
              <div className="flex w-[100%]">
                <Image
                  src={Brands}
                  alt=""
                  className="w-[15%] lg:w-[10%] xl:w-[7%]  md:w-[15%]"
                />
                <div>
                  <p className="font-light pl-4">All Brands</p>
                  <div className="w-full h-[0.2px] bg-lightered"></div>
                </div>
              </div>
              <div className="flex w-[100%]">
                <Image
                  src={Agent}
                  alt=""
                  className="w-[15%] lg:w-[10%] xl:w-[7%]  md:w-[15%]"
                />
                <div>
                  <p className="font-light pl-4">Trusted Agent</p>
                  <div className="w-full h-[0.2px] bg-lightered"></div>
                </div>
              </div>
              <div className="flex w-[100%]">
                <Image
                  src={Flag}
                  alt=""
                  className="w-[15%] lg:w-[10%] xl:w-[7%]  md:w-[15%]"
                />
                <div>
                  <p className="font-light pl-4">24/7 Customer Service</p>
                  <div className="w-full h-[0.2px] bg-lightered"></div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              {" "}
              <Image src={BMW} alt="" className="" />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default page;
