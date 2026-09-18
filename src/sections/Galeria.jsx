import Home from "../assets/home.png";
import Folders from "../assets/folders.png";
import Notes from "../assets/notes.png";

const Galeria = () => {
  return (
    <>
      <section
          className="flex flex-col gap-2 py-10 items-center max-w-6xl mx-auto w-full text-center sm:text-left"
          id="gallery"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Veja o <span className="text-(--primary-color)">Organizer</span> em ação
          </h2>
          <p className="mt-3 text-base md:text-lg max-w-xl mx-auto">
            Uma prévia visual da solução desenvolvida pela equipe.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <figure className="rounded-2xl overflow-hidden border border-(--card-border-color1) bg-(--card-color1)">
              <img src={Home}
                className="w-full h-1 object-cover"
              />
              <figcaption className="py-3 text-sm font-medium">Tela inicial</figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-(--card-border-color1) bg-(--card-color1)">
              <img
                src={Folders}
                className="w-full h-56 object-cover"
              />
              <figcaption className="py-3 text-sm font-medium">Organização automática</figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-(--card-border-color1) bg-(--card-color1)">
              <img
                src={Notes}
                className="w-full h-56 object-cover"
              />
              <figcaption className="py-3 text-sm font-medium">Acesso às anotações</figcaption>
            </figure>
          </div>
        </section>
    </>
  )
}

export default Galeria
