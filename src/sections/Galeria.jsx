import Home from "../assets/home.png";
import Folders from "../assets/folders.png";
import Notes from "../assets/notes.png";
import Galery4 from "../assets/galery4.png";
import Galery5 from "../assets/galery5.png";
import Galery6 from "../assets/galery6.png";
import Galery7 from "../assets/galery7.png";
import Galery8 from "../assets/galery8.png";
import { InfiniteSlider } from "../components/InfiniteSlider";
import { motion } from "framer-motion";

const images = [
  { src: Home, alt: "Tela inicial", caption: "Tela inicial" },
  { src: Folders, alt: "Organização automática", caption: "Organização automática" },
  { src: Notes, alt: "Acesso às anotações", caption: "Acesso às anotações" },
  { src: Galery4 },
  { src: Galery5 },
  { src: Galery6 },
  { src: Galery7 },
  { src: Galery8 }
];

const Galeria = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
      className="flex flex-col gap-2 py-10 items-center w-full mx-auto w-full text-center sm:text-left"
      id="gallery"
    >
      <h2 className="text-3xl md:text-4xl font-bold dark:text-(--primary-color-dark)">
        Veja o <span className="text-(--primary-color)">Organizer</span> em ação
      </h2>
      <p className="mt-3 text-base md:text-lg max-w-xl mx-auto dark:text-(--secondary-color-dark)">
        Uma prévia visual da solução desenvolvida pela equipe.
      </p>

      <div className="mt-10 w-full overflow-x-hidden">
  <div className="overflow-visible py-20">
    <InfiniteSlider
      speed={40}
      speedOnHover={15}
      gap={24}
      className="overflow-visible"
    >
      {images.map((image) => (
        <motion.figure
          key={image.alt}
          whileHover={{
            rotateX: 5,
            rotateY: -5,
            scale: 1.20,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
          }}
          className="w-[180px] h-[387px] shrink-0 rounded-2xl flex flex-col items-center overflow-hidden border border-(--card-border-color1) bg-(--card-color1)"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-56 object-cover"
          />
        </motion.figure>
      ))}
    </InfiniteSlider>
  </div>
</div>
    </motion.section>
  );
};

export default Galeria;