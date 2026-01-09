import Image from "next/image";
import React from "react";

export default function Whychoose() {
  return (
    <div className="md:mt-16 text-center w-full px-5 md:px-20 font-montserrat ">
      <Image
        src="/images/bulb.png"
        alt="Greenify Hero"
        width={160}
        height={200}
        className="md:w-[140] md:h-[170] lg:absolute top-[720px] left-8
                  lg:block hidden"
      />

      <h1 className="text-[22px]  md:text-3xl font-bold">Why Choose Greenify?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 mt-10 ">
        <div className="flex flex-col items-center space-y-4 text-[#333333]">
          <Image
            src="/images/pic1.png"
            alt="Why Choose Greenify"
            width={110}
            height={110}
          />
          <h1 className="text-[20px] font-bold">Sustainable Products</h1>
          <p className="text-base font-lato">
            Explore our carefully curated selection of sustainable products,
            each designed to reduce your carbon footprint
          </p>
        </div>
        <div className="flex flex-col items-center  space-y-4 text-[#333333]">
          <Image
            src="/images/pic2.png"
            alt="Why Choose Greenify"
            width={110}
            height={110}
          />
          <h1 className="text-[20px] font-bold">Sustainable Products</h1>
          <p className="text-base font-lato">
            Explore our carefully curated selection of sustainable products,
            each designed to reduce your carbon footprint
          </p>
        </div>
        <div className="flex flex-col items-center  space-y-4 text-[#333333]">
          <Image
            src="/images/pic3.png"
            alt="Why Choose Greenify"
            width={110}
            height={110}
          />
          <h1 className="text-[20px] font-bold">Sustainable Products</h1>
          <p className="text-base font-lato">
            Explore our carefully curated selection of sustainable products,
            each designed to reduce your carbon footprint
          </p>
        </div>
        <div className="flex flex-col items-center  space-y-4 text-[#333333]">
          <Image
            src="/images/pic4.png"
            alt="Why Choose Greenify"
            width={110}
            height={110}
          />
          <h1 className="text-[20px] font-bold">Sustainable Products</h1>
          <p className="text-base font-lato">
            Explore our carefully curated selection of sustainable products,
            each designed to reduce your carbon footprint
          </p>
        </div>
      </div>
    </div>
  );
}
