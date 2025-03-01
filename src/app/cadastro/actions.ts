"use server";

import { cookies } from "next/headers";

// Definir uma interface para o estado

export default async function cadastro(
  prevState: {
    message?: string;
    redirect?: boolean;
  },
  formData: FormData
) {
  const rawFormData: {
    email: FormDataEntryValue | null;
    senha: FormDataEntryValue | null;
  } = {
    email: formData.get("email"),
    senha: formData.get("senha"),
  };

  if (!rawFormData.email) {
    return { message: "Email obrigatório" };
  }
  if (!rawFormData.senha) {
    return { message: "Senha obrigatório" };
  }

  const url = process.env.API_URL;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
    credentials: "include" as RequestCredentials,
  };

  try {
    const response = await fetch(`${url}/clientes/login`, options);
    if (!response.ok) {
      return { message: "Usuário e(ou) senha incorreta." };
    }
    const data = await response.json();

    const cookieStore = await cookies();

    cookieStore.set({
      name: "access_token",
      value: data.access_token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
    });

    return { message: "Logado com sucesso" };
  } catch (err) {
    console.log(err);
    return { message: "Erro interno contate um administrador" };
  }
}
