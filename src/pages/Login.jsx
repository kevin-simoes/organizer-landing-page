import organizerIcon from "../assets/organizer_icon.png";
import { Link,  } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // Definindo a função de login do hook personalizado (useAuth)
  const { login } = useAuth();

  // Função chamada quando o formulário de login for enviado
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // Faz a requisição para a API de login
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // Converte a resposta para JSON
      const data = await response.json();

      if (response.ok) {
        setMessage("Login bem-sucedido!");
        // Chama a função de login do hook personalizado, passando o token recebido da API
        login(data.token);
      } else {
        setMessage(data.message);
      }
      
    } catch (error) {
      console.error("Erro na requisição:", error);
      setMessage("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(47deg,_rgba(35,47,75,1)_0%,_rgb(38,103,255)_100%)]">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <span className="flex items-center gap-2">
          <img
            src={organizerIcon}
            alt="Organizer Icon"
            className="h-8 w-8"
          />

          <h3 className="text-lg font-semibold text-white">
            Organizer
          </h3>
        </span>

        <span>
          <Link to="/" className="text-white">Home</Link>
        </span>
      </header>

      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col items-center justify-center bg-(--background-gradient) p-4 md:p-8">

        <form
          onSubmit={handleLogin}
          className="flex w-full max-w-[40%] flex-col gap-4 rounded-2xl bg-white p-8 text-center shadow-[0_10px_25px_rgba(0,0,0,0.1)] max-lg:max-w-[60%] max-sm:max-w-full max-sm:p-6"
        >
          <h3 className="text-xl font-bold">
            Bem vindo de volta ao 
            <span className="text-(--primary-color)"> Organizer
            </span>
          </h3>

          <p>
            Faça login para continuar organizando seu dia a dia.
          </p>

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-left font-semibold"
          >
            Seu email:
          </label>

          <input
            type="text"
            id="email"
            name="email"
            placeholder="voce@exemplo.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-(--card-border-color1) bg-white px-4 py-3 outline-none transition-colors focus:border-(--primary-color)"
          />

          {/* Senha */}
          <label
            htmlFor="password"
            className="block text-left font-semibold"
          >
            Sua senha:
          </label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-(--card-border-color1) bg-white px-4 py-3 outline-none transition-colors focus:border-(--primary-color)"
          />

          {/* Botão */}
          <button
            type="submit"
            className="rounded-lg bg-(--primary-color) p-4 text-white transition-opacity hover:opacity-90"
          >
            Entrar
          </button>
        </form>

        {/* Mensagem de sucesso ou erro */}
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("sucesso")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-white">
        @2026 IRIS. Todos os direitos reservados.
      </footer>
    </div>
  );
}