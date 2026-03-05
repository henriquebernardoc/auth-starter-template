import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api";
import './login.css'

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
            const response = await api.post("/api/auth/login", {
                email,
                senha
            })

            const token = response.data.token

            // salvar token
            localStorage.setItem("token", token)

            // redirecionar (vamos criar dashboard depois)
            navigate("/dashboard")

        } catch (err) {
            setError(err.response?.data?.message || "Erro ao fazer login")
        } finally {
        setLoading(false)
    }
    }
return (
    <div className="container">
        <form className="form" onSubmit={handleLogin}>
            <h1>Login</h1>
            {error && <p style={{color: "red"}}>{error}</p> }
            <label>Email</label>
            <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha</label>
            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            <button type="submit" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>

            <p>
                Não tem cadastro? <Link to='/cadastro'>Clique aqui</Link>
            </p>
        </form>
    </div>
)
}
export default Login;
