import About from "@/features/home/About";
import BestProduct from "@/features/home/BestProduct";
import Herosection from "@/features/home/Herosection";
import Whychoose from "@/features/home/Whychoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Herosection></Herosection>
      <Whychoose></Whychoose>
      <BestProduct></BestProduct>
      <About></About>
    </div>
  );
}
