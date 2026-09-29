import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImgEstudantes from "../assets/estudantes.avif";
import ImgProfessores from "../assets/professores.avif";
import ImgGrupos from "../assets/grupos.avif";

const transition = {
  type: "spring",
  stiffness: 26.7,
  damping: 4.1,
  mass: 0.2,
};

const imageVariants = {
  collapsed: { scale: 1, filter: "blur(0px)", width: "100%", height: "100%" },
  expanded: { scale: 1.05, filter: "blur(3px)", width: "100%", height: "100%"  },
};

const AudienceCard = ({ title, image, extra, tilt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      whileHover={
        !isOpen
          ? {
              rotateX: tilt.x,
              rotateY: tilt.y,
              scale: 1.02,
            }
          : {}
      }
      transition={{ type: "spring", stiffness: 200 }}
      className="relative h-120 w-80 cursor-pointer overflow-hidden rounded-2xl border border-(--card-border-color1) bg-(--card-color1) dark:bg-(--card-color1-dark) dark:border-(--card-border-color1-dark)"
    >
      {/* Imagem preenche o card inteiro e borra ao abrir */}
      <motion.img
        src={image}
        alt={title}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        animate={isOpen ? "expanded" : "collapsed"}
        variants={imageVariants}
        transition={transition}
      />

      {/* Sombra escura no topo, para o título ficar legível sobre a imagem */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 via-black/25 to-transparent" />

      {/* Título, sempre fixo no topo */}
      <h4 className="relative z-10 p-4 text-xl font-bold text-white drop-shadow-md">
        {title}
      </h4>

      {/* Texto extra some/aparece por cima da imagem, sem empurrar o card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4"
          >
            <p className="text-sm text-white drop-shadow-md">{extra}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PublicoAlvo = () => {
  const audiences = [
    {
      title: "Estudantes",
      image: ImgEstudantes,
      extra:
        "Alunos do ensino médio, técnico e superior que fotografam lousas e anotações e perdem tempo procurando o material certo na hora de estudar para provas e trabalhos.",
      tilt: { x: 5, y: -5 },
    },
    {
      title: "Professores",
      image: ImgProfessores,
      extra:
        "Educadores que precisam organizar materiais de aula, provas e referências por disciplina e turma, mantendo tudo acessível e bem categorizado.",
      tilt: { x: 0, y: -5 },
    },
    {
      title: "Grupos de Estudo",
      image: ImgGrupos,
      extra:
        "Times de estudo que trocam fotos de anotações entre si e precisam de uma forma rápida de encontrar o conteúdo certo sem se perder em pastas desorganizadas.",
      tilt: { x: -5, y: -5 },
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-7 items-center max-w-6xl mx-auto w-full text-center"
      id="target-audience"
    >
      <h2 className="text-3xl md:text-4xl font-bold dark:text-(--primary-color-dark)">
        Feito para
        <span className="text-(--primary-color)"> quem estuda e ensina.</span>
      </h2>
      <p className="mt-3 text-base text-(--secondary-color) max-w-xl mx-auto dark:text-(--secondary-color-dark)">
        Conheça quem mais se beneficia do Organizer no dia a dia.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-items-center gap-6 text-left">
        {audiences.map((audience) => (
          <AudienceCard key={audience.title} {...audience} />
        ))}
      </div>
    </motion.section>
  );
};

export default PublicoAlvo;