import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

function Dashboard() {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            navigate("/")
            return
        }

        const fetchUser = async () => {
            try {
                const response = await api.get("/api/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                setUser(response.data)

            } catch (error) {
                localStorage.removeItem("token")
                navigate("/")
            }
        }

        fetchUser()
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <div style={{ padding: "40px", color: "white", background: "#0f172a", minHeight: "100vh" }}>
            <h1>Dashboard</h1>

            {user ? (
                <>
                    <p><strong>Nome:</strong> {user.nome}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Perfil:</strong> {user.perfil}</p>

                    <button 
                        onClick={handleLogout}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            background: "#ef4444",
                            border: "none",
                            borderRadius: "6px",
                            color: "white",
                            cursor: "pointer"
                        }}
                    >
                        Sair
                    </button>
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    )
}

export default Dashboard