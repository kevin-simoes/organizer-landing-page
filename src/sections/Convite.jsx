import Icon from '../assets/organizer_icon.png'
import { Link } from "react-router-dom";

const Convite = () => {
  return (
    <>
     <section
          className="px-4 py-16 flex justify-center md:px-10 w-full mx-2 md:mx-10 text-center bg-[linear-gradient(47deg,_rgba(35,47,75,1)_0%,_rgb(38,103,255)_100%)]"
          id="login-invite"
        >
          <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
            <img
              src={Icon}
              alt="Ícone do Organizer"
              className="w-16 h-16"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para organizar suas anotações?
            </h2>
            <p className="text-white">
              Faça o login na landing page do Organizer para ser informado quando o aplicativo
              ficar disponível.
            </p>
            <Link to="/formulario" className="mt-2 inline-block bg-white text-(--primary-color) font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">Registrar</Link>

          </div>
        </section> 
    </>
  )
}

export default Convite
