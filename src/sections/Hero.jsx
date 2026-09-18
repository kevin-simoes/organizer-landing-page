
import HeroImage from '../assets/hero_image.png'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <>
            <section className='flex px-10 flex-col-reverse items-center text-center md:flex-row md:text-left gap-10 max-w-9xl mx-auto py-10' id='hero-section
'>
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <h1>Suas anotações <span className='text-(--primary-color)'>Organizadas</span> com um clique!</h1>
                    <p>Capture fotos de lousas, folhas de caderno e anotações. Organizamos tudo automaticamente e encontra o
                        que você precisa em segundos.</p>
                    <a href="#about" className='flex border-1 border-(--primary-color) text-(--primary-color) w-fit p-2 rounded-full'>
                        Conhecer Mais
                        <ArrowRight />
                    </a>
                </div>
                <div>
                    <img src={HeroImage} width="1020"
                    className='w-100 md:w-200 ' />
                </div>
            </section>
        </>
    )
}

export default Hero
