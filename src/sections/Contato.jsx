

const Contato = () => {
  return (
    <>
      <section
          className="px-4 py-16 md:px-10 max-w-6xl mx-auto text-center flex flex-col items-center"
          id="contact"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Fale com a <span className="text-(--primary-color)">nossa equipe</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-(--secondary-color)/70 max-w-xl mx-auto">
            Dúvidas, sugestões ou interesse no projeto? Fale com a gente.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6">
              <h3 className="font-bold">Redes Sociais</h3>
              <p className="mt-2">
                <a
                  href="https://github.com/kevin-simoes/organizer-landingpage"
                  target="_blank"
                  rel="noopener"
                  className="text-(--primary-color) hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </section>
    </>
  )
}

export default Contato
