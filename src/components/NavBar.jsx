import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/organizer_icon.png";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed w-full flex items-center justify-between p-4">
      <Link to="/" className="flex items-center gap-2">
        <img src={Icon} alt="Organizer" className="h-8 w-8" />

        <span className="font-semibold">Organizer</span>
      </Link>

      <nav className="hidden lg:flex items-center gap-4">
      <nav aria-label="Navegação principal" className='flex gap-4 flex-wrap'>
                <a href="#about">A Solução</a>
                <a href="#target-audience">Público-Alvo</a>
                <a href="#benefits">Benefícios</a>
                <a href="#gallery">Galeria</a>
                <a href="#tutorial">Como funciona</a>
                <a href="#team">Nossa Equipe</a>
                <a href="#contact">Contato</a>
            </nav>
        <Link to="/formulario">Formulário</Link>

        <Link to="/login">Login</Link>
      </nav>

      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="text-2xl lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu/>
      </button>

      {menuAberto && (
        <nav className="absolute right-4 top-16 z-50 flex w-48 flex-col gap-4 rounded-lg bg-white p-4 shadow-lg lg:hidden">
                  <nav aria-label="Navegação principal" className='flex gap-10 flex-wrap'>
                <a href="#about">A Solução</a>
                <a href="#target-audience">Público-Alvo</a>
                <a href="#benefits">Benefícios</a>
                <a href="#gallery">Galeria</a>
                <a href="#tutorial">Como funciona</a>
                <a href="#team">Nossa Equipe</a>
                <a href="#contact">Contato</a>
            </nav>
          <Link to="/formulario" onClick={() => setMenuAberto(false)}>
            Formulário
          </Link>

          <Link to="/login" onClick={() => setMenuAberto(false)}>
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
