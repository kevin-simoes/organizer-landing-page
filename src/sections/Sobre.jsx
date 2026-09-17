import BigCardImage from '../assets/about-big-card-image.png'
import Filter from '../assets/filter.png'
import SmallCardImage from '../assets/about-small-card-image.png'
import { BrainCircuit, Rocket, TextSearch } from 'lucide-react'

const Sobre = () => {
    return (
        <div>
            <section className='flex flex-col items-center gap-4 px-4 py-12 sm:py-16 text-center' id="about">
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Continue estudando sem imprevistos.</h2>
                <p className='text-sm sm:text-base text-(--secondary-color)/80'>Com Organizer, agentes customizados organizarão suas fotos.</p>
                <div className='flex flex-col sm:flex-row w-full max-w-[880px] bg-(--card-color1) pt-4 px-4 rounded-2xl border-(--card-border-color1) border-1 text-start'>
                    <div className="about-big-card-leftside flex flex-col gap-2 py-2 sm:py-4">
                        <BrainCircuit className='stroke-(--primary-color) w-8 h-8' />
                        <h3 className='text-lg sm:text-xl font-bold'>Organização inteligente</h3>
                        <p className='text-sm sm:text-base text-(--secondary-color)/80'>
                            O aplicativo identifica e separa automaticamente fotos de caderno, lousa e documentos, deixando
                            tudo mais organizado e fácil de encontrar.
                        </p>
                    </div>
                    <img
                        src={BigCardImage}
                        className='w-[180px] sm:w-[220px] md:w-[300px] h-auto mx-auto sm:ml-auto sm:mr-0 mt-4 sm:mt-0 object-contain'
                        alt="Organização inteligente"
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-4 w-full max-w-[880px]'>

                    <div className='flex flex-col w-full bg-(--card-color1) p-4 rounded-2xl border-(--card-border-color1) border-1 text-start'>
                        <div>
                            <Rocket className='stroke-(--primary-color) w-8 h-8' />
                            <h3 className='mt-2 text-lg sm:text-xl font-bold'>Proatividade nos estudos</h3>
                            <p className='mt-1 text-sm sm:text-base text-(--secondary-color)/80'>Facilita encontrar conteúdos rapidamente</p>
                        </div>
                        <img
                            src={Filter}
                            className='w-[120px] sm:w-[150px] md:w-[166px] h-auto mx-auto mt-4 object-contain'
                            alt="Proatividade nos estudos"
                        />
                    </div>

                    <div className='flex flex-col sm:flex-row bg-(--card-color1) w-full justify-between pt-4 pl-4 pr-4 sm:pr-0 rounded-2xl border-(--card-border-color1) border-1 text-start'>
                        <div className='w-full sm:w-40 flex flex-col justify-between gap-2 pb-4'>
                            <TextSearch className='stroke-(--primary-color) w-8 h-8' />
                            <h3 className='text-lg sm:text-xl font-bold'>Melhor Qualidade e Acesso às Anotações</h3>
                            <p className='text-sm sm:text-base text-(--secondary-color)/80'>Facilita encontrar conteúdos rapidamente</p>
                        </div>
                        <img
                            src={SmallCardImage}
                            className='w-[120px] sm:w-[150px] md:w-[166px] h-auto mx-auto sm:mx-0 object-contain'
                            alt="Melhor qualidade e acesso às anotações"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sobre