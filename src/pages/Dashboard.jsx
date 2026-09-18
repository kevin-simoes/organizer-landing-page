import { useState } from "react";
import { LucideSquareArrowRightExit } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  // Definindo a função de logout do hook personalizado (useAuth)
  const { logout } = useAuth();

  const [registros, setRegistros] = useState(() => {
    const salvarRegistro = localStorage.getItem("registrations");

    // Se houver registros salvos, transforma em JSON
    // Se não houver, retorna um array vazio
    return salvarRegistro ? JSON.parse(salvarRegistro) : [];
  });

  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        <span className="flex justify-between">
          <h2>Dashboard</h2>
      <button
          onClick={logout} // chama a função de logout
          className=" bg-red-300  text-red-600 rounded-md w-fit h-fit p-2  hover:bg-red-400 hover:text-white cursor-pointer tex  transition-colors flex gap-2 items-center"
        >
          <LucideSquareArrowRightExit className="w-5 h-5"/>
          Sair
        </button>
        </span>
        <hr className="border-0.5 border-gray-300"></hr>
        <div className="flex gap-2">
          <span>
            Total de estudantes:{" "}
            <b>{registros.filter((registro) => registro.profile === "student").length}</b>
          </span>
          <span>
            Total de professores:{" "}
            <b>{registros.filter((registro) => registro.profile === "teacher").length}</b>
          </span>
          <span>
            Total de profissionais:{" "}
            <b>{registros.filter((registro) => registro.profile === "worker").length}</b>
          </span>
          <span>
            Total de usuários gerais:{" "}
            <b>{registros.filter((registro) => registro.profile === "general").length}</b>
          </span>
          </div>
        <hr className="border-0.5 border-gray-300"></hr>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Registros de Usuários</h3>
          <span className="text-sm text-gray-500">
            <b>Total de registros: {registros.length}</b>
          </span>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="border border-gray-300">
              <th className="border border-gray-300">Nome e Sobrenome</th>
              <th className="border border-gray-300">Email</th>
              <th className="border border-gray-300">Você é</th>
              <th className="border border-gray-300">
                Como conheceu a Organizer
              </th>
              <th className="border border-gray-300">
                O que mais te empolga no aplicativo
              </th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro) => (
              <tr key={registro.id} className="text-center">
                <td className="border border-gray-300">{registro.username}</td>
                <td className="border border-gray-300">{registro.email}</td>
                <td className="border border-gray-300">{registro.profile}</td>
                <td className="border border-gray-300">{registro.discovery}</td>
                <td className="border border-gray-300">{registro.excited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
