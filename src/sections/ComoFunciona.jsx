import { Bot, Folder } from "lucide-react"
import TutorialImage from "../assets/tutorial-image.png"

const ComoFunciona = () => {
  return (
    <>
      <section
          className="px-4 py-16 md:px-10 max-w-6xl mx-auto w-full text-center flex flex-col gap-10"
          id="tutorial"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Como funciona o <span className="text-(--primary-color)">Organizer</span>
          </h2>

          <div className="flex flex-col gap-10">
            <div className="rounded-2xl border border-(--card-border-color2) bg-(--card-color2) p-8 flex flex-col items-start text-start">
              <Bot className="text-(--primary-color)" width="35" height="35"/>
              <h3 className="mt-4 text-xl font-bold">Primeiro Contato</h3>
              <p className="mt-2 text-(--secondary-color)/80">
                Ao entrar pela primeira vez, o Organizer fará perguntas para conhecer o seu
                usuário, partindo desse contexto para identificar quais fotos deverá organizar
                para cada pasta, conforme a preferência do usuário.
              </p>
            </div>

            <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) px-8 pt-8 flex gap-4 items-top text-end">
              <img
                src={TutorialImage}
                style={{height: '300px'}}
                className=""
              />
            <div className="flex flex-col gap-4 items-end text-end">
              <Folder className="text-(--primary-color)" width="35" height="35"/>
                <h3 className="text-xl font-bold">Organização por temas</h3>
                <p className="text-(--secondary-color)/80">
                  Diferente da galeria de fotos, a do Organizer é voltada 100% a fotos voltadas a
                  estudo/trabalho, por conta disso o aplicativo separa as fotos por temas, sendo
                  ajustável para atender as necessidades do usuário.
                </p>
            </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default ComoFunciona
