import React from "react";
import Featured from "../../public/images/terms.svg";
import Heading from "../../public/images/Net Motors.svg";
import Image from "next/image";
import Terms from "../components/terms";
import Testimonials from "../components/testimonials";
import Herbert from "../../public/images/herbert.svg";
import Nomsa from "../../public/images/nomsa.svg";
import Guru from "../../public/images/guru.svg";
import Testimon from "../../public/images/testimon.svg";

const page = () => {
  return (
    <div className="space-y-10 pb-10 pt-[15%]">
      <div className="flex relative justify-center items-center py-4 md:py-8 px-5">
        <Image
          src={Featured}
          alt=""
          className=" w-[40%] md:absolute left-5 md:w-[20%] lg:w-[15%] xl:w-[20%] "
        />
        <Image
          src={Heading}
          alt=""
          className="md:w-[20%]  lg:w-[40%] xl:w-[40%] xl:left-40 md:left-40 w-[50%]"
        />
      </div>

      {/* Terms */}

      <div className=" flex flex-col justify-center items-center space-y-3">
        <Terms
          heading="OPTION 1"
          description="Pay 50% of initial price then cars gets shipped to Dar es Salaam then balance up to arrival of ship"
        />
        <Terms
          heading="OPTION 2"
          description="Pay CIF (Cost, Insurance and Frieght) of intended car the expenditure cost and duty to be provided after 5 weeks of shipment."
        />
        <Terms
          heading="OPTION 3"
          description="Full payment if flexible enough then shipping takes 5 weeks standard, 6th week is for clearing and the possibly delivering to your doorstep"
        />
        <Terms
          heading="NOTE"
          description="Full payment if flexible enough then shipping takes 5 weeks standard, 6th week is for clearing and the possibly delivering to your doorstep"
        />
        <Terms
          heading="DOCUMENTS TO BE PROVIDED"
          description="Certified copy of I.D. , Proof of residence"
        />
      </div>

      {/* Testimoninals */}
      <div className="flex relative justify-center items-center py-4 md:py-8 ">
        <Image
          src={Testimon}
          alt=""
          className="md:absolute  w-[40%] lg:absolute left-5 md:w-[20%] lg:w-[15%] xl:w-[20%] "
        />
        <Image
          src={Heading}
          alt=""
          className="md:w-[20%]  lg:w-[40%] xl:w-[40%] xl:left-40 md:left-40 w-[50%]"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0  md:space-x-5">
        <Testimonials
          image={Herbert}
          description="Net Motors exceeded my expectations! From acquiring the perfect car to handling all the paperwork, they made the process effortless. Their dedication and professionalism are unmatched. 
        I highly recommend their services to anyone looking for a reliable car agent. "
          client="Hebert gusvu"
        />
        <Testimonials
          image={Guru}
          description="I hired a car through Net Motors, and the experience was top-notch. The vehicle was in perfect condition, and their team was incredibly helpful. Their efficiency and attention to detail made everything smooth. I’ll definitely be using them again."
          client="Christopher Guru"
        />
        <Testimonials
          image={Nomsa}
          description="Buying a car with Net Motors was a great decision! They guided me through the entire process, from selection to delivery. Their service was professional, transparent, and fast. I’d definitely recommend them for anyone looking to buy or hire a vehicle "
          client="Nomsa Chutawo"
        />
      </div>
    </div>
  );
};

export default page;
