import { FiSearch } from "react-icons/fi";
import { NextFont } from "next/dist/compiled/@next/font";

export default function Searchbar({ hk }: { hk: NextFont }) {
    return (
        <div className="bg-thirdlight dark:bg-thirddark flex items-center gap-2 py-1 pl-4 pr-1 rounded-lg w-2xl shadow-sm hover:shadow-md transition-all ease-in-out">
            <input className={`flex-grow py-1 placeholder:text-sm text-sm placeholder:font-thin focus:outline-none text-gray-300 ${hk.className}`} type="text" placeholder="Procurar produtos..." />
            <div className="py-2 bg-secoundarylight dark:bg-secoundarydark px-4 rounded-sm cursor-pointer hover:brightness-105"><FiSearch width={18} height={18} /></div>
        </div>
    )
}