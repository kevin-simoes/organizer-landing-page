import { Clock, File, Image } from "lucide-react"
import { Tilt } from '@/components/motion-primitives/tilt';
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  stiffness: 26.7,
  damping: 4.1,
  mass: 0.2,
};

const Beneficios = () => {
  return (
    <>
      <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            
          className=" flex flex-col items-center gap-5 px-4 py-16 md:px-10 w-full text-center bg-(--card-color1) dark:bg-(--card-color1-dark)"
          id="benefits"
        >
          <h2 className="text-3xl md:text-4xl font-bold dark:text-(--primary-color-dark) transition-colors duration-300 hover:text-(--primary-color)">
            Benefícios ao ser um
            <span className="text-(--primary-color)"> Organizer.</span>
          </h2>


          <div className="mt-10 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <Tilt
                rotationFactor={6}
                isRevese
                style={{ transformOrigin: "center center" }}
                springOptions={transition}
                className="rounded-2xl border border-(--card-border-color1) bg-(--background-color) p-6 dark:bg-(--card-color1-dark) dark:border-(--card-border-color1-dark) flex flex-col gap-2"
              >
              <Clock className="text-(--primary-color)" width={35} height={35}/>
              <h3 className="mt-4 text-xl font-bold dark:text-(--primary-color-dark) transition-colors duration-300 hover:text-(--primary-color)">Organização Inteligente</h3>
              <p className="mt-2 dark:text-(--secondary-color-dark)">
                O aplicativo identifica e separa automaticamente fotos de caderno, lousa e
                documentos, deixando tudo mais organizado e fácil de encontrar.
              </p>
              </Tilt>

              <Tilt
                rotationFactor={6}
                isRevese
                style={{ transformOrigin: "center center" }}
                springOptions={transition}
                className="rounded-2xl border border-(--card-border-color1) bg-(--background-color) p-6 dark:bg-(--card-color1-dark) dark:border-(--card-border-color1-dark) flex flex-col gap-2"
              >
              <Image className="text-(--primary-color)" width={35} height={35}/>
              <h3 className="mt-4 text-xl font-bold dark:text-(--primary-color-dark) transition-colors duration-300 hover:text-(--primary-color)">Proatividade nos Estudos</h3>
              <p className="mt-2 dark:text-(--secondary-color-dark)">
                Facilita encontrar conteúdos rapidamente, permitindo que você se concentre mais
                nos estudos e menos na busca por materiais.
              </p>
            </Tilt>

            <Tilt
                rotationFactor={6}
                isRevese
                style={{ transformOrigin: "center center" }}
                springOptions={transition}
                className="rounded-2xl border border-(--card-border-color1) bg-(--background-color) p-6 dark:bg-(--card-color1-dark) dark:border-(--card-border-color1-dark) flex flex-col gap-2"
              >
          <File className="text-(--primary-color)" width={35} height={35}/>
              <h3 className="mt-4 text-xl font-bold dark:text-(--primary-color-dark) transition-colors duration-300 hover:text-(--primary-color)">Melhor Qualidade e Acesso às Anotações</h3>
              <p className="mt-2 dark:text-(--secondary-color-dark)">
                Melhora a qualidade das suas anotações, tornando-as mais legíveis e acessíveis a
                qualquer momento, em qualquer lugar.
              </p>
            </Tilt>
          </div>
        </motion.section>
    </>
  )
}

export default Beneficios
