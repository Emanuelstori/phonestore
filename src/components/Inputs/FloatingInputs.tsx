"use client"
import { useState, useRef } from "react";

interface FloatingLabelInputProps {
    id: string;
    name: string;
    type?: string;
    placeholder: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
    className?: string;
}

export function FloatingLabelInput({
    id,
    name,
    type = "text",
    placeholder,
    required = false,
    value,
    onChange,
    maxLength,
    className = "",
}: FloatingLabelInputProps) {
    const [internalValue, setInternalValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    // Determine se estamos usando um componente controlado ou não controlado
    const isControlled = value !== undefined;
    const hasValue = isControlled ? value !== "" : internalValue !== "";

    // Handler para quando não há onChange externo
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        } else {
            setInternalValue(e.target.value);
        }
    };

    return (
        <div className="relative w-full">
            <input
                id={id}
                name={name}
                type={type}
                // Use value somente quando controlado
                {...(isControlled ? { value } : { defaultValue: "" })}
                onChange={handleChange}
                required={required}
                maxLength={maxLength}
                className={`mt-1 p-3 pt-5 w-full border rounded-md bg-thirdlight dark:bg-thirddark text-gray-900 dark:text-gray-100 transition-all duration-200 ${className}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <label
                htmlFor={id}
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${isFocused || hasValue
                    ? "text-xs text-selected top-2"
                    : "text-sm text-gray-500 dark:text-gray-400 top-1/2 -translate-y-1/2"
                    }`}
            >
                {placeholder}
            </label>
        </div>
    );
}

// Versão para Select
export function FloatingLabelSelect({
    id,
    name,
    placeholder,
    required = false,
    children,
    className = "",
}: {
    id: string;
    name: string;
    placeholder: string;
    required?: boolean;
    children: React.ReactNode;
    className?: string;
}) {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="relative w-full">
            <select
                id={id}
                name={name}
                required={required}
                className={`mt-1 p-3 pt-5 w-full border rounded-md bg-thirdlight dark:bg-thirddark text-gray-900 dark:text-gray-100 transition-all duration-200 ${className}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                onChange={handleChange}
            >
                <option value="" disabled></option>
                {children}
            </select>
            <label
                htmlFor={id}
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${isFocused || value !== ""
                    ? "text-xs text-selected top-2"
                    : "text-sm text-gray-500 dark:text-gray-400 top-1/2 -translate-y-1/2"
                    }`}
            >
                {placeholder}
            </label>
        </div>
    );
}

// Adicione essa função ao seu arquivo FloatingInputs.tsx
export function FloatingLabelDateInput({
    id,
    name,
    placeholder,
    required = false,
    value,
    onChange,
    className = "",
}: {
    id: string;
    name: string;
    placeholder: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}) {
    const [internalValue, setInternalValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Determine se estamos usando um componente controlado ou não controlado
    const isControlled = value !== undefined;
    const hasValue = isControlled ? value !== "" : internalValue !== "";

    // Handler para quando não há onChange externo
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        } else {
            setInternalValue(e.target.value);
        }
    };

    // Função para abrir o seletor de data quando qualquer parte do componente é clicada
    const handleContainerClick = () => {
        if (inputRef.current) {
            // Foca no input
            inputRef.current.focus();
            
            // Abre o seletor de data diretamente
            inputRef.current.showPicker();
        }
    };

    return (
        <div className="relative w-full" onClick={handleContainerClick}>
            <input
                ref={inputRef}
                id={id}
                name={name}
                type="date"
                {...(isControlled ? { value } : { defaultValue: "" })}
                onChange={handleChange}
                required={required}
                placeholder=" " // Um espaço em branco como placeholder para acionar os seletores CSS
                className={`mt-1 p-3 pt-5 w-full h-12 border rounded-md bg-thirdlight dark:bg-thirddark text-gray-900 dark:text-gray-100 transition-all duration-200 ${className}`}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                    // Para campos de data, só removemos o foco se não houver valor
                    if (!e.target.value) {
                        setIsFocused(false);
                    }
                }}
            />
            <label
                htmlFor={id}
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${isFocused || hasValue
                    ? "text-xs text-selected top-2"
                    : "text-sm text-gray-500 dark:text-gray-400 top-1/2 -translate-y-1/2"
                    }`}
            >
                {placeholder}
            </label>
        </div>
    );
}