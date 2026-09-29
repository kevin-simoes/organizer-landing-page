import Aurora from "../components/Aurora";
import Icon from "../assets/organizer_icon.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PencilSparkles } from 'lucide-react';

const Convite = () => {
  return (
    <>
      <section
        className="relative overflow-hidden px-4 py-16 flex justify-center md:px-10 w-full mx-2 md:mx-10 text-center bg-[rgb(35,47,75)]"
        id="login-invite"
      >
        {/* Aurora no fundo */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#2667ff", "#EDEDED", "#2667ff"]}
            blend={0.6}
            amplitude={5.0}
            speed={1}
            offset={0.5}
          />
        </div>

        {/* Conteúdo acima do efeito */}
        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-4">
          <img src={Icon} alt="Ícone do Organizer" className="w-16 h-16" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pronto para organizar suas anotações?
          </h2>
          <p className="text-white">
            Faça o login na landing page do Organizer para ser informado quando
            o aplicativo ficar disponível.
          </p>
          <Link to="/formulario">
            <motion.a
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative flex items-center overflow-hidden border-1 border-(--background-color) text-(--background-color) w-fit p-2 rounded-full gap-2"
            >
              <motion.span
                variants={{
                  rest: { scaleY: 0 },
                  hover: { scaleY: 1 },
                }}
                transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                style={{ originY: 0 }}
                className="absolute inset-0 bg-(--background-color)"
              />
              <motion.span
                variants={{
                  rest: { color: "var(--background-color)" },
                  hover: { color: "#00000" },
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex items-center gap-2 p-0.5 flex gap-2"
              >
                Registrar
                <PencilSparkles />
              </motion.span>
            </motion.a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Convite;