import { Clock, File, Image } from "lucide-react"

const Beneficios = () => {
  return (
    <>
      <section
          className=" flex flex-col gap-2 px-4 py-16 md:px-10 w-full text-center bg-(--card-color1)"
          id="benefits"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Benefícios ao ser um
            <span className="text-(--primary-color)"> Organizer.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="rounded-2xl border border-(--card-border-color1) bg-(--background-color) p-6">
              <Clock className="text-(--primary-color)" width={35} height={35}/>
              <h3 className="mt-4 text-xl font-bold">Organização Inteligente</h3>
              <p className="mt-2">
                O aplicativo identifica e separa automaticamente fotos de caderno, lousa e
                documentos, deixando tudo mais organizado e fácil de encontrar.
              </p>
            </div>

            <div className="rounded-2xl border border-(--card-border-color1) bg-(--background-color) p-6">
              <Image className="text-(--primary-color)" width={35} height={35}/>
              <h3 className="mt-4 text-xl font-bold">Proatividade nos Estudos</h3>
              <p className="mt-2">
                Facilita encontrar conteúdos rapidamente, permitindo que você se concentre mais
                nos estudos e menos na busca por materiais.
              </p>
            </div>

            <div className="rounded-2xl border border-(--card-border-color1) bg-(--background-color) p-6">
              <File className="text-(--primary-color)" width={35} height={35}/>
              <h3 className="mt-4 text-xl font-bold">Melhor Qualidade e Acesso às Anotações</h3>
              <p className="mt-2">
                Melhora a qualidade das suas anotações, tornando-as mais legíveis e acessíveis a
                qualquer momento, em qualquer lugar.
              </p>
            </div>
          </div>
        </section>
    </>
  )
}

export default Beneficios
