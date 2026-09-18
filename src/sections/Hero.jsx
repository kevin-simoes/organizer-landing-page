
import HeroImage from '../assets/hero_image.png'
import { ArrowRight, Mouse } from 'lucide-react'

const Hero = () => {
    return (
        <>
            <section className='flex px-16 pt-30 pb-10 flex-col-reverse items-center text-center md:flex-row md:text-left gap-10 max-w-9xl mx-auto' id='hero-section
'>
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <h1>Suas anotações <span className='text-(--primary-color)'>Organizadas</span> com um clique!</h1>
                    <p className='text-gray-500'>Capture fotos de lousas, folhas de caderno e anotações. Organizamos tudo automaticamente e encontra o
                        que você precisa em segundos.</p>
                    <a href="#about" className='flex border-1 border-(--primary-color) text-(--primary-color) w-fit p-2 rounded-full hover:bg-(--primary-color) hover:text-white transition-colors gap-2'>
                        Conhecer Mais
                        <ArrowRight />
                    </a>
                </div>
                <div>
                    <img src={HeroImage} width="1020"
                    className='w-100 md:w-200 ' />
                </div>
            </section>
            <span className="flex gap-2">
                <Mouse/><p>Role a tela</p>
            </span>
        </>
    )
}

export default Hero
