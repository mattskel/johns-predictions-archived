import { useState } from 'react';
import { useUsersContext } from '../hooks/useUsersContext';

const UserForm = () => {
  const {dispatch} = useUsersContext();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault() // prevents page refresh

    const user = {username, email, password}
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      return;
    }

    setUsername('');
    setEmail('');
    setPassword('');
    setError(null);
    setEmptyFields([]);
    console.log('new user added', json);
    dispatch({type: 'CREATE_USER', payload: json});
  }

  return (
    <form action="create" onSubmit={handleSubmit}>
      <h3>Add a new user</h3>

      <label>Username:</label>
      <input 
        type="text" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username}
        className={emptyFields.includes('username') ? 'error' : ''}
      />
      
      <label>Email:</label>
      <input 
        type="text" onChange={(e) => setEmail(e.target.value)} value={email}
        className={emptyFields.includes('email') ? 'error' : ''}
      />

      <label>Password:</label>
      <input 
        type="password" onChange={(e) => setPassword(e.target.value)} value={password}
        className={emptyFields.includes('password') ? 'error' : ''}
      />

      <button>Add user</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default UserForm;