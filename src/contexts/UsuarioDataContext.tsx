import { api } from '../services/index.service';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface UsuarioDataContextProps {
  // Usuario: Usuario,
  // contas: Conta[],
};

interface Usuario {
  id: string,
  nome: string,
  usuario: string,
  senha: string,
};

interface Conta {
  id: string,
  nome: string,
  usuario_id: string,
};

interface UsuarioProviderProps {
  children: ReactNode,
};

const UsuarioDataContext = createContext({} as UsuarioDataContextProps);

const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const [conta, setConta] = useState<Conta>({} as Conta);

  const getUsuarioData = async () => {
    
  };
  
  useEffect(() => {
    getUsuarioData();
  }, []);

  return(
    <UsuarioDataContext.Provider value={{  }}>
      {children}
    </UsuarioDataContext.Provider>
  );
};

const useUsuarioData = () => {
  const context = useContext(UsuarioDataContext);
  return context;
};

export {
  UsuarioProvider,
  useUsuarioData,
};
