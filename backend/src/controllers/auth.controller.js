const { registerUser, loginUser } = require('../services/auth.service');
const { registerSchema, loginSchema } = require('../validators/auth.validator');

const register = async (req, res) => {
  try {
    const data = registerSchema.parse(req.body);

    const user = await registerUser(data);

    res.status(201).json({
      message: 'Usuário criado com sucesso',
      userId: user.id
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const data = loginSchema.parse(req.body);

    const { user, token } = await loginUser(data);

    res.json({
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        perfil: user.perfil
      }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };