import { GiReceiveMoney } from "react-icons/gi";

const NavBar = () => (
  <div className="h-full shadow-md">
    <div className="flex items-center p-4 ">
      <GiReceiveMoney fontSize={24} />
      <h1 className="ml-4 text-">Meu bolso</h1>
    </div>
    <div className="flex flex-col items-start p-4">
      <button>Visão Geral</button>
      <button>Transações</button>
      <button>Configurações</button>
      <button>Perfil</button>
      <button>Sair</button>
    </div>
  </div>
);

export default NavBar;
