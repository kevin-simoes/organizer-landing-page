const PublicoAlvo = () => {
  return (
    <>
    <section
          className=" flex flex-col gap-2 items-center max-w-6xl mx-auto w-full"
          id="target-audience"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Feito para 
            <span className="text-(--primary-color)"> quem estuda e ensina.</span>
          </h2>
          <p className="mt-3 text-base text-(--secondary-color)/70 max-w-xl mx-auto">
            Conheça quem mais se beneficia do Organizer no dia a dia.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6">
              <h3 className="text-xl font-bold">Estudantes</h3>
              <p className="mt-2 text-(--secondary-color)/80">
                Alunos do ensino médio, técnico e superior que fotografam lousas e anotações e
                perdem tempo procurando o material certo na hora de estudar para provas e
                trabalhos.
              </p>
            </div>
            <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6">
              <h3 className="text-xl font-bold">Professores</h3>
              <p className="mt-2 text-(--secondary-color)/80">
                Educadores que precisam organizar materiais de aula, provas e referências por
                disciplina e turma, mantendo tudo acessível e bem categorizado.
              </p>
            </div>
            <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6">
              <h3 className="text-xl font-bold">Grupos de Estudo</h3>
              <p className="mt-2 text-(--secondary-color)/80">
                Times de estudo que trocam fotos de anotações entre si e precisam de uma forma
                rápida de encontrar o conteúdo certo sem se perder em pastas desorganizadas.
              </p>
            </div>
          </div>
        </section></>
  )
}

export default PublicoAlvo
