import React from 'react'
import './css/global.css'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Sobre from './sections/Sobre'

const App = () => {
  return (
    <>
    <NavBar/>
      <main className='flex flex-col gap-10 p-2'>
        <Hero/>
        <Sobre/>

        <section class="target-audience-content" id="target-audience">
          <h2>Feito para <span class="highlight">quem estuda e ensina.</span></h2>
          <p>Conheça quem mais se beneficia do Organizer no dia a dia.</p>
          <div class="target-audience-cards">
            <div class="target-audience-card">
              <h3>Estudantes</h3>
              <p>Alunos do ensino médio, técnico e superior que fotografam lousas e anotações e perdem tempo
                procurando o material certo na hora de estudar para provas e trabalhos.</p>
            </div>
            <div class="target-audience-card">
              <h3>Professores</h3>
              <p>Educadores que precisam organizar materiais de aula, provas e referências por disciplina e
                turma, mantendo tudo acessível e bem categorizado.</p>
            </div>
            <div class="target-audience-card">
              <h3>Grupos de Estudo</h3>
              <p>Times de estudo que trocam fotos de anotações entre si e precisam de uma forma rápida de
                encontrar o conteúdo certo sem se perder em pastas desorganizadas.</p>
            </div>
          </div>
        </section>

        <section class="benefits-content" id="benefits">
          <h2>Benefícios ao ser um <span class="highlight">Organizer.</span></h2>

          <div class="benefits-cards">
            <div class="benefits-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 59 59" fill="none">
                <path
                  d="M29.5 14.7501V29.5001L39.3333 34.4167M54.0833 29.5001C54.0833 43.0771 43.077 54.0834 29.5 54.0834C15.923 54.0834 4.91663 43.0771 4.91663 29.5001C4.91663 15.9231 15.923 4.91675 29.5 4.91675C43.077 4.91675 54.0833 15.9231 54.0833 29.5001Z"
                  stroke="#0B4DE5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h3>Organização Inteligente</h3>
              <p>O aplicativo identifica e separa automaticamente fotos de caderno, lousa e documentos, deixando
                tudo mais organizado e fácil de encontrar.</p>
            </div>
            <div class="benefits-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 59 59" fill="none">
                <path
                  d="M12.2917 51.625C10.9396 51.625 9.77188 51.1538 8.78854 50.2115C7.84618 49.2281 7.375 48.0604 7.375 46.7083V12.2917C7.375 10.9396 7.84618 9.79236 8.78854 8.85C9.77188 7.86667 10.9396 7.375 12.2917 7.375H46.7083C48.0604 7.375 49.2076 7.86667 50.15 8.85C51.1333 9.79236 51.625 10.9396 51.625 12.2917V46.7083C51.625 48.0604 51.1333 49.2281 50.15 50.2115C49.2076 51.1538 48.0604 51.625 46.7083 51.625H12.2917ZM12.2917 46.7083H46.7083V12.2917H12.2917V46.7083ZM14.75 41.7917H44.25L35.0313 29.5L27.6563 39.3333L22.125 31.9583L14.75 41.7917ZM12.2917 46.7083V12.2917V46.7083Z"
                  fill="#0B4DE5" />
              </svg>
              <h3>Proatividade nos Estudos</h3>
              <p>Facilita encontrar conteúdos rapidamente, permitindo que você se concentre mais nos estudos e
                menos na busca por materiais.</p>
            </div>
            <div class="benefits-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 59 59" fill="none">
                <path
                  d="M49.1666 22.1251L31.9583 4.91675H14.7499C13.4459 4.91675 12.1954 5.43475 11.2733 6.35681C10.3513 7.27886 9.83325 8.52943 9.83325 9.83342V49.1668C9.83325 50.4707 10.3513 51.7213 11.2733 52.6434C12.1954 53.5654 13.4459 54.0834 14.7499 54.0834H44.2499C45.5539 54.0834 46.8045 53.5654 47.7265 52.6434C48.6486 51.7213 49.1666 50.4707 49.1666 49.1668V22.1251ZM31.9583 4.91675V22.1251H49.1666"
                  stroke="#0B4DE5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h3>Melhor Qualidade e Acesso às Anotações</h3>
              <p>Melhora a qualidade das suas anotações, tornando-as mais legíveis e acessíveis a qualquer
                momento, em qualquer lugar.</p>
            </div>
          </div>
        </section>

        <section class="gallery-content" id="gallery">
          <h2>Veja o <span class="highlight">Organizer</span> em ação</h2>
          <p>Uma prévia visual da solução desenvolvida pela equipe.</p>
          <div class="gallery-grid">
            <figure class="gallery-item">
              <img src="src/assets/imgs/home.png" alt="Tela inicial do aplicativo Organizer" />
              <figcaption>Tela inicial</figcaption>
            </figure>
            <figure class="gallery-item">
              <img src="src/assets/imgs/folders.png" alt="Organização automática de fotos por categoria" />
              <figcaption>Organização automática</figcaption>
            </figure>
            <figure class="gallery-item">
              <img src="src/assets/imgs/notes.png" alt="Acesso às anotações organizadas" />
              <figcaption>Acesso às anotações</figcaption>
            </figure>
          </div>
        </section>

        <section class="tutorial-content" id="tutorial">
          <h2>Como funciona o <span class="highlight">Organizer</span></h2>
          <div class="tutorial-cards">
            <div class="tutorial-card">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 59 59" fill="none">
                  <path d="M29.0753 19.3834V9.69165H19.3835" stroke="#0B4DE5" stroke-width="5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M43.6128 19.3835H14.5375C11.8612 19.3835 9.69165 21.5531 9.69165 24.2294V43.613C9.69165 46.2893 11.8612 48.4588 14.5375 48.4588H43.6128C46.2892 48.4588 48.4587 46.2893 48.4587 43.613V24.2294C48.4587 21.5531 46.2892 19.3835 43.6128 19.3835Z"
                    stroke="#0B4DE5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.84595 33.9211H9.69183" stroke="#0B4DE5" stroke-width="5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M48.4587 33.9211H53.3046" stroke="#0B4DE5" stroke-width="5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M36.3442 31.4983V36.3442" stroke="#0B4DE5" stroke-width="5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M21.8064 31.4983V36.3442" stroke="#0B4DE5" stroke-width="5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <h3>Primeiro Contato</h3>
                <p>Ao entrar pela primeira vez, o Organizer fará perguntas para conhecer o seu usuário, partindo
                  desse contexto para identificar quais fotos deverá organizar para cada pasta, conforme a
                  preferência do usuário.</p>
              </div>
            </div>
            <div class="tutorial-card">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 59 59" fill="none">
                  <path
                    d="M54.0834 46.7083C54.0834 48.0123 53.5654 49.2629 52.6434 50.1849C51.7213 51.107 50.4707 51.625 49.1667 51.625H9.83341C8.52943 51.625 7.27886 51.107 6.35681 50.1849C5.43475 49.2629 4.91675 48.0123 4.91675 46.7083V12.2917C4.91675 10.9877 5.43475 9.73711 6.35681 8.81506C7.27886 7.893 8.52943 7.375 9.83341 7.375H22.1251L27.0417 14.75H49.1667C50.4707 14.75 51.7213 15.268 52.6434 16.1901C53.5654 17.1121 54.0834 18.3627 54.0834 19.6667V46.7083Z"
                    stroke="#0B4DE5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3>Organização por temas</h3>
                <p>Diferente da galeria de fotos, a do Organizer é voltada 100% a fotos voltadas a
                  estudo/trabalho, por conta disso o aplicativo separa as fotos por temas, sendo ajustável
                  para atender as necessidades do usuário.</p>
              </div>
              <img src="src/assets/imgs/tutorial-image.png" alt="Ilustração da organização por temas no Organizer" />
            </div>
          </div>
        </section>

        <section class="team-content" id="team">
          <h2>Conheça a <span class="highlight">equipe IRIS</span></h2>
          <p>As pessoas responsáveis por desenvolver essa solução.</p>
          <div class="team-grid">
            <div class="team-card">
              <h3>Flávia Camerim de Sousa</h3>
              <span class="team-role">Back-End</span>
            </div>
            <div class="team-card">
              <h3>João Pedro Nóbrega Pereira</h3>
              <span class="team-role">Front-End</span>
            </div>
            <div class="team-card">
              <h3>Kevin Simões de Souza Lima</h3>
              <span class="team-role">Front-End</span>
            </div>
            <div class="team-card">
              <h3>Luan Sá Muniz dos Santos</h3>
              <span class="team-role">Back-End</span>
            </div>
            <div class="team-card">
              <h3>Manuella Sousa Thomazini</h3>
              <span class="team-role">Back-End</span>
            </div>
          </div>
        </section>

        <section class="login-invite" id="login-invite">
          <div class="login-invite-content">
            <img src="src/assets/imgs/organizer_icon.png" alt="Ícone do Organizer" />
            <h2>Pronto para organizar suas anotações?</h2>
            <p>Faça o login na landing page do Organizer para ser informado quando o aplicativo ficar disponível.</p>
            <a href="src/pages/form.html" class="button-link">Registrar</a>
          </div>
        </section>

        <section class="contact-content" id="contact">
          <h2>Fale com a <span class="highlight">nossa equipe</span></h2>
          <p>Dúvidas, sugestões ou interesse no projeto? Fale com a gente.</p>
          <div class="contact-grid">
            <div class="contact-info">
              <div class="contact-info-item">
                <h3>E-mail</h3>
                <p><a href="mailto:contato@organizer.com">contato@organizer.com</a></p>
              </div>
              <div class="contact-info-item">
                <h3>Redes Sociais</h3>
                <p>
                  <a href="https://github.com/kevin-simoes/organizer-landingpage" target="_blank" rel="noopener">GitHub</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 IRIS. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App
