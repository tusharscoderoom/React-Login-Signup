import './styles/App.css';
import Login from './components/login/Login';
import { Signup } from './components/sign-up/Signup';
import { AuthUser_Context } from './contexts/AuthUser-context';
import { useContext } from 'react';

function App() {
  const { isValidUser } = useContext(AuthUser_Context);

  return (
    <div className='max-w-full w-screen min-w-[80%] min-h-[80%] h-screen grid place-content-center p-6'>
      {isValidUser ? <Login /> : <Signup />}
    </div>
  )
}

export default App;
