const Equipe = () => {
  return (
    <>
      <section
        className="px-4 py-16 md:px-10 max-w-6xl mx-auto w-full text-center flex flex-col items-center gap-4"
        id="team"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Conheça a <span className="text-(--primary-color)">equipe IRIS</span>
        </h2>
        <p className="mt-3 text-base md:text-lg text-(--secondary-color)/70 max-w-xl mx-auto">
          As pessoas responsáveis por desenvolver essa solução.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col items-center text-center gap-1">
            <h3 className="font-bold">Flávia Camerim de Sousa</h3>
            <span className="text-sm text-(--primary-color) font-medium">
              Back-End
            </span>
          </div>
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col items-center text-center gap-1">
            <h3 className="font-bold">João Pedro Nóbrega Pereira</h3>
            <span className="text-sm text-(--primary-color) font-medium">
              Front-End
            </span>
          </div>
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col items-center text-center gap-1">
            <h3 className="font-bold">Kevin Simões de Souza Lima</h3>
            <span className="text-sm text-(--primary-color) font-medium">
              Front-End
            </span>
          </div>
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col items-center text-center gap-1">
            <h3 className="font-bold">Luan Sá Muniz dos Santos</h3>
            <span className="text-sm text-(--primary-color) font-medium">
              Back-End
            </span>
          </div>
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col items-center text-center gap-1">
            <h3 className="font-bold">Manuella Sousa Thomazini</h3>
            <span className="text-sm text-(--primary-color) font-medium">
              Back-End
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipe;
