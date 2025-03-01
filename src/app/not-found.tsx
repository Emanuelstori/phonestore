'use client'

import Link from 'next/link'
import { Host_Grotesk } from 'next/font/google'

const hk = Host_Grotesk({
    weight: '400',
    subsets: ['latin'],
})

export default function NotFound() {
    return (
        <div className="flex-grow flex items-center justify-center my-16">
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="my-auto flex flex-col items-center gap-6 bg-white dark:bg-secoundarydark p-8 rounded-lg shadow-lg w-full max-w-md">
                    {/* Número 404 em destaque */}
                    <h1 className={`${hk.className} text-7xl font-bold text-selected`}>404</h1>
                    <h2 className="text-2xl font-semibold text-center">Página não encontrada</h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-2">
                        Desculpe, a página que você está procurando não existe ou foi movida.
                    </p>
                    <div className="flex flex-col gap-3 w-full mt-4">
                        <Link
                            href="/"
                            className="flex items-center justify-center py-3 px-4 bg-selected text-white rounded-md cursor-pointer hover:brightness-95 transition-all w-full"
                        >
                            VOLTAR À PÁGINA INICIAL
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}