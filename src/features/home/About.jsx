import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="md:mt-20 text-center flex flex-col items-center w-full px-5 md:px-20 font-montserrat about text-[#333333]">
      <h1>About us</h1>
      <div className="bg-white py-2 px-3 flex justify-center rounded-lg w-[20%]">
        <Image src="/images/logo.png" alt="Logo" width={150} height={60} className="w-28 lg:w-[170px]" />
      </div>
      <p>At Greenify, we are more than just an e-commerce website; we are a passionate community dedicated to fostering a sustainable and eco-friendly lifestyle. 
Our mission is to empower environmentally conscious consumers by offering a curated selection of high-quality, sustainable products 
that inspire positive change and make a difference in the world.</p>
    </div>
  );
}
