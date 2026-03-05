🔐 Auth Starter Template

Sistema completo de autenticação Fullstack utilizando React, Node.js, Express, Prisma e PostgreSQL.

Projeto desenvolvido com foco em boas práticas, arquitetura organizada e segurança, servindo como template inicial para novos sistemas que precisam de autenticação com JWT.

🎥 Demo
![Demo do sistema](frontend/assets/demo.gif)

## 🚀 Live Demo
https://auth-starter-template.vercel.app/

🚀 Tecnologias Utilizadas

![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

📌 Sobre o Projeto

Este projeto implementa um sistema completo de autenticação, incluindo:


✅ Cadastro de usuários

✅ Login com geração de JWT

✅ Senha criptografada com Bcrypt

✅ Middleware de autenticação

✅ Proteção de rotas privadas

✅ Integração completa Frontend + Backend

✅ Estrutura preparada para deploy


Ele pode ser utilizado como base para diversos tipos de aplicações, como:

Sistemas administrativos

Dashboards

ERPs

Aplicações SaaS

Sistemas internos

🏗 Arquitetura do Projeto

auth-starter-template
│

├── backend

│   ├── controllers

│   ├── middleware

│   ├── routes

│   ├── prisma

│   └── src/server.js

│

└── frontend

    ├── pages
    
    ├── services
    
    └── App.jsx

Arquitetura organizada por responsabilidades seguindo boas práticas de API REST.

🔐 Fluxo de Autenticação

1️⃣ Usuário realiza cadastro	

2️⃣ Senha é criptografada com Bcrypt

3️⃣ Login gera Token JWT

4️⃣ Middleware valida o token

5️⃣ Rotas protegidas exigem autenticação

📡 API Endpoints
🔹 Registrar Usuário

POST /api/auth/register

Body:

{
  
  "name": "Henrique",
  
  "email": "henrique@email.com",
  
  "password": "123456"

}
🔹 Login

POST /api/auth/login

Body:

{

  "email": "henrique@email.com",
  
  "password": "123456"

}

Resposta:

{

  "token": "jwt_token_aqui"

}

🔹 Perfil do Usuário

GET /api/users/me

Headers:

Authorization: Bearer TOKEN
⚙️ Como Rodar o Projeto
1️⃣ Clonar o Repositório
git clone https://github.com/seuusuario/auth-starter-template.git
🔹 Backend
cd backend
npm install

Criar arquivo .env:

DATABASE_URL="sua_string_postgres"
JWT_SECRET="sua_chave_secreta"
PORT=3001

Gerar Prisma Client:

npx prisma generate

Rodar migrations:

npx prisma migrate dev

Iniciar servidor:

npm run dev

API rodando em:

http://localhost:3001
🔹 Frontend
cd frontend
npm install
npm run dev

Criar .env:

VITE_API_URL=http://localhost:3001

Aplicação rodando em:

http://localhost:5173
🌎 Deploy

Projeto preparado para deploy em produção.

Frontend hospedado no Vercel

Backend hospedado no Render

Banco de dados PostgreSQL (Neon)

🎯 Objetivo do Projeto

Este projeto foi desenvolvido para consolidar conhecimentos em:

Arquitetura Fullstack

Autenticação segura com JWT

Criptografia de senha

Integração API REST

Deploy em produção

Organização profissional de projetos

👨‍💻 Autor

Henrique Bernardo

Full Stack Developer
React • Node.js • PostgreSQL • APIs REST

⭐ Se este projeto te ajudou ou você gostou, considere dar uma estrela no repositório.
