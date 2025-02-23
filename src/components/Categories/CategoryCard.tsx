import Image from 'next/image';
interface CategoryCardProps {
    imageSrc: string;
    title: string;
}

export default function CategoryCard({ imageSrc, title }: CategoryCardProps) {
    return (
        <div className='flex flex-col text-center gap-2'>
            <div className='flex rounded-full bg-thirdlight dark:bg-thirddark p-5 w-34 h-34 hover:border-selected hover:border shadow-md hover:scale-105 transition-transform duration-75 cursor-pointer'>
                <Image src={imageSrc} alt={title} width={52} height={98} className="w-13 h-25 object-contain mb-4 mx-auto" />
            </div>
            <span>{title}</span>
        </div>
    )
}
