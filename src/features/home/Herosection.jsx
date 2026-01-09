import ShopButton from "@/components/ui/ShopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Herosection() {
  return (
    <div className="lg:mt-8 lg:pl-20 ">
      <div className=" font-montserrat  flex flex-col lg:flex-row justify-between gap-14 md:gap-0 lg:gap-24 items-center ">
        <div
          className="relative flex flex-col items-center lg:items-start text-center lg:text-left  
        p-5 md:p-14 lg:p-0"
        >
          <h1 className="leading-[40px] md:leading-[60px] lg:leading-[80px]">
            <span className="text-2xl md:text-5xl font-bold ">
              Welcome to Greenify
            </span>{" "}
            <br />
            <span className="text-2xl md:text-5xl ">Your Sustainable</span>{" "}
            <br />
            <span className="text-2xl md:text-5xl font-extrabold text-[#55B76B] hidden lg:inline">
              Shopping <br /> Destination
            </span>
            <span className="text-2xl md:text-5xl font-bold text-[#55B76B] inline lg:hidden ">
              Shopping Destination
            </span>
          </h1>
          <p className="text-sm md:text-base font-lato">
            "Discover Sustainability. Embrace Greenify. <br /> Your Eco-Friendly
            Haven for Conscious Shopping."
          </p>

          <div className="mt-6 md:mt-12">
            <Link href="/pages/allproducts">
              <ShopButton buttonText="SHOP NOW"></ShopButton>
            </Link>
          </div>

          {/* laptop version  */}
          <Image
            src="/images/butterfly.png"
            alt="Greenify Hero"
            width={90}
            height={800}
            className="absolute -top-20 -right-7 hidden lg:block"
          />

          {/* tablet version  */}
          <Image
            src="/images/butterfly.png"
            alt="Greenify Hero"
            width={90}
            height={800}
            className="absolute top-[345px] right-7  hidden md:block lg:hidden"
          />

          {/* mobile version  */}
          <Image
            src="/images/butterfly.png"
            alt="Greenify Hero"
            width={50}
            height={40}
            className="absolute top-[270px] right-4 block md:hidden"
          />

          {/* laptop version  */}
          <Image
            src="/images/minifly.png"
            alt="Greenify Hero"
            width={55}
            height={40}
            className="absolute top-[380px] left-48 hidden lg:block"
          />

          {/* tablet version  */}
          <Image
            src="/images/minifly.png"
            alt="Greenify Hero"
            width={55}
            height={40}
            className="absolute top-[490px] left-32 hidden md:block lg:hidden"
          />

          {/* mobile version  */}
          <Image
            src="/images/minifly.png"
            alt="Greenify Hero"
            width={40}
            height={30}
            className="absolute top-[300px] left-10 block md:hidden"
          />
        </div>

        <div className="flex items-end w-full lg:w-auto justify-between">
          <Image
            src="/images/bulb.png"
            alt="Greenify Hero"
            width={160}
            height={200}
            className="w-[70] h-[90] md:w-[160] md:h-[200] top-[750px]  md:ml-24 ml-6
            block lg:hidden"
          />
          <Image
            src="/images/hero.png"
            alt="Greenify Hero"
            width={200}
            height={300}
            className="w-[210] h-[300] md:w-[400] md:h-[500] lg:w-[550] lg:h-[630]"
          />
        </div>
      </div>

      <div className="bg-[#000000]/50 rounded-[100px] h-1 w-[40%] mx-auto my-10 lg:hidden"></div>
    </div>
  );
}
