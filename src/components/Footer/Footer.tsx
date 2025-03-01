import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-selected dark:bg-secoundarydark text-gray-200 overflow-hidden bottom-0 w-full h-fit">
            <div className='relative'>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-selected opacity-70 dark:opacity-100 dark:bg-thirddark transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute top-0 right-0 w-45.5 h-45.5 rounded-full bg-selected opacity-70 dark:opacity-100 dark:bg-thirddark transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute top-0 right-0 w-45 h-45 rounded-full border-4 border-selected dark:border-secoundarydark transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="relative z-10 p-4">
                    <div className="flex justify-center mt-4">
                        <Link href="#" className="mx-2 hover:underline">Política de Privacidade</Link>
                        <Link href="#" className="mx-2 hover:underline">Termos de Serviço</Link>
                        <Link href="#" className="mx-2 hover:underline">Contato</Link>
                    </div>
                    <p className="">© 2025 ShopProject. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;