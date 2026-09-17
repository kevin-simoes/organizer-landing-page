
import HeroImage from '../assets/hero_image.png'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <>
            <section className='flex px-15'>
                <div className='flex flex-col justify-center gap-2'>
                    <h1>Suas anotações <span className='text-(--primary-color)'>Organizadas</span> com um clique!</h1>
                    <p>Capture fotos de lousas, folhas de caderno e anotações. Organizamos tudo automaticamente e encontra o
                        que você precisa em segundos.</p>
                    <a href="#about" className='flex border-1 border-(--primary-color) text-(--primary-color) w-fit p-2 rounded-full'>
                        Conhecer Mais
                        <ArrowRight />
                    </a>
                </div>
                <div class="hero-rightside">
                    <img src={HeroImage} width="1020" />
                </div>
            </section>
        </>
    )
}

export default Hero
