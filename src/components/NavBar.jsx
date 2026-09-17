import Icon from '../assets/organizer_icon.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className='flex gap-2 md:flex-row items-center justify-between p-2 flex-wrap'>

            <div className='flex items-center flex-row'>
                <img src={Icon} width="50" />
                <h3>Organizer</h3>
            </div>

            <nav aria-label="Navegação principal" className='flex gap-10 flex-wrap'>
                <a href="#about">A Solução</a>
                <a href="#target-audience">Público-Alvo</a>
                <a href="#benefits">Benefícios</a>
                <a href="#gallery">Galeria</a>
                <a href="#tutorial">Como funciona</a>
                <a href="#team">Nossa Equipe</a>
                <a href="#contact">Contato</a>
            </nav>

            <div>
                <Link to="/formulario">
                    Formulário
                </Link>
            </div>

        </header>
    )
}

export default NavBar