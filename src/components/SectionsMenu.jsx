import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Lightbulb,
  Star,
  Image,
  Play,
  UsersRound,
  Mail,
  User2
} from "lucide-react";

const colunas = [
  {
    titulo: "Conheça",
    links: [
      { href: "#about", label: "A Solução", icon: Lightbulb },
      { href: "#tutorial", label: "Como funciona", icon: Play },
      { href: "#benefits", label: "Benefícios", icon: Star },
      { href: "#gallery", label: "Galeria", icon: Image },
    ],
  },
  {
    titulo: "Conecte-se",
    links: [
      { href: "#target-audience", label: "Público-Alvo", icon: User2 },
      { href: "#team", label: "Nossa Equipe", icon: UsersRound },
      { href: "#contact", label: "Contato", icon: Mail },
    ],
  },
];

const SectionsMenu = () => {
  const [aberto, setAberto] = useState(false);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setAberto(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setAberto(true)}
      onMouseLeave={() => setAberto(false)}
      onFocus={() => setAberto(true)}
      onBlur={handleBlur}
    >
      <button
        className="rounded-lg py-1 px-1 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10"
        aria-label="Abrir menu do usuário"
        aria-haspopup="true"
        aria-expanded={aberto}
      >
        <span className="flex items-center gap-2">
          <p>Seções</p>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              aberto ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {aberto && (
          <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex w-[440px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-(--card-border-color1) bg-white shadow-xl dark:border-(--card-border-color1-dark) dark:bg-(--background-color-dark)"
            >
              {/* Colunas de links */}
              <nav aria-label="Navegação principal" className="flex flex-1">
                {colunas.map((coluna, i) => (
                  <div
                    key={coluna.titulo}
                    className={`flex flex-1 flex-col gap-1 p-4 ${
                      i > 0
                        ? "border-l border-(--card-border-color1) dark:border-(--card-border-color1-dark)"
                        : ""
                    }`}
                  >
                    <span className="mb-2 text-xs font-medium uppercase tracking-wider opacity-50">
                      {coluna.titulo}
                    </span>

                    {coluna.links.map(({ href, label, icon: Icon }) => (
                      <a
                        key={href}
                        href={href}
                        className="group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--background-color-dark)/10 transition-colors group-hover:bg-(--background-color-dark)/15 dark:bg-(--background-color)/10 dark:group-hover:bg-(--background-color)/15">
                          <Icon className="h-5 w-5 opacity-70" />
                        </span>
                        {label}
                      </a>
                    ))}
                  </div>
                ))}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionsMenu;
