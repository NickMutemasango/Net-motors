import Image from "next/image";
import Facebook from "../public/images/Facebook.svg";
import Twitter from "../public/images/TwitterX.svg";
import Linkdin from "../public/images/LinkedIn.svg";
import Behance from "../public/images/Behance.svg";
import Heading from "../public/images/main.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-Bee  md:bg-Ben lg:bg-Benz flex justify-center h-[100vh] bg-center  bg-cover bg-no-repeat ">
      <div className="flex py-1 px-1 space-x-1 md:space-x-2 md:px-3   bg-white/60  lg:w-[18%] xl:w-[15%] lg:space-x-2 md:py-2 absolute right-0 bottom-0 md:justify-center ">
        <Link href="">
          {" "}
          <Image src={Facebook} alt="" className="w-[30px]  md:w-[35px]" />
        </Link>
        <Link href=''>
          {" "}
          <Image src={Twitter} alt="" className="w-[30px]  md:w-[35px]" />
        </Link>
        <Link href=''>
          {" "}
          <Image src={Linkdin} alt="" className="w-[30px]  md:w-[35px]" />
        </Link>
        <Link href=''>
          {" "}
          <Image src={Behance} alt="" className="w-[30px]  md:w-[35px]" />
        </Link>
      </div>
      <h2 className="absolute bottom-16 text-[20px] md:text-4xl md:bottom-20 font-semibold text-white lg:text-5xl lg:bottom-16 xl:bottom-14">
        Find Your Perfect Ride with Net Motors 
      </h2>
      <Image
        src={Heading}
        alt=""
        className="xl:w-[33%] w-[80%] top-[9vh] lg:w-[35%]  lg:top-20 absolute xl:top-24"
      />
    </div>
  );
}
