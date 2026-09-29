import HeroImage from "../assets/hero_image.png";
import { ArrowRight, Mouse } from "lucide-react";
import { motion } from "framer-motion";
import Aurora from "../components/Aurora";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#2667ff", "#EDEDED", "#2667ff"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
            offset={0.01}
          />
        </div>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex px-16 pt-20 relative z-10 pb-1 flex-col-reverse items-center text-center md:flex-row md:text-left gap-7 max-w-8xl mx-auto"
          id="hero-section"
        >
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="text-black dark:text-(--primary-color-dark)">
              Suas anotações{" "}
              <span className="text-(--primary-color)">Organizadas</span> com um
              clique!
            </h1>
            <p className="text-gray-500">
              Capture fotos de lousas, folhas de caderno e anotações.
              Organizamos tudo automaticamente e encontra o que você precisa em
              segundos.
            </p>
            <motion.a
              href="#about"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative flex items-center overflow-hidden border-1 border-(--primary-color) text-(--primary-color) w-fit p-2 rounded-full gap-2"
            >
              <motion.span
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                style={{ originX: 0 }}
                className="absolute inset-0 bg-(--primary-color)"
              />
              <motion.span
                variants={{
                  rest: { color: "var(--primary-color)" },
                  hover: { color: "#ffffff" },
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex items-center gap-2"
              >
                Conhecer Mais
                <ArrowRight />
              </motion.span>
            </motion.a>
          </div>
          <div>
            <img src={HeroImage} className="w-100 md:w-250 " />
          </div>
        </motion.section>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-2 dark:text-white"
        >
          <Mouse />
          <p>Role a tela</p>
        </motion.span>
      </div>
    </>
  );
};

export default Hero;
