import React from "react";
import Image from "next/image";
import Contact from "../../public/images/contact.svg";
import Net from "../../public/images/Net Motors.svg";
import Call from "../../public/images/Phone.svg";
import Location from "../../public/images/Location.svg";
import Email from "../../public/images/Email.svg";
import Edison from "../../public/images/Edison.svg";
import Car from "../../public/images/cont.svg";
import Facebook from "../../public/images/Facebook.svg"
import Twitter from "../../public/images/TwitterX.svg"
import Link from "../../public/images/LinkedIn.svg"
import Behance from "../../public/images/Behance.svg"

const page = () => {
  return (
    <div className="pt-[15%]">
      <div className="flex relative items-center justify-center space-x-3 md:space-x-8 py-4 md:py-8 px-3">
        <Image
          src={Contact}
          alt=""
          className=" w-[40%] lg:absolute left-5 md:w-[20%] lg:w-[15%] xl:w-[12%] "
        />
         <Image
          src={Net}
          alt=""
          className="md:w-[20%]  lg:w-[40%] xl:w-[40%] xl:left-40 md:left-40 w-[50%]"
        />
      </div>

      <div className="flex flex-col  items-center">
        <p>Get in touch with us</p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-evenly md:pt-7 px-3 justify-center pt-5">
        <div className="flex flex-col items-center pb-3">
          <Image src={Call} alt="" className="pb-2"/>
          <p>+263 717 451 744</p>
          <p>+236 788 178 027</p>
        </div>
        <div className="flex flex-col items-center pb-3">
          <Image src={Location} alt="" className="pb-2"/>
          <p>No. 5 Eden Street</p>
          <p>Gweru East</p>
        </div>
        <div className="flex flex-col items-center pb-3">
          <Image src={Email} alt="" className="pb-2"/>
          <p>ngulubeedson92@gmail.com</p>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row md:pt-6 items-center justify-center">
        <div className="relative">
          <Image src={Car} alt="" className="pt-5" />
          <div className="absolute top-0 left-0 md:bottom-[-330px] pl-3 xl:bottom-[-500px] lg:bottom-[-400px] flex items-center space-x-3">
            <Image src={Facebook} alt="" className="w-[35px]"/>
            <Image src={Twitter} alt="" className="w-[35px]"/>
            <Image src={Link} alt="" className="w-[35px]"/>
            <Image src={Behance} alt="" className="w-[35px]"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Edison} alt="" />
          <p>Director: <span className="text-red font-bold">Edson Ngulube</span></p>
        </div>
        <div className="absolute flex flex-col space-y-3 lg:space-y-[20px] w-[75%] md:w-[35%]">
          <input
            type="text"
            placeholder="Name"
            className="border shadow-xl lg:py-1 outline-none border-red"
          />
          <input
            type="email"
            placeholder="Email"
            className="border shadow-xl lg:py-1 outline-none border-red"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border shadow-xl lg:py-1 outline-none border-red"
          />
          <div className="h-28 lg:h-36 relative">
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="border h-full w-full shadow-xl outline-none border-red"
            ></textarea>
            <button className="px-4 absolute right-[3px] bottom-[3px] py-[2px] border border-red">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
