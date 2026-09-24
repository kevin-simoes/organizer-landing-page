import { useState } from "react";
import { LucideSquareArrowRightExit, Sun, Moon } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";

const Dashboard = () => {
  // Definindo a função de logout do hook personalizado (useAuth)
  const { logout } = useAuth();

  const [registros, setRegistros] = useState(() => {
    const salvarRegistro = localStorage.getItem("registrations");

    // Se houver registros salvos, transforma em JSON
    // Se não houver, retorna um array vazio
    return salvarRegistro ? JSON.parse(salvarRegistro) : [];
  });
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <div className="flex flex-col gap-5 p-10 dark:bg-(--background-color-dark) dark:text-white">
        <span className="flex justify-between">
          <span className="flex gap-4">
            <h2>Dashboard</h2>
            <button
            onClick={toggleTheme}
            className="rounded-lg p-2 transition-colors cursor-pointer hover:bg-(--background-color-dark)/10 dark:hover:bg-(--background-color)/10"
            aria-label="Alternar modo escuro"
                    >
            {darkMode ? <Sun /> : <Moon />}
                    </button>
          </span>
      <button
          onClick={logout} // chama a função de logout
          className=" bg-red-300  text-red-600 rounded-md w-fit h-fit p-2  hover:bg-red-400 hover:text-white cursor-pointer tex  transition-colors flex gap-2 items-center"
        >
          <LucideSquareArrowRightExit className="w-5 h-5"/>
          Sair
        </button>
        </span>
        <hr className="border-0.5 border-gray-300 dark:border-gray-600"></hr>
        <div className="flex gap-2 overflow-auto">
          <span>
            Total de estudantes:{" "}
            <b>{registros.filter((registro) => registro.profile === "estudante").length}</b>
          </span>
          <span>
            Total de professores:{" "}
            <b>{registros.filter((registro) => registro.profile === "professor").length}</b>
          </span>
          <span>
            Total de profissionais:{" "}
            <b>{registros.filter((registro) => registro.profile === "profissional").length}</b>
          </span>
          <span>
            Total de usuários gerais:{" "}
            <b>{registros.filter((registro) => registro.profile === "usuario geral").length}</b>
          </span>
          </div>
        <hr className="border-0.5 border-gray-300 dark:border-gray-600"></hr>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Registros de Usuários</h3>
          <span className="text-sm text-gray-500">
            <b>Total de registros: {registros.length}</b>
          </span>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="border border-gray-300 dark:border-gray-600">
                <th className="border border-gray-300 dark:border-gray-600">Nome e Sobrenome</th>
                <th className="border border-gray-300 dark:border-gray-600">Email</th>
                <th className="border border-gray-300 dark:border-gray-600">Você é</th>
                <th className="border border-gray-300 dark:border-gray-600">
                  Como conheceu a Organizer
                </th>
                <th className="border border-gray-300 dark:border-gray-600">
                  O que mais te empolga no aplicativo
                </th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro) => (
                <tr key={registro.createdAt} className="text-center">
                  <td className="border border-gray-300 dark:border-gray-600">{registro.username}</td>
                  <td className="border border-gray-300 dark:border-gray-600">{registro.email}</td>
                  <td className="border border-gray-300 dark:border-gray-600">{registro.profile}</td>
                  <td className="border border-gray-300 dark:border-gray-600">{registro.discovery}</td>
                  <td className="border border-gray-300 dark:border-gray-600">{registro.excited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
