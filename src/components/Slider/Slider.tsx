import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

export default function Slider() {
    return (
        <div className="relative w-full h-80 overflow-visible rounded-2xl">
            <div className="relative w-full h-80 bg-[#212844] overflow-hidden rounded-2xl">
                <div className="relative w-full h-full overflow-hidden">
                    <div className="absolute -top-44 right-0.5 w-90 h-90 rounded-full bg-[#2c3454]"></div>
                    <div className="absolute -top-44 right-0.5 border-8 border-[#212844] w-96 h-96 rounded-full bg-[#2c3454]"></div>
                    <div className="absolute -bottom-28 right-40 w-[200px] h-[200px] rounded-full bg-[#2c3454]"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-0">
                    <h1 className="text-3xl font-bold">Bem-vindo</h1>
                    <button className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700">Clique Aqui</button>
                </div>
            </div>
            <div className="absolute flex items-center justify-center -left-10 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-thirdlight shadow-md dark:bg-thirddark rounded-full cursor-pointer z-10 hover:scale-105"><MdOutlineArrowBackIos /></div>
            <div className="absolute flex items-center justify-center -right-10 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-thirdlight shadow-md dark:bg-thirddark rounded-full cursor-pointer z-10 hover:scale-105"><MdArrowForwardIos /></div>
        </div>
    )
}