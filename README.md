<div align="center">
    <h1>
        <picture>
        <img src="./src/assets/organizer_icon.png" alt="Logo do Organizer">
        </picture><br>
        Organizer LandingPage
    </h1>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
    <img src="https://img.shields.io/badge/Framer-000000?style=for-the-badge&logo=framer&logoColor=white">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>

## 📖 Sobre o Projeto

O **Organizer** é uma aplicação web para organização e gerenciamento de informações do dia a dia. O projeto é uma **evolução da Landing Page desenvolvida na Sprint 03** (HTML, CSS e JavaScript), que agora foi integrada ao **React**. Ele não é uma aplicação independente: parte da proposta, do visual e do formulário já criados anteriormente.

A aplicação possui páginas públicas, login com **JWT** consumindo uma **API própria**, uma **rota privada** para o Dashboard e armazenamento de registros no `localStorage`.

> Projeto acadêmico desenvolvido para a **FIAP** (Sprint 4 — Front-End Design + Web Development).

## 🌐 Links

| Item | Link |
|------|------|
| Deploy (Vercel) | [Organizer Landingpage](https://organizer-landing-page-seven.vercel.app/) |
| Repositório (GitHub) | [organizer-landing-page — Sprint 4](https://github.com/kevin-simoes/organizer-landing-page) |
| Landing Page original (Sprint 03) | [organizer-landingpage — Sprint 3](https://github.com/kevin-simoes/organizer-landingpage) |

## ✨ Funcionalidades

- Landing Page com seções animadas (Framer Motion) e modo claro/escuro
- Formulário de pré-registro (`/formulario`)
- Página de login com autenticação via JWT
- Rota privada para o Dashboard, com redirecionamento de usuários não autenticados
- Logout
- Dashboard com exibição dos registros cadastrados no formulário
- Registros, tema e token JWT armazenados no `localStorage`
- Layout responsivo (desktop, tablet e celular)
- Consumo de API própria para autenticação

## 🛠️ Tecnologias Utilizadas

**Frontend:** React, JavaScript, Vite, React Router DOM, Tailwind CSS, Framer Motion, Lucide React, React Hooks, Custom Hooks, LocalStorage

**API / Backend:** Node.js, Express (execução local), Vercel Serverless Functions (produção), CORS, JSON Web Token (JWT)

**Deploy:** Git + GitHub + Vercel

## 🏗️ Estrutura do Projeto

```bash
organizer-landing-page/
├── api/
│   └── login.js            <-- Serverless Function (usada na Vercel)
│
├── backend/
│   ├── auth.js             <-- Lógica de login compartilhada (valida usuário e gera o JWT)
│   ├── server.js           <-- Servidor Express (usado só no ambiente local)
│   └── package.json
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/         <-- NavBar, PrivateRoute, UserMenu, etc.
│   ├── hooks/
│   │   ├── useAuth.js      <-- Custom Hook de autenticação
│   │   └── useTheme.js     <-- Custom Hook de tema claro/escuro
│   ├── pages/              <-- Home, Formulario, Login, Dashboard
│   ├── sections/           <-- Seções da Landing Page
│   ├── App.jsx
│   └── main.jsx
│
├── vercel.json             <-- Rewrites do SPA (rotas do React Router)
├── vite.config.js          <-- Inclui o proxy de /api/login para o ambiente local
├── package.json
├── README.md
└── INTEGRANTES.TXT         <-- Nomes completos e RMs dos integrantes
```

## 🧭 Rotas

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | Pública | Página inicial (Landing Page) |
| `/login` | Pública | Página de login |
| `/formulario` | Pública | Página de pré-registro |
| `/dashboard` | **Privada** | Dashboard (exige token no `localStorage`) |

A proteção é feita pelo componente `PrivateRoute`, que usa a prop `children` para receber e renderizar o conteúdo protegido:

```jsx
<PrivateRoute>
    <Dashboard />
</PrivateRoute>
```

## 🧩 Conceitos de React Aplicados

- **Componentização:** o código é dividido em componentes com responsabilidades específicas (`NavBar`, `Login`, `Dashboard`, `PrivateRoute`, seções da Landing Page), o que facilita a organização, a reutilização e a manutenção.
- **Props:** o `PrivateRoute` utiliza `children` para renderizar apenas o conteúdo que o usuário tem permissão de acessar. Outros componentes, como `AudienceCard`, `InfiniteSlider` e `Tilt`, também recebem props para customizar conteúdo e comportamento.
- **Rotas públicas e privadas:** configuradas com React Router DOM (`/`, `/login` e `/formulario` são públicas; `/dashboard` é privada).
- **Hooks nativos:** `useState` e `useEffect` controlam estado, efeitos colaterais e comportamento dos componentes (por exemplo, a persistência dos registros do formulário e do tema no `localStorage`).
- **Hooks customizados**, que separam a lógica da parte visual:
  - **`useAuth`** (`src/hooks/useAuth.js`): faz login, armazena e remove o token, faz logout, verifica se o usuário está autenticado e redireciona entre `/login` e `/dashboard`.
  - **`useTheme`** (`src/hooks/useTheme.js`): controla o modo claro/escuro e persiste a preferência no `localStorage`.

## 🔐 Autenticação e API

O projeto consome uma **API própria** de autenticação, com o endpoint `POST /api/login`. O front-end sempre chama `/api/login`; quem responde depende do ambiente:

| Ambiente | Quem responde | Observação |
|----------|---------------|------------|
| **Produção (Vercel)** | Serverless Function em `api/login.js` | Usa a variável de ambiente `JWT_SECRET` |
| **Local** | Servidor Express em `backend/server.js` (porta `3001`) | O Vite redireciona `/api/login` para o Express por meio de um proxy configurado no `vite.config.js` |

A lógica de autenticação (validar usuário e gerar o JWT) fica em `backend/auth.js` e é reaproveitada pelos dois ambientes.

O frontend envia:

```json
{
  "username": "organizer",
  "password": "organizer"
}
```

Se as credenciais forem válidas, a API retorna um **JWT** (validade de 1 hora), que é salvo no `localStorage` e usado para liberar o acesso à rota privada. Se forem inválidas, retorna o status `401` com uma mensagem de erro.

### Credenciais de teste

| Usuário | Senha |
|---------|-------|
| `organizer` | `organizer` |

## 💾 LocalStorage

| Chave | Conteúdo |
|-------|----------|
| `registrations` | Registros do formulário |
| `token` | Token JWT obtido no login |
| `theme` | Preferência de tema (claro/escuro) |

Os dados ficam **apenas no navegador utilizado**.

## 📱 Responsividade e Tailwind CSS

O **Tailwind CSS** foi utilizado para estilizar a interface e criar layouts responsivos para **desktop, tablet e celular**. Em telas menores, a Navbar exibe um **menu hamburger**.

## 🤖 Uso de Inteligência Artificial

Utilizamos ferramentas de IA como **apoio** durante a Sprint 4, principalmente para: revisar se o projeto atendia aos requisitos da entrega, orientar a configuração do deploy na Vercel (Serverless Function para o login, `vercel.json` e variável de ambiente), corrigir avisos do ESLint e revisar este README. O código foi analisado, testado e adaptado pelo grupo, e as decisões de arquitetura e funcionalidades foram tomadas pelos integrantes.

## 🚀 Como Instalar

**Pré-requisitos:** [Node.js](https://nodejs.org/) (versão **22 LTS ou superior** recomendada, exigência do Vite) e Git.

```bash
# 1. Clonar o repositório
git clone https://github.com/kevin-simoes/organizer-landing-page

# 2. Entrar na pasta do projeto
cd organizer-landing-page

# 3. Instalar as dependências do frontend
npm install

# 4. Entrar na pasta do backend e instalar as dependências
cd backend
npm install

# 5. Voltar para a pasta principal
cd ..
```

> O frontend e o backend têm `package.json` próprios, por isso as dependências são instaladas separadamente. As principais dependências do backend são `express`, `cors` e `jsonwebtoken`.

## ▶️ Como Executar (ambiente local)

São necessários **dois terminais** abertos ao mesmo tempo, ambos na pasta do projeto.

**Terminal 1 — Backend (API de login):**

```bash
cd backend
npm start
```

O backend ficará disponível em `http://localhost:3001`.

**Terminal 2 — Frontend:**

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local (geralmente `http://localhost:5173`).

> Não é necessário configurar a variável `JWT_SECRET` localmente: o backend usa um valor padrão de desenvolvimento.

### Passo a passo para testar

1. Inicie o backend e o frontend
2. Acesse o endereço do Vite no navegador
3. Vá para `/formulario` e preencha o formulário (isso gera registros para o Dashboard)
4. Vá para `/login`
5. Entre com o usuário `organizer` e a senha `organizer`
6. Você será redirecionado para o `/dashboard`, onde os registros do formulário aparecem na tabela
7. Teste o botão **Sair** e tente acessar `/dashboard` novamente: você deve ser redirecionado para o `/login`

### Testando pelo deploy

Basta acessar o [link do deploy](https://organizer-landing-page-seven.vercel.app/) e seguir o mesmo passo a passo a partir do item 3. Nenhuma instalação é necessária.

## ☁️ Deploy na Vercel

O deploy é feito automaticamente a partir do repositório no GitHub. Configurações importantes:

- **`vercel.json`:** redireciona todas as rotas (exceto `/api/*`) para o `index.html`, para que as rotas do React Router funcionem ao abrir a URL diretamente ou atualizar a página.
- **`api/login.js`:** Serverless Function que atende `POST /api/login`.
- **Variável de ambiente `JWT_SECRET`:** deve ser configurada em *Settings → Environment Variables* no painel da Vercel.

## 👥 Integrantes

Segue abaixo os integrantes do grupo **IRIS**:

<ul>
  <li><strong>Flávia Camerim de Sousa</strong> — RM: 570979</li>
  <li><strong>João Pedro Nóbrega Pereira</strong> — RM: 570322</li>
  <li><strong>Kevin Simões de Souza Lima</strong> — RM: 571942</li>
  <li><strong>Luan Sá Muniz dos Santos</strong> — RM: 569136</li>
  <li><strong>Manuella Sousa Thomazini</strong> — RM: 573606</li>
</ul>

Os nomes completos e RMs também estão no arquivo `INTEGRANTES.TXT`, na raiz do projeto.