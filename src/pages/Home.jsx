import '../css/global.css'
import NavBar from '../components/NavBar'
import Hero from '../sections/Hero'
import Sobre from '../sections/Sobre'
import PublicoAlvo from '../sections/PublicoAlvo'
import Beneficios from '../sections/Beneficios'
import Galeria from '../sections/Galeria'
import ComoFunciona from '../sections/ComoFunciona'
import Equipe from '../sections/Equipe'
import Convite from '../sections/Convite'
import Contato from '../sections/Contato'
import Footer from '../sections/Footer'

const App = () => {
  return (
    <>
    <main className='bg-(--background-color) text-black dark:bg-(--background-color-dark)'>
        <NavBar />
        <main className="flex flex-col gap-10 items-center font-primary bg-(--background-color) text-black dark:bg-(--background-color-dark)">
          <Hero />
          <Sobre />
          <PublicoAlvo/>
          </main>
          <Beneficios/>
          <main  className="flex flex-col gap-10 items-center p-2 font-primary bg-(--background-color) text-black dark:bg-(--background-color-dark)">
          <Galeria/>
          <ComoFunciona/>
          <Equipe/>
          </main>
          <Convite/>
          <main  className="flex flex-col gap-10 items-center p-2 font-primary text-(--secondary-color) dark:text-(--secondary-color-dark) dark:bg-(--card-color1-dark)">
          <Contato/>
        </main>
        <Footer/>
    </main>
    </>
  )
}

export default App