import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/organizer_icon.png";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const NavBar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full flex items-center justify-between px-6 py-4 text-black-800 dark:text-olive-300">
      <div className="flex gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={Icon} alt="Organizer" className="h-8 w-8" />
          <h3 className="font-semibold">Organizer</h3>
        </Link>
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 transition-colors cursor-pointer hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10"
          aria-label="Alternar modo escuro"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>

      <nav className="hidden lg:flex items-center gap-2">
        <nav aria-label="Navegação principal" className="flex gap-3 flex-wrap">
          <a className="rounded-lg py-2 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10" href="#about">A Solução</a>
          <a className="rounded-lg py-2 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10" href="#target-audience">Público-Alvo</a>
          <a className="rounded-lg py-2 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10" href="#benefits">Benefícios</a>
          <a className="rounded-lg py-2 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10" href="#gallery">Galeria</a>
          <a className="rounded-lg py-2 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10" href="#tutorial">Como funciona</a>
          <a className="rounded-lg py-2 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10" href="#team">Nossa Equipe</a>
          <a className="rounded-lg py-2 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10" href="#contact">Contato</a>
        <Link to="/formulario" className="rounded-lg py-2 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10">Formulário</Link>

        <Link to="/login" className="rounded-lg py-2 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10">Login</Link>
      </nav>
        </nav>

      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="text-2xl lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu />
      </button>

      {menuAberto && (
        <nav className="absolute right-4 top-16 z-50 flex w-48 flex-col gap-4 rounded-lg bg-white p-4 shadow-lg lg:hidden">
          <nav
            aria-label="Navegação principal"
            className="flex gap-10 flex-wrap"
          >
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
