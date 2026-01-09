import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  return (
    <div className="mt-6 px-20 flex items-center justify-between">
      <div className=" gap-5 lg:gap-0 flex justify-between lg:flex-none">
        <MobileDrawer></MobileDrawer>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={170} height={60} className="w-28 lg:w-[170px]" />
        </Link>
      </div>

      <div className="font-lato  gap-8 text-lg font-medium  items-center hidden lg:flex">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/categories" className="flex items-center">
          Categories <i className="ri-arrow-drop-down-fill text-3xl"></i>
        </Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact us</Link>
      </div>

      <div className="flex items-center gap-5 relative">
        <i className="ri-shopping-bag-line text-3xl cursor-pointer"></i>
        <span className="w-5 h-5  absolute top-0 right-11 text-xs text-white flex items-center justify-center rounded-full bg-red-500">
          2
        </span>

        <Image
          src="/images/profile.jfif"
          alt=""
          width={35}
          height={35}
          className=" mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
      </div>
    </div>
  );
}
