import React from "react";

interface Testimonials {
  heading: string;
  description: string;
}

const terms = (props: Testimonials) => {
  return (
    <div className="p-[2px] w-[90%] md:w-[76%] lg:w-[60%] xl:w-[45%] bg-gradient-to-r from-red to-yellow ">
      <div className=" bg-white flex flex-col space-y-2 w-[100%]  p-2 text-sm">
        <h2 className="text-red font-bold">{props.heading}</h2>
        <p className="text-center">{props.description}</p>
      </div>
    </div>
  );
};

export default terms;
