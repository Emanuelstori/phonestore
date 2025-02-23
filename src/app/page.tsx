import Slider from "@/components/Slider/Slider";
import Header from "@/components/Header/Header";

import { Host_Grotesk } from 'next/font/google'
import { MdArrowForwardIos } from "react-icons/md";
import Products from "@/components/Products/Products";
import Categories from "@/components/Categories/Categories";
import Brands from "@/components/Brands/Brands";
import Footer from "@/components/Footer/Footer";

const hk = Host_Grotesk({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header hk={hk} />
      <hr className="text-gray-100 dark:text-neutral-700"></hr>
      <div className="bg-primarylight dark:bg-primarydark">
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <div className="relative flex flex-col w-[calc(100%-20rem)] gap-16 last:mb-16">
            <Slider />
            <div className="flex flex-col">
              <div className="flex w-full h-fit justify-between items-center">
                <h1 className={`${hk.className} text-2xl`}>Maiores descontos em <span className="text-selected font-semibold">Celulares</span></h1>
                <div className="flex flex-col group transition-all duration-75 cursor-pointer">
                  <div className="flex items-center gap-2 cursor-pointer group-hover:scale-95">
                    <span className="">Ver mais</span>
                    <MdArrowForwardIos className="text-selected group-hover:brightness-105" />
                  </div>
                  <div className="relative w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out ">
                    <div className="absolute bg-selected w-full h-0.5"></div>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-0.5">
                <div className="absolute bg-thirdlight w-full h-0.5"></div>
                <div className="absolute bg-selected w-96 h-0.5"></div>
              </div>
              <Products />
            </div>
            <div className="flex flex-col">
              <div className="flex w-full h-fit justify-between items-center">
                <h1 className={`${hk.className} text-2xl`}><span className="text-selected font-semibold">Categorias</span> mais procuradas</h1>
                <div className="flex flex-col group transition-all duration-75 cursor-pointer">
                  <div className="flex items-center gap-2 cursor-pointer group-hover:scale-95">
                    <span className="">Ver mais</span>
                    <MdArrowForwardIos className="text-selected group-hover:brightness-105" />
                  </div>
                  <div className="relative w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out ">
                    <div className="absolute bg-selected w-full h-0.5"></div>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-0.5">
                <div className="absolute bg-thirdlight w-full h-0.5"></div>
                <div className="absolute bg-selected w-96 h-0.5"></div>
              </div>
              <Categories />
            </div>
            <div className="flex flex-col">
              <div className="flex w-full h-fit justify-between items-center">
                <h1 className={`${hk.className} text-2xl`}>As <span className="text-selected font-semibold">Marcas</span> mais amadas</h1>
                <div className="flex flex-col group transition-all duration-75 cursor-pointer">
                  <div className="flex items-center gap-2 cursor-pointer group-hover:scale-95">
                    <span className="">Ver mais</span>
                    <MdArrowForwardIos className="text-selected group-hover:brightness-105" />
                  </div>
                  <div className="relative w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out ">
                    <div className="absolute bg-selected w-full h-0.5"></div>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-0.5">
                <div className="absolute bg-thirdlight w-full h-0.5"></div>
                <div className="absolute bg-selected w-96 h-0.5"></div>
              </div>
              <Brands />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
