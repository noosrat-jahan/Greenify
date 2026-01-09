import Image from "next/image";
import React from "react";

export default function Herosection() {
  return (
    <div className="lg:mt-8 lg:pl-20 ">
      <div className=" font-montserrat  flex flex-col lg:flex-row justify-between gap-0 lg:gap-24 items-center ">
        <div
          className="relative flex flex-col items-center lg:items-start text-center lg:text-left  
        p-14 lg:p-0"
        >
          <h1 className="leading-[60px] lg:leading-[80px]">
            <span className="text-5xl font-bold ">Welcome to Greenify</span>{" "}
            <br />
            <span className=" text-5xl ">Your Sustainable</span> <br />
            <span className="text-5xl font-bold text-[#55B76B]">
              Shopping <br /> Destination
            </span>
          </h1>
          <p className="text-base font-lato">
            "Discover Sustainability. Embrace Greenify. <br /> Your Eco-Friendly
            Haven for Conscious Shopping."
          </p>
          <button className="text-white font-extrabold border-b-4 border-[rgb(51,51,51)] rounded-md bg-[#55B76B] py-2 px-9 mt-12 hover:bg-white hover:text-[#55B76B] hover:shadow-lg shadow-green-400 hover:border-[#55B76B] transition-all duration-500 ease-in-out font-lato">
            SHOP NOW
          </button>
          <Image
            src="/images/butterfly.png"
            alt="Greenify Hero"
            width={90}
            height={800}
            className="absolute -top-20 -right-7 hidden lg:block"
          />
          <Image
            src="/images/butterfly.png"
            alt="Greenify Hero"
            width={90}
            height={800}
            className="absolute top-[345px] right-7 block lg:hidden"
          />

          <Image
            src="/images/minifly.png"
            alt="Greenify Hero"
            width={55}
            height={40}
            className="absolute top-[375px] left-48 hidden lg:block"
          />
          <Image
            src="/images/minifly.png"
            alt="Greenify Hero"
            width={55}
            height={40}
            className="absolute top-[490px] left-32 block lg:hidden"
          />
        </div>

        <div className="flex items-end border border-red-700 w-full lg:w-auto justify-between">
             <Image
            src="/images/bulb.png"
            alt="Greenify Hero"
            width={160}
            height={200}
            className="w-[160] h-[200] lg:absolute top-[750px] border border-red-700 ml-24 
            block lg:hidden"
          />
          <Image
            src="/images/hero.png"
            alt="Greenify Hero"
            width={300}
            height={300}
            className="w-[400] h-[500] lg:w-[550] lg:h-[630]"
          />       
        </div>
      </div>
    </div>
  );
}
