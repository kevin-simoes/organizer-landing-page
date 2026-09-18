import { useState, useEffect } from "react";
import organizerIcon from "../assets/organizer_icon.png";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export default function RegistrarFormulario() {
  const [registros, setRegistros] = useState(() => {
    // Carregar registros do localStorage
    const salvarRegistro = localStorage.getItem("registrations");
    // Se houver registros salvos, parse para JSON, se não volta um array vazio
    return salvarRegistro ? JSON.parse(salvarRegistro) : [];
  });
  // Salvar registros no localStorage sempre que houver uma mudança no estado de registros
  useEffect(() => {
    localStorage.setItem("registrations", JSON.stringify(registros));
  }, [registros]);

  const [formulario, setFormulario] = useState({
    username: "",
    email: "",
    profile: "",
    discovery: "",
    excited: "",
  });
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);

  function handleChange(e) {
    let nome = e.target.name;
    let valor = e.target.value;

    let novoFormulario = formulario;
    novoFormulario[nome] = valor;

    setFormulario({ ...novoFormulario });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // cria o novo registro e coloca a data que foi criado
    let dataDeAgora = new Date();
    let novoRegistro = {
      username: formulario.username,
      email: formulario.email,
      profile: formulario.profile,
      discovery: formulario.discovery,
      excited: formulario.excited,
      createdAt: dataDeAgora.toISOString(),
    };

    // adiciona o novo registro na lista
    setRegistros([...registros, novoRegistro]);
    
    setFormulario({
      username: "",
      email: "",
      profile: "",
      discovery: "",
      excited: "",
    });

    setMostrarNotificacao(true);

    setTimeout(function () {
      setMostrarNotificacao(false);
    }, 3000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(47deg,_rgba(35,47,75,1)_0%,_rgb(38,103,255)_100%)]">
      <div
        role="status"
        aria-live="polite"
        className={`fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 ${
          mostrarNotificacao
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
          <Check className="h-5 w-5 text-(--primary-color)" />
        </span>
        <div className="text-left">
          <h3 className="font-semibold text-gray-900 text-base">Registro salvo!</h3>
          <p className="text-sm text-gray-500">Seus dados foram guardados com sucesso.</p>
        </div>
      </div>

      <header className="flex items-center justify-between px-6 py-4">
        <span className="flex items-center gap-2">
          <img src={organizerIcon} alt="Organizer Icon" className="h-8 w-8" />
          <h3 className="text-lg font-semibold text-white">Organizer</h3>
        </span>
        <span>
        <Link to="/" className="text-white">Home</Link>
        </span>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center bg-(--background-gradient)] p-4 md:p-8">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[40%] flex-col gap-4 bg-white p-8 rounded-2xl text-center shadow-[0_10px_25px_rgba(0,0,0,0.1)] max-lg:max-w-[60%] max-sm:max-w-full max-sm:p-6"
        >
          <h3 className="text-xl font-bold">
            Seja bem vindo ao
            <span className="text-(--primary-color)"> Organizer</span>
          </h3>

          <p>Faça seu registro para saber mais informações sobre o app.</p>

          <label htmlFor="username" className="block text-left font-semibold">
            Nome e Sobrenome:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formulario.username}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-(--card-border-color1) bg-white px-4 py-3 outline-none transition-colors focus:border-(--primary-color)"
          />

          <label htmlFor="email" className="block text-left font-semibold">
            Seu melhor email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-(--card-border-color1) bg-white px-4 py-3 outline-none transition-colors focus:border-(--primary-color)"
          />

          <label htmlFor="profile" className="block text-left font-semibold">
            Você é:
          </label>
          <select
            id="profile"
            name="profile"
            value={formulario.profile}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-(--card-border-color1) bg-white px-4 py-3 outline-none transition-colors focus:border-(--primary-color)"
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="student">Estudante</option>
            <option value="teacher">Professor</option>
            <option value="worker">Profissional</option>
            <option value="general">Usuário Geral</option>
          </select>

          <label htmlFor="discovery" className="block text-left font-semibold">
            Como conheceu a Organizer?
          </label>
          <input
            type="text"
            id="discovery"
            name="discovery"
            placeholder="Instagram, amigos, faculdade..."
            value={formulario.discovery}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-(--card-border-color1) bg-white px-4 py-3 outline-none transition-colors focus:border-(--primary-color)"
          />

          <label htmlFor="excited" className="block text-left font-semibold">
            O que mais te empolga no aplicativo?
          </label>
          <textarea
            id="excited"
            name="excited"
            rows={4}
            placeholder="Organização, produtividade, IA..."
            value={formulario.excited}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-(--card-border-color1) bg-white px-4 py-3 outline-none transition-colors focus:border-(--primary-color)"
          />

          <button
            type="submit"
            className="rounded-lg bg-(--primary-color) p-4 text-white transition-opacity hover:opacity-90"
          >
            Enviar
          </button>
        </form>
      </div>

      <footer className="p-4 text-center text-sm">
        @2026 IRIS. Todos os direitos reservados.
      </footer>
    </div>
  );
}