'use client'

import Image from "next/image";
import { useNotification } from "@/context/NotificationContext";
import login from "./actions";
import { useActionState } from "react";
import { useEffect, useRef } from "react";
import { FloatingLabelInput } from "@/components/Inputs/FloatingInputs";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialState = {
    message: '',
    redirect: false
}

export default function LoginPage() {
    const router = useRouter();
    const [state, formAction, pending] = useActionState(login, initialState)
    const { addNotification } = useNotification();
    const previousMessageRef = useRef('');

    useEffect(() => {
        // Só exibe a notificação se a mensagem for diferente da anterior
        if (state.message && state.message !== previousMessageRef.current) {
            previousMessageRef.current = state.message;

            const [type, message] = state.message.split(':', 2);

            if (type === 'success' || type === 'error' || type === 'info') {
                addNotification(message, type as "success" | "error" | "info");
            } else {
                // Se não tiver o formato esperado, trate como mensagem de erro
                addNotification(state.message, 'error');
            }
        }

        // Verifica se precisa redirecionar
        if (state.redirect) {
            router.push('/');
        }
    }, [state, addNotification, router]);

    return (
        <div className="flex-grow flex items-center justify-center my-16">
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="my-auto flex flex-col gap-2 bg-white dark:bg-secoundarydark p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-8 text-center">Acesse sua conta</h2>
                    <form action={formAction}>
                        <div className="mb-4">
                            <FloatingLabelInput
                                id="email"
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <FloatingLabelInput
                                id="senha"
                                name="senha"
                                type="password"
                                placeholder="Senha"
                                required
                            />
                        </div>
                        <button disabled={pending} type="submit" className="w-full py-3 px-4 bg-selected text-white rounded-md cursor-pointer hover:brightness-95">
                            {pending ? "Entrando..." : "ENTRAR"}
                        </button>
                    </form>
                    <div className="flex justify-end mt-2">
                        <Link href="#" className="text-sm font-medium hover:underline cursor-pointer">Esqueceu a senha?</Link>
                    </div>
                    <div className="flex items-center my-2">
                        <hr className="flex-grow border-t border-gray-700 dark:border-gray-400" />
                        <span className="mx-2 text-gray-700 dark:text-gray-400">OU</span>
                        <hr className="flex-grow border-t border-gray-700 dark:border-gray-400" />
                    </div>
                    <button className="flex items-center justify-center w-full py-2 px-4 bg-thirdlight dark:bg-thirddark border border-red-400 dark:border-red-400 rounded-md cursor-pointer hover:brightness-95">
                        <Image width={20} height={20} src="/google-logo.svg" alt="Google Logo" className="w-8 h-8 mr-2" />
                        <span className="font-semibold">Login com Google</span>
                    </button>
                    <div className="flex justify-center w-full items-center my-2">
                        <span className="mx-2 text-sm">Ainda não tem conta?</span>
                        <Link href="/cadastro" className="font-semibold underline cursor-pointer">CADASTRAR-SE</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}