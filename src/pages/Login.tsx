import { GiReceiveMoney } from 'react-icons/gi';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';

const Login = () => (
  <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-600 to-green-900 text-white">
    <div className="flex flex-col items-center justify-center">
      <div className="mb-12 flex flex-col items-center">
        <h1 className="text-4xl mb-12">Meu bolso</h1>
        <GiReceiveMoney color="white" fontSize={100} />
      </div>
      <form className="flex flex-col items-center justify-center">
        <div
          className="w-80 py-1 px-4 my-2 flex items-center border rounded-md"
          onClick={() => document.getElementById('input-text')?.focus()}
        >
          <AiOutlineUser color="white" fontSize={22} />
          <input
            id="input-text"
            type="text"
            autoComplete="off"
            placeholder="USUÁRIO"
            className="flex-1 p-2 rounded-md outline-none bg-transparent placeholder-white"
          />
        </div>
        <div
          className="w-80 py-1 px-4 my-2 flex items-center border rounded-md"
          onClick={() => document.getElementById('input-password')?.focus()}
        >
          <AiOutlineLock color="white" fontSize={22} />
          <input id="input-password" type="password" placeholder="SENHA" className="flex-1 p-2 rounded-md outline-none bg-transparent placeholder-white" />
        </div>
        <button type="button" className="w-full shadow-lg py-3 mt-10 mb-4 rounded-md bg-white text-green-900 transition hover:opacity-75">LOGIN</button>
      </form>
      <button className="self-end hover:underline underline-offset-2">Esqueceu sua senha?</button>
    </div>
  </div>
);

export default Login;
