import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/organizer_icon.png";
import { Menu, Sun, Moon, User } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";
import UserMenu from "../components/UserMenu";
import SectionsMenu from "../components/SectionsMenu";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion.create(Link);

const NavBar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();

  const itemClass =
    "rounded-lg p-2 transition-colors hover:bg-(--background-color-dark)/10 w-full dark:hover:bg-(--background-color)/10";

  return (
    <header
      className="fixed z-11 w-full flex items-center justify-between px-20 py-2
      bg-white/20 dark:bg-black/20
      backdrop-blur-md
      border-b border-black/5 dark:border-white/5
      text-black dark:text-white"
    >
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
        <SectionsMenu />
        <Link
          to="/formulario"
          className="rounded-lg py-1 px-1 flex items-center transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10"
        >
          Formulário
        </Link>
      </nav>

      <div className="hidden lg:flex items-center gap-2">
        {!isAuthenticated() && (
          <MotionLink
            to="/login"
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative flex items-center overflow-hidden bg-white text-black w-fit py-1.5 px-2 rounded-full gap-2"
          >
            <motion.span
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              style={{ originX: 1 }}
              className="absolute inset-0 bg-(--primary-color)"
            />
            <motion.span
              variants={{
                rest: { color: "#000000" },
                hover: { color: "#ffffff" },
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex items-center gap-2"
            >
              <User />
              Entrar
            </motion.span>
          </MotionLink>
        )}
        {isAuthenticated() && <UserMenu />}
      </div>

      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="text-2xl lg:hidden rounded-lg p-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10"
        aria-label="Abrir menu"
      >
        <Menu />
      </button>

      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-4 top-16 z-50 flex w-fit flex-col gap-2 rounded-xl border border-(--card-border-color1) bg-white p-2 shadow-lg lg:hidden dark:bg-(--background-color-dark) dark:border-(--card-border-color1-dark)"
          >
            {isAuthenticated() && (
              <span className="flex gap-2 items-center">
                <UserMenu />
                <p>Adm do Organizer</p>
              </span>
            )}

            <nav aria-label="Navegação principal" className="flex gap-2 flex-col">
              <a href="#about" className={itemClass} onClick={() => setMenuAberto(false)}>A Solução</a>
              <a href="#target-audience" className={itemClass} onClick={() => setMenuAberto(false)}>Público-Alvo</a>
              <a href="#benefits" className={itemClass} onClick={() => setMenuAberto(false)}>Benefícios</a>
              <a href="#gallery" className={itemClass} onClick={() => setMenuAberto(false)}>Galeria</a>
              <a href="#tutorial" className={itemClass} onClick={() => setMenuAberto(false)}>Como funciona</a>
              <a href="#team" className={itemClass} onClick={() => setMenuAberto(false)}>Nossa Equipe</a>
              <a href="#contact" className={itemClass} onClick={() => setMenuAberto(false)}>Contato</a>
            </nav>

            <Link to="/formulario" className={itemClass} onClick={() => setMenuAberto(false)}>
              Formulário
            </Link>
            {!isAuthenticated() && (
              <Link to="/login" className={itemClass} onClick={() => setMenuAberto(false)}>
                Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;