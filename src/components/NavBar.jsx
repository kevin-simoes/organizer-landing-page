import Icon from '../assets/organizer_icon.png'

const NavBar = () => {
    return (
        <>
            <header className='flex gap-2 items-center justify-between p-2'>

                <div className='flex items-center flex-row'>
                    <img src={Icon} width="50" />
                    <h3>Organizer</h3>
                </div>
                <nav aria-label="Navegação principal" className='flex gap-10'>
                    <a href="#about">A Solução</a>
                    <a href="#target-audience">Público-Alvo</a>
                    <a href="#benefits">Benefícios</a>
                    <a href="#gallery">Galeria</a>
                    <a href="#tutorial">Como funciona</a>
                    <a href="#team">Nossa Equipe</a>
                    <a href="#contact">Contato</a>
                </nav>
                <div>
                    <a href="src/pages/form.html" class="button-link">Pré-cadastro</a>
                </div>
            </header>
        </>
    )
}

export default NavBar
