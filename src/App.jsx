import './css/global.css'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Sobre from './sections/Sobre'
import PublicoAlvo from './sections/PublicoAlvo'
import Beneficios from './sections/Beneficios'
import Galeria from './sections/Galeria'
import ComoFunciona from './sections/ComoFunciona'
import Equipe from './sections/Equipe'
import Convite from './sections/Convite'
import Contato from './sections/Contato'

const App = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col gap-10 items-center p-2 font-primary">
        <Hero />
        <Sobre />
        <PublicoAlvo/>
        </main>
        <Beneficios/>
        <main  className="flex flex-col gap-10 items-center p-2 font-primar">
        <Galeria/>
        <ComoFunciona/>
        <Equipe/>
        </main>
        <Convite/>
        <main  className="flex flex-col gap-10 items-center p-2 font-primary text-(--secondary-color)">
        <Contato/>
      </main>
      <footer className="py-6 text-center text-sm text-(--secondary-color)/60">
        <p>&copy; 2026 IRIS. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App