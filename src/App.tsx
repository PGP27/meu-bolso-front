import { UsuarioProvider } from './contexts/UsuarioDataContext';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <UsuarioProvider>
      <Home />
    </UsuarioProvider>
  );
};

export default App;
