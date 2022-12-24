import { useState, useEffect } from 'react'
import { useLogin } from '../hooks/useLogin';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading} = useLogin();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const {user} = useAuthContext();

  useEffect(() => {
    if (user) {
      navigate(from, {replace: true})
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <label>Email:</label>
      <input 
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Pasword:</label>
      <input 
        type="password"
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>

  )
}

export default Login;