import React from 'react'
import BigCardImage from '../assets/about-big-card-image.png'
import Filter from '../assets/filter.png'
import SmallCardImage from '../assets/about-small-card-image.png'
import { BrainCircuit, Rocket, TextSearch } from 'lucide-react'

const Sobre = () => {
    return (
        <div>
            <section className='flex flex-col items-center gap-4' id="about">
                <h2>Continue estudando sem imprevistos.</h2>
                <p>Com Organizer, agentes customizados organizarão suas fotos.</p>
                <div className='flex w-220 bg-(--card-color1) pt-4 px-4 rounded-2xl border-(--card-border-color1) border-1'>
                    <div class="about-big-card-leftside">
                        <BrainCircuit className='stroke-(--primary-color) w-8 h-8' />
                        <h3>Organização inteligente</h3>
                        <p>O aplicativo identifica e separa automaticamente fotos de caderno, lousa e documentos, deixando
                            tudo mais organizado e fácil de encontrar.</p>
                    </div>
                    <img src={BigCardImage} width="300" />
                </div>
                <div className='flex gap-4 w-220'>
                    <div className='flex flex-col w-full bg-(--card-color1) p-4 rounded-2xl border-(--card-border-color1) border-1'>
                        <div>
                            <Rocket className='stroke-(--primary-color) w-8 h-8' />
                            <h3>Proatividade nos estudos</h3>
                            <p>Facilita encontrar conteúdos rapidamente</p>
                        </div>
                        <img src={Filter} width="166" />
                    </div>
                    <div className='flex bg-(--card-color1) w-full justify-between pt-4 pl-4 rounded-2xl border-(--card-border-color1) border-1'>
                        <div className='w-40 flex flex-col justify-between pb-4'>
                            <TextSearch className='stroke-(--primary-color) w-8 h-8' />
                            <h3>Melhor Qualidade e Acesso às Anotações</h3>
                            <p>Facilita encontrar conteúdos rapidamente</p>
                        </div>
                        <img src={SmallCardImage
                        } width="166" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sobre
