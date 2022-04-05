import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => (
  <div className="flex flex-col shadow-md">
    <div className="flex items-center p-4 ">
      <GiReceiveMoney fontSize={24} />
      <h1 className="ml-4 text-">Meu bolso</h1>
    </div>
    <div className="flex-1 flex flex-col items-start justify-between p-4">
      <div className="flex-1 flex flex-col items-start">
        <button>Visão Geral</button>
        <button>Contas</button>
        <button>Transações</button>
      </div>
      <button><AiOutlineUser /></button>
    </div>
  </div>
);

export default NavBar;
