import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      // Remove o token salvo no navegador
      localStorage.removeItem("token");
  
      // Volta para a tela de login
      navigate("/login");
    };
    
  return (
    <>
      <h1>Dashboard</h1>
      <button
            onClick={handleLogout} // chama a função de logout
            className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Sair
          </button>
    </>
  )
}

export default Dashboard
