import { FiShoppingCart } from 'react-icons/fi';
import Searchbar from './Searchbar';
import { FaRegUserCircle } from 'react-icons/fa';
import { NextFont } from 'next/dist/compiled/@next/font';

export default function Header({ hk }: { hk: NextFont }) {
    return (
        <header className="flex bg-secoundarylight dark:bg-secoundarydark w-full h-22.5 items-center justify-around">
            <div className="flex items-center gap-4">
                <div className="flex w-12 h-12 bg-thirdlight dark:bg-thirddark rounded-lg shadow-sm"></div>
                <h1 className="text-2xl font-semibold">LOGO</h1>
            </div>
            <div className='flex gap-16 items-center'>
                <Searchbar hk={hk} />
                <div className='flex gap-8'>
                    <div className='text-xs flex items-center gap-2'>
                        <FaRegUserCircle size={30} />
                        <div className='flex flex-col items-start'>
                            <p><span className='font-semibold cursor-pointer hover:underline'>ENTRE</span> ou</p>
                            <span className='font-semibold cursor-pointer hover:underline'>CADASTRE-SE</span>
                        </div>
                    </div>
                    <div className='flex items-center'><FiShoppingCart size={24} /></div>
                </div>
            </div>
        </header>
    )
}