## 🎥 Demo
![Demo do sistema](frontend/assets/demo.gif)

![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

🔐 auth-starter-template
📌 Sobre o Projeto

Sistema completo de autenticação Fullstack desenvolvido com foco em arquitetura profissional, segurança e boas práticas.

Inclui:

Cadastro de usuário

Login com JWT

Proteção de rotas

Middleware de autenticação

Integração frontend + backend

Estrutura preparada para produção

🚀 Tecnologias Utilizadas
Backend

Node.js

Express

Prisma ORM (v5)

PostgreSQL

JWT (Json Web Token)

Bcrypt

Frontend

React (Vite)

Axios

CSS

🏗 Arquitetura

auth-system
├── backend
│ ├── controllers
│ ├── middleware
│ ├── routes
│ ├── prisma
│ └── server.js
│
└── frontend
├── pages
├── services
└── App.jsx

Arquitetura separada por responsabilidades seguindo padrão REST.

🔐 Fluxo de Autenticação

Usuário realiza cadastro

Senha é criptografada com Bcrypt

Login gera token JWT

Token é validado em middleware

Rotas protegidas exigem autenticação

⚙️ Como rodar o projeto
1️⃣ Clonar repositório
git clone https://github.com/seuusuario/auth-fullstack-system.git

2️⃣ Backend
cd backend
npm install
npx prisma migrate dev
npm run dev

Criar arquivo .env:
DATABASE_URL="sua_string_postgres"
JWT_SECRET="sua_chave_secreta"
PORT=3001

3️⃣ Frontend
cd frontend
npm install
npm run dev

Criar .env:
VITE_API_URL=http://localhost:3001

🌎 Deploy
Backend: Render
Frontend: Vercel

Projeto pronto para produção.

📌 Objetivo

Este projeto foi desenvolvido para consolidar conhecimentos em:

Arquitetura Fullstack

Autenticação segura

Integração API REST

Deploy em produção

👨‍💻 Autor

Henrique Bernardo
Full Stack Developer
React • Node.js • PostgreSQL
