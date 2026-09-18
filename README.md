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
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
</div>

## 📖 Sobre o Projeto

O **Organizer** é uma aplicação web para organização e gerenciamento de informações do dia a dia. O projeto é uma **evolução da Landing Page desenvolvida em um Sprint anterior** (HTML, CSS e JavaScript), que agora foi adaptada para **React**. Ele não é uma aplicação independente: parte da proposta, do visual e do formulário já criados anteriormente.

A aplicação possui páginas públicas, login com **JWT**, uma **rota privada** para o Dashboard e armazenamento de registros no `localStorage`.

> Projeto acadêmico desenvolvido para a **FIAP**.
## 🌐 Links

| Item | Link |
|------|------|
| Deploy (Vercel) | [Organizer Landingpage](https://organizer-landing-page-seven.vercel.app/) |
| Repositório (GitHub) | [organizer-landingpage Sprint 4](https://github.com/kevin-simoes/organizer-landing-page) |
| Landing Page original (Sprint anterior) | [organizer-landingpage Sprint 3](https://github.com/kevin-simoes/organizer-landingpage) |

## ✨ Funcionalidades

- Página de login com autenticação via JWT
- Rota privada para o Dashboard, com redirecionamento de usuários não autenticados
- Logout
- Dashboard com exibição dos registros cadastrados
- Registros e token JWT armazenados no `localStorage`
- Layout responsivo (desktop, tablet e celular)
- Integração entre frontend React e backend Express

## 🛠️ Tecnologias Utilizadas

**Frontend:** React, JavaScript, Vite, React Router DOM, Tailwind CSS, React Hooks, Custom Hooks, LocalStorage

**Backend:** Node.js, Express, CORS, JSON Web Token (JWT)

## 🏗️ Estrutura do Projeto

```bash
Organizer/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   │   └── useAuth.js      <-- Custom Hook de autenticação
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│
├── backend/
│   ├── server.js           <-- Servidor Express (API de login)
│   ├── package.json
│   └── node_modules/
│
├── package.json
├── README.md
└── INTEGRANTES.TXT         <-- Nomes completos e RMs dos integrantes
```

## 🧭 Rotas

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | Pública | Página inicial |
| `/login` | Pública | Página de login |
| `/formulario` | Pública | Página de pré-registro |
| `/dashboard` | **Privada** | Dashboard (exige token válido no `localStorage`) |

A proteção é feita pelo componente `PrivateRoute`, que usa a prop `children` para receber e renderizar o conteúdo protegido:

```jsx
<PrivateRoute>
    <Dashboard />
</PrivateRoute>
```

## 🧩 Conceitos de React Aplicados

- **Componentização:** o código é dividido em componentes com responsabilidades específicas (`NavBar`, `Login`, `Dashboard`, `PrivateRoute`), o que facilita a organização, a reutilização e a manutenção.
- **Props:** o `PrivateRoute` utiliza `children` para renderizar apenas o conteúdo que o usuário tem permissão de acessar.
- **Hooks nativos:** `useState` (e `useEffect`, quando aplicável) controlam estado, efeitos e comportamento dos componentes.
- **Custom Hook — `useAuth`** (`src/hooks/useAuth.js`): separa a lógica de autenticação da parte visual. Responsável por fazer login, armazenar e remover o token, fazer logout, verificar se o usuário está autenticado e redirecionar entre `/login` e `/dashboard`.

## 🔐 Autenticação e API

O projeto possui uma **API própria** (Node.js + Express), localizada em `backend/` e usada principalmente para autenticação.

- **Arquivo principal:** `backend/server.js`
- **Porta:** `3001` — `http://localhost:3001`
- **Endpoint:** `POST /login`

O frontend envia:

```json
{
  "username": "organizer",
  "password": "organizer"
}
```

Se as credenciais forem válidas, a API retorna um **JWT**, que é salvo no `localStorage` e usado para liberar o acesso à rota privada.

### Credenciais de teste

| Usuário | Senha |
|---------|-------|
| `organizer` | `organizer` |

## 💾 LocalStorage

| Chave | Conteúdo |
|-------|----------|
| `registrations` | Registros do formulário |
| `token` | Token JWT obtido no login |

Os dados ficam **apenas no navegador utilizado**.

## 📱 Responsividade e Tailwind CSS

O **Tailwind CSS** foi utilizado para estilizar a interface e criar layouts responsivos para **desktop, tablet e celular**. Em telas menores, a Navbar exibe um **menu hamburger**.

## 🚀 Como Instalar

**Pré-requisitos:** [Node.js](https://nodejs.org/) (versão LTS) e Git.

```bash
# 1. Clonar o repositório
git clone https://github.com/kevin-simoes/organizer-landing-page

# 2. Entrar na pasta do projeto
cd Organizer

# 3. Instalar as dependências do frontend
npm install

# 4. Entrar na pasta do backend e instalar as dependências
cd backend
npm install
```

> O frontend e o backend têm `package.json` próprios (são projetos Node diferentes), por isso as dependências são instaladas separadamente. As principais dependências do backend são `express`, `cors` e `jsonwebtoken`.

## ▶️ Como Executar

São necessários **dois terminais** abertos ao mesmo tempo.

**Terminal 1 — Frontend** (na pasta principal):

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local (geralmente `http://localhost:5173`).

**Terminal 2 — Backend:**

```bash
cd backend
npm start
```

O backend ficará disponível em `http://localhost:3001`.

### Passo a passo para testar

1. Inicie o frontend e o backend
2. Acesse o endereço do Vite no navegador
3. Vá para `/login`
4. Entre com o email `organizer` e senha `organizer`
5. Você será redirecionado para o `/dashboard`

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