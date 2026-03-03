const { z } = require('zod');

const registerSchema = z.object({
    nome:   z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
    email:  z.string().email("E-mail inválido"),
    senha:  z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    perfil: z.string().optional()
})

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "Senha inválida")
});

module.exports = { registerSchema, loginSchema };