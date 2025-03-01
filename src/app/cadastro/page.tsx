"use client"
import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import cadastro from "./actions";
import { useNotification } from "@/context/NotificationContext";
import { FloatingLabelInput, FloatingLabelSelect, FloatingLabelDateInput } from "@/components/Inputs/FloatingInputs"
import Link from "next/link";

const initialState = {
    message: '',
}

// Adicione a definição do FloatingLabelInput e FloatingLabelSelect aqui

export default function CadastroPage() {
    const [state, formAction, pending] = useActionState(cadastro, initialState)
    const { addNotification } = useNotification();
    const previousMessageRef = useRef('');

    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');

    // Função para formatar CPF
    const formatCPF = (value: string) => {
        // Remove todos os caracteres não numéricos
        const numbers = value.replace(/\D/g, '');

        // Aplica a formatação do CPF: xxx.xxx.xxx-xx
        if (numbers.length <= 3) {
            return numbers;
        } else if (numbers.length <= 6) {
            return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
        } else if (numbers.length <= 9) {
            return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
        } else {
            return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
        }
    };

    // Função para formatar celular
    const formatCelular = (value: string) => {
        // Remove todos os caracteres não numéricos
        const numbers = value.replace(/\D/g, '');

        // Aplica a formatação do celular: (xx) x xxxx-xxxx
        if (numbers.length <= 2) {
            return numbers.length ? `(${numbers}` : '';
        } else if (numbers.length <= 3) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        } else if (numbers.length <= 7) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3)}`;
        } else {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
        }
    };

    // Manipuladores de eventos para os campos
    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedCPF = formatCPF(e.target.value);
        setCpf(formattedCPF);

        // Atualiza o valor do campo real que será enviado no formulário
        const hiddenInput = document.getElementById('cpf-real') as HTMLInputElement;
        if (hiddenInput) {
            hiddenInput.value = formattedCPF.replace(/\D/g, ''); // valor sem formatação
        }
    };

    const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedCelular = formatCelular(e.target.value);
        setCelular(formattedCelular);

        // Atualiza o valor do campo real que será enviado no formulário
        const hiddenInput = document.getElementById('celular-real') as HTMLInputElement;
        if (hiddenInput) {
            hiddenInput.value = formattedCelular.replace(/\D/g, ''); // valor sem formatação
        }
    };

    useEffect(() => {
        if (state.message && state.message !== previousMessageRef.current) {
            previousMessageRef.current = state.message;

            const [type, message] = state.message.split(':', 2);

            if (type === 'success' || type === 'error' || type === 'info') {
                addNotification(message, type as "success" | "error" | "info");
            } else {
                addNotification(state.message, 'error');
            }
        }
    }, [state.message, addNotification]);

    // Para o input de data
    const [dateValue, setDateValue] = useState('');

    return (<div className="flex-grow flex items-center justify-center my-16">
        <div className="flex flex-col items-center justify-center flex-1">
            <div className="my-auto flex flex-col gap-2 bg-white dark:bg-secoundarydark p-8 rounded-lg shadow-lg w-200">
                <h2 className="text-2xl font-semibold mb-8 text-center">Criar conta</h2>
                <button className="flex items-center justify-center w-full py-2 px-4 bg-thirdlight dark:bg-thirddark border border-red-400 dark:border-red-400 rounded-md cursor-pointer hover:brightness-95">
                    <Image width={20} height={20} src="/google-logo.svg" alt="Google Logo" className="w-8 h-8 mr-2" />
                    <span className="font-semibold">Login com Google</span>
                </button>
                <div className="flex items-center my-2">
                    <hr className="flex-grow border-t border-gray-700 dark:border-gray-400" />
                    <span className="mx-2 text-gray-700 dark:text-gray-400">OU</span>
                    <hr className="flex-grow border-t border-gray-700 dark:border-gray-400" />
                </div>
                <form action={formAction}>
                    <div className="flex mb-4 gap-4">
                        <div className="w-1/2">
                            <FloatingLabelInput
                                id="nome"
                                name="nome"
                                placeholder="Nome Completo"
                                required
                            />
                        </div>

                        <div className="w-1/2">
                            <FloatingLabelInput
                                id="cpf"
                                name="cpf-visible"
                                value={cpf}
                                onChange={handleCpfChange}
                                placeholder="CPF"
                                maxLength={14}
                                required
                            />
                            <input type="hidden" id="cpf-real" name="cpf" value={cpf.replace(/\D/g, '')} />
                        </div>
                    </div>

                    <div className="flex mb-4 gap-4">
                        <div className="w-1/2">
                            <FloatingLabelSelect
                                id="genero"
                                name="genero"
                                placeholder="Gênero"
                                required
                            >
                                <option value="Não especificado">Não especificado</option>
                                <option value="Homem">Homem</option>
                                <option value="Mulher">Mulher</option>
                                <option value="Outro">Outro</option>
                            </FloatingLabelSelect>
                        </div>

                        <div className="w-1/2">
                            <FloatingLabelDateInput
                                id="nascimento"
                                name="nascimento"
                                placeholder="Data de nascimento"
                                value={dateValue}
                                onChange={(e) => setDateValue(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex mb-4 gap-4">
                        <div className="w-1/2">
                            <FloatingLabelInput
                                id="celular-visible"
                                name="celular-visible"
                                value={celular}
                                onChange={handleCelularChange}
                                placeholder="Telefone Celular"
                                maxLength={17}
                                required
                            />
                            <input type="hidden" id="celular-real" name="celular" value={celular.replace(/\D/g, '')} />
                        </div>

                        <div className="w-1/2">
                            <FloatingLabelInput
                                id="email"
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex mb-4 gap-4">
                        <div className="w-1/2">
                            <FloatingLabelInput
                                id="senha1"
                                name="senha1"
                                type="password"
                                placeholder="Crie sua senha"
                                required
                            />
                        </div>

                        <div className="w-1/2">
                            <FloatingLabelInput
                                id="senha"
                                name="senha"
                                type="password"
                                placeholder="Confirme sua senha"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-0.5 mt-2">
                        <span className="text-xs font-normal">(*) Campos obrigatórios</span><br />
                        <span className="text-xs font-normal">(**) As opções &quot;homem&quot; e &quot;mulher&quot; abrangem cisgêneros e transgêneros. A opção &quot;outros&quot; inclui gênero fluido, não-binário, queer, intersexo e outras identidades de gênero. Utilize a opção &quot;não especificar&quot; caso não queira preencher esse campo ou não encontre a opção que mais se identifica.</span>
                    </div>

                    {/* Seção de checkboxes aprimorada */}
                    <div className="flex flex-col gap-3 mt-5">
                        {/* Primeiro checkbox - Ofertas */}
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center h-6 w-6">
                                <input
                                    type="checkbox"
                                    name="ofertas"
                                    id="ofertas"
                                    value="1"
                                    defaultChecked={true}
                                    className="peer w-5 h-5 opacity-0 absolute cursor-pointer"
                                />
                                <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white dark:bg-thirddark transition-all duration-200 
                                            peer-checked:bg-selected peer-checked:border-selected flex items-center justify-center">
                                </div>
                                <svg
                                    className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span className="text-sm transition-colors">
                                Quero receber ofertas e novidades por e-mail, SMS, WhatsApp!
                            </span>
                        </label>

                        {/* Segundo checkbox - Termos e políticas - Obrigatório */}
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center h-6 w-6">
                                <input
                                    type="checkbox"
                                    name="termos"
                                    id="termos"
                                    value="1"
                                    defaultChecked={true}
                                    required
                                    className="peer w-5 h-5 opacity-0 absolute cursor-pointer"
                                />
                                <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white dark:bg-thirddark transition-all duration-200 
                                            peer-checked:bg-selected peer-checked:border-selected flex items-center justify-center">
                                </div>
                                <svg
                                    className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div className="text-sm transition-colors">
                                Li e estou de acordo com as
                                <Link href="/politicas" className="text-selected hover:underline ml-1">políticas da empresa</Link> e
                                <Link href="/privacidade" className="text-selected hover:underline ml-1">políticas de privacidade</Link>.*
                            </div>
                        </label>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            disabled={pending}
                            type="submit"
                            className="mt-6 py-3 px-4 w-96 bg-selected text-white rounded-md cursor-pointer hover:brightness-95 transition-all"
                        >
                            CONTINUAR
                        </button>
                    </div>
                </form>
                <div className="flex justify-center w-full items-center my-2">
                    <span className="mx-2 text-sm">Já possúi cadastro?</span>
                    <Link href="/login" className="font-semibold underline cursor-pointer">ENTRAR</Link>
                </div>
            </div>
        </div>
    </div>)
}