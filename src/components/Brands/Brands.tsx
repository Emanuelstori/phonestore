import Image from 'next/image';

export default function Brands() {
    return (<div className="flex w-full h-fit justify-between mt-8">
        <div className="bg-[#313131] h-fit w-fit flex items-center justify-center rounded-xl overflow-hidden cursor-pointer hover:scale-105 shadow-xl">
            <div className="relative w-97 h-52 overflow-hidden">
                <div className="absolute w-52 h-52 bg-[#404040] rounded-full top-[-50px] right-[-50px]"></div>
                <div className="absolute w-53.5 h-53.5 bg-[#404040] rounded-full top-[-50px] right-[-50px]"></div>
                <div className="absolute w-53 h-53 border-4 border-[#313131] rounded-full top-[-50px] right-[-50px]"></div>
                <div className="absolute left-5 top-5 bg-[#404040] p-2 text-[#fffff] rounded-lg px-4">
                    <span>IPHONE</span>
                </div>
                <div className="absolute left-5 top-23 text-[#222222] rounded-lg">
                    <Image src={'apple.svg'} width={62} height={62} alt={'logo iphone'} />
                </div>
                <div className="absolute right-1 top-0 text-[#222222] rounded-lg">
                    <Image className='w-40' src={'iphoneimg.svg'} width={104} height={500} alt={'iphone image'} />
                </div>
            </div>
        </div>
        <div className="bg-[#fff3cc] h-fit w-fit flex items-center justify-center rounded-xl overflow-hidden cursor-pointer hover:scale-105 shadow-xl">
            <div className="relative w-97 h-52 overflow-hidden">
                <div className="absolute w-52 h-52 bg-[#f6de8d] rounded-full top-[-50px] right-[-50px]"></div>
                <div className="absolute w-53.5 h-53.5 bg-[#f6de8d] rounded-full top-[-50px] right-[-50px]"></div>
                <div className="absolute w-53 h-53 border-4 border-[#fff3cc] rounded-full top-[-50px] right-[-50px]"></div>
                <div className="absolute left-5 top-5 bg-[#f6de8d] p-2 text-[#222222] rounded-lg px-4">
                    <span>REALME</span>
                </div>
                <div className="absolute left-5 top-23 text-[#222222] rounded-lg">
                    <Image src={'realme.svg'} width={114} height={34} alt={'logo realme'} />
                </div>
                <div className="absolute right-1 top-0 text-[#222222] rounded-lg">
                    <Image className='w-58' src={'realmeimg.svg'} width={158} height={185} alt={'realme image'} />
                </div>
            </div>
        </div>
        <div className="bg-[#ffecdf] h-fit w-fit flex items-center justify-center rounded-xl overflow-hidden cursor-pointer hover:scale-105 shadow-xl">
            <div className="relative w-97 h-52 overflow-hidden">
                <div className="absolute w-52 h-52 bg-[#fed0af] rounded-full top-[-50px] right-[-50px]"></div>
                <div className="absolute w-53.5 h-53.5 bg-[#fed0af] rounded-full top-[-50px] right-[-50px]"></div>
                <div className="absolute w-53 h-53 border-4 border-[ffecdf] rounded-full top-[-50px] right-[-50px]"></div>
                <div className="absolute left-5 top-5 bg-[#ffd1b0] p-2 text-[#222222] rounded-lg px-4">
                    <span>XIAOMI</span>
                </div>
                <div className="absolute left-5 top-20 text-[#222222] rounded-lg">
                    <Image src={'xiaomi.svg'} width={67} height={67} alt={'logo xiaomi'} />
                </div>
                <div className="absolute right-1 top-0 text-[#222222] rounded-lg">
                    <Image className='w-58' src={'xiaomiimg.svg'} width={152} height={183} alt={'Xiaomi image'} />
                </div>
            </div>
        </div>
    </div>)
}