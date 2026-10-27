import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer className="px-6 pt-10 pb-6 dark:bg-(--card-color1-dark)">
  <div className=" mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
    {/* Marca e descrição */}
    <div className="flex flex-col gap-2 max-w-sm">
      <h3 className="text-xl font-bold dark:text-(--primary-color-dark)">
        Organizer
      </h3>
      <p className="text-sm text-(--secondary-color) dark:text-(--secondary-color-dark)">
        Suas anotações organizadas com um clique.
      </p>
    </div>

    {/* Links */}
    <nav className="flex gap-12 sm:gap-16 text-sm">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-(--secondary-color) dark:text-(--secondary-color-dark)">
          Produto
        </span>
        <a
          href="#about"
          className="text-(--secondary-color) dark:text-(--secondary-color-dark) hover:text-(--primary-color) transition-colors"
        >
          Solução
        </a>
        <a
          href="#target-audience"
          className="text-(--secondary-color) dark:text-(--secondary-color-dark) hover:text-(--primary-color) transition-colors"
        >
          Público-alvo
        </a>
        <a
          href="#benefits"
          className="text-(--secondary-color) dark:text-(--secondary-color-dark) hover:text-(--primary-color) transition-colors"
        >
          Benefícios
        </a>
        <a
          href="#gallery"
          className="text-(--secondary-color) dark:text-(--secondary-color-dark) hover:text-(--primary-color) transition-colors"
        >
          Galeria
        </a>
        <a
          href="#team"
          className="text-(--secondary-color) dark:text-(--secondary-color-dark) hover:text-(--primary-color) transition-colors"
        >
          Nossa Equipe
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-(--secondary-color) dark:text-(--secondary-color-dark)">
          Começar
        </span>
        <Link to="/formulario" className="hover:text-(--primary-color) dark:text-(--secondary-color-dark) transition-colors">
          Pré-Registro
        </Link>
      </div>
    </nav>
  </div>

  {/* Linha divisória + copyright */}
  <div className="mx-max mt-10 pt-6 flex flex-col items-center">
  <hr className="border-0.5 border-gray-300 w-11/12 dark:border-(--secondary-color-dark)" />
    <p className="text-sm text-center md:text-left text-(--secondary-color) dark:text-(--secondary-color-dark) ">
      &copy; 2026 IRIS. Todos os direitos reservados.
    </p>
  </div>
</footer>
  )
}

export default Footer
