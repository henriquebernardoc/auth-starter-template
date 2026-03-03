import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api";
import './Cadastro.css'
function Cadastro() {
    const navigate = useNavigate()

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")

        try {
            await api.post("/api/auth/register", {
                nome,
                email,
                senha
            })

            setSuccess("Cadastro realizado com sucesso!")

            // opcional: redirecionar após 1.5s
            setTimeout(() => {
                navigate("/")
            }, 1500)

        } catch (err) {
            setError(err.response?.data?.message || "Erro ao cadastrar")
        }
    }
    return (
        <div className="container">
            <form className="form" onSubmit={handleRegister}>
                <h1>Cadastro</h1>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "lightgreen" }}>{success}</p>}
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Crie uma senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
                <p>
                    Já tem conta? <Link to="/">Entrar</Link>
                </p>
            </form>
        </div>
    )
}
export default Cadastro;