import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";
import Icon from "../assets/organizer_icon.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PencilLine } from "lucide-react";
import Home from "../assets/home.png";
import Folders from "../assets/folders.png";
import Notes from "../assets/notes.png";
import Galery4 from "../assets/galery4.png";
import Galery5 from "../assets/galery5.png";
import Galery6 from "../assets/galery6.png";

const MotionLink = motion.create(Link);

const images = [Home, Folders, Notes, Galery4, Galery5, Galery6];

const Convite = () => {
  return (
    <section
      className="relative flex min-h-[28rem] w-full items-center justify-center overflow-hidden px-4 py-16 md:px-10 mx-2 md:mx-10 text-center bg-(--primary-color)/60"
      id="login-invite"
    >
      <ParallaxHeroImages
        images={images}
        imageClassName="h-24 w-16 sm:h-36 sm:w-24 md:h-56 md:w-36"
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-4">
        <img src={Icon} alt="Ícone do Organizer" className="w-16 h-16" />
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]">
          Pronto para organizar suas anotações?
        </h2>
        <p className="text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
          Faça o login na landing page do Organizer para ser informado quando o
          aplicativo ficar disponível.
        </p>

        <MotionLink
          to="/formulario"
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
              hover: { color: "#000000" },
            }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex items-center gap-2 p-0.5"
          >
            Registrar
            <PencilLine />
          </motion.span>
        </MotionLink>
      </div>
    </section>
  );
};

export default Convite;