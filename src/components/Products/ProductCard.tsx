import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    imageSrc: string;
    title: string;
    price: number;
    discount: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageSrc,
    title,
    price,
    discount,
}) => {
    return (
        <div className="relative w-72 p-5 rounded-lg hover:border-selected hover:border shadow-md bg-thirdlight dark:bg-thirddark hover:scale-105 transition-transform duration-75">
            <div className="absolute top-0 right-0 bg-selected text-white px-2 py-1 rounded-tr-md rounded-bl-md">
                <p className='text-center'><span className='font-bold'>{discount}%</span><br></br>OFF</p>
            </div>
            <Image src={imageSrc} alt={title} width={208} height={208} className="w-52 h-52 object-contain mb-4 mx-auto" />
            <h2 className="text-lg max-w-full font-semibold mb-2 cursor-pointer hover:underline hover:brightness-90 truncate">{title}</h2>
            <div className="flex mb-2 justify-center w-fit items-center text-lg gap-4">
                <span className="mr-2">R${price * (1 / 100 * parseInt(discount))}</span>
                <span className="line-through text-gray-500">R${price}</span>
            </div>
            <hr className='h-0.5 bg-primarylight dark:bg-primarydark text-transparent'></hr>
            <p className="text-green-600 mt-2">Economize - R${price - (price * (1 / 100 * parseInt(discount)))}</p>
        </div>
    );
};

export default ProductCard;