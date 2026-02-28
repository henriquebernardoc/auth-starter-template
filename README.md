# 🚀 Modelo de Autenticação Fullstack

Template base de autenticação fullstack com **React, Node.js, Express, Prisma e PostgreSQL**.  

Este projeto foi criado para servir como estrutura padrão de **login e cadastro com JWT**, podendo ser reutilizado como base para novos sistemas.

---

## 🛠 Tecnologias Utilizadas

### 🔹 Backend
- Node.js
- Express
- Prisma ORM (v5)
- PostgreSQL
- JWT (Autenticação)
- Bcrypt (Criptografia de Senha)
- CORS
- Dotenv

### 🔹 Frontend
- React
- Vite
- React Router DOM
- Axios

---

## 📁 Estrutura do Projeto
auth-starter-template/
│
├── backend/ # API Express com autenticação JWT
└── frontend/ # Aplicação React com layout e rotas protegidas

---

# ⚙️ Como Rodar o Projeto

## 📌 Pré-requisitos

- Node.js instalado
- PostgreSQL rodando
- Banco de dados criado

---

# 🔹 Configuração do Backend

1. Acesse a pasta:

```bash
cd backend

2. Instale as dependências:

npm install

3. Edite o arquivo .env baseado no exemplo abaixo:
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco"
JWT_SECRET="sua_chave_secreta"
PORT=3001

4. Gere o client do Prisma:
npx prisma generate

5. Execute as migrações:
npx prisma migrate dev --name init

6. Inicie o servidor:
npm run dev

📍 Backend rodando em:
http://localhost:3001

🔹 Configuração do Frontend

1. Acesse a pasta:

cd frontend

2. Instale as dependências:

npm install

3. Inicie o projeto:

npm run dev

📍 Frontend rodando em:
http://localhost:5173

Funcionalidades

✅ Cadastro de usuário

✅ Login com autenticação JWT

✅ Senha criptografada com Bcrypt

✅ Middleware de proteção de rotas

✅ Rota protegida /api/me

✅ Layout com Sidebar, Header e Footer

✅ Controle básico de perfil de usuário

model User {
  id     Int    @id @default(autoincrement())
  nome   String
  email  String @unique
  senha  String
  perfil String
}

Rotas da API
🔹 Registro

POST /api/register

🔹 Login

POST /api/login

🔹 Perfil (Protegida)

GET /api/me

Objetivo do Projeto

Este projeto serve como template base de autenticação para acelerar o desenvolvimento de novos sistemas fullstack.

Pode ser utilizado como ponto de partida para:

Sistemas administrativos

Dashboards

ERPs

Aplicações SaaS

Projetos de portfólio

Melhorias Futuras

 Refresh Token

 Recuperação de senha

 Controle de permissões por perfil

 Docker

 Deploy em produção