export default function BrandCard() {
    return (<div className="bg-[#313131] h-fit w-fit flex items-center justify-center rounded-xl overflow-hidden">
        <div className="relative w-97 h-52 overflow-hidden">
            <div className="absolute w-52 h-52 bg-[#404040] rounded-full top-[-50px] right-[-50px]"></div>
            <div className="absolute w-53.5 h-53.5 bg-[#404040] rounded-full top-[-50px] right-[-50px]"></div>
            <div className="absolute w-53 h-53 border-4 border-[#313131] rounded-full top-[-50px] right-[-50px]"></div>
        </div>
    </div>)
}