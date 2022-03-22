import { GiReceiveMoney } from 'react-icons/gi';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';

const Login = () => (
  <div className="h-full w-full flex flex-col items-center justify-center">
    <div className="flex flex-col items-center justify-center">
      <GiReceiveMoney />
      <form className="flex flex-col items-center justify-center">
        <div className="w-80 flex items-center border rounded-md">
          <AiOutlineUser />
          <input type="text" autoComplete="off" placeholder="USUÁRIO" className="flex-1 rounded-md outline-none" />
        </div>
        <div className="w-80 flex items-center border rounded-md">
          <AiOutlineLock />
          <input placeholder="SENHA" className="flex-1 rounded-md outline-none" />
        </div>
        <button type="button">LOGIN</button>
      </form>
      <span className="self-end">Esqueceu sua senha?</span>
    </div>
  </div>
);

export default Login;
