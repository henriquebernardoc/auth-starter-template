const prisma = require('../config/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async ({ nome, email, senha, perfil }) => {
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) {
    throw new Error('E-mail já cadastrado');
  }

  const hashedPassword = await bcrypt.hash(senha, 10);

  const user = await prisma.user.create({
    data: {
      nome,
      email,
      senha: hashedPassword,
      perfil: perfil || 'USER'
    }
  });

  return user;
};

const loginUser = async ({ email, senha }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const validPassword = await bcrypt.compare(senha, user.senha);
  if (!validPassword) {
    throw new Error('Senha incorreta');
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, perfil: user.perfil },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return { user, token };
};

module.exports = { registerUser, loginUser };