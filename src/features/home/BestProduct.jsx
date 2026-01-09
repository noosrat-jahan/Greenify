import ShopButton from "@/components/ui/ShopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BestProduct() {
  return (
    <div className="md:mt-20 mt-10 text-center w-full px-5 md:px-20 font-montserrat  text-[#333333]">
      <h1 className="text-[22px]  md:text-3xl font-bold">
        Our Best-Selling Sustainable Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/product1.png"
            alt="Product 1"
            width={350}
            height={600}
          />
          <div className="text-left w-full font-lato space-y-2">
            <h2 className=" text-xl font-bold">Organic cotton tote bag</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-lg">50 Rs.</span>
                <del className="text-sm">70 Rs.</del>
              </div>
              <p>235 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/product2.png"
            alt="Product 1"
            width={350}
            height={600}
          />
          <div className="text-left w-full font-lato space-y-2">
            <h2 className=" text-xl font-bold">Hemp backpack</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-lg">999 Rs.</span>
                <del className="text-sm">1199 Rs.</del>
              </div>
              <p>729 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/product3.png"
            alt="Product 1"
            width={350}
            height={600}
          />
          <div className="text-left w-full font-lato space-y-2">
            <h2 className=" text-xl font-bold">Organic cotton T-shirts</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-lg">499 Rs.</span>
                <del className="text-sm">699 Rs.</del>
              </div>
              <p>825 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/product4.png"
            alt="Product 1"
            width={350}
            height={600}
          />
          <div className="text-left w-full font-lato space-y-2">
            <h2 className=" text-xl font-bold">Bamboo toothbrush</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-lg">99 Rs.</span>
                <del className="text-sm">149 Rs.</del>
              </div>
              <p>248 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/product5.png"
            alt="Product 1"
            width={350}
            height={600}
          />
          <div className="text-left w-full font-lato space-y-2">
            <h2 className=" text-xl font-bold">Bamboo pens and pencils</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-lg">49 Rs.</span>
                <del className="text-sm">89 Rs.</del>
              </div>
              <p>1256 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/product6.png"
            alt="Product 1"
            width={350}
            height={600}
          />
          <div className="text-left w-full font-lato space-y-2">
            <h2 className=" text-xl font-bold">Jute grocery bag</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-lg">59 Rs.</span>
                <del className="text-sm">89 Rs.</del>
              </div>
              <p>895 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>
      </div>

      <Link href="/pages/allproducts">
        <button className="text-white mt-10 font-extrabold border-b-4 border-[#55B76B] rounded-md bg-[#333333] py-2 px-9  hover:bg-white hover:text-[#55B76B] hover:shadow-lg shadow-green-400 hover:border-[#55B76B] transition-all duration-500 ease-in-out font-lato">
          EXPLORE MORE
        </button>
      </Link>
    </div>
  );
}
