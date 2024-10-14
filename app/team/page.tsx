import React from "react";
import Team from "../components/team";
import Pfurumbwi from "../../public/images/profile.svg";
import Featured from "../../public/images/team.svg";
import Heading from "../../public/images/Net Motors.svg";
import Image from "next/image";
import Tinashe from "../../public/images/tinashe.svg";
const page = () => {
  return (
    <div className="pt-[15%]">
      <div className="flex relative pt-[15%] lg:w-full  lg:justify-center py-4 md:py-8 px-5">
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

      {/* Terms */}

      <div className="flex flex-col md:flex-row  justify-center items-center  pt-[10%]">
        <Team
          department="DIRECTOR"
          image={Tinashe}
          name="Edson Tinashe Ngulube"
          description="As the Director of Net Motors, I am personally committed to ensuring total transparency and the highest level of customer service through the strategic deployment of cutting-edge digital tools and technologies."
        />
        <Team
          department="IT"
          image={Pfurumbwi}
          name="Takudzwa W Manhovo"
          description="At Net Motors, we are dedicated to delivering an exceptional car buying experience for our customers through innovative use of technology."
        />
      </div>
    </div>
  );
};

export default page;
