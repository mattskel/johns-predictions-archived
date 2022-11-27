import { useEffect } from "react";
import { useUsersContext } from '../hooks/useUsersContext';
import { useAuthContext } from '../hooks/useAuthContext';

// Components
import UserDetails from '../components/UserDetails';
import UserForm from '../components/UserForm';

const Home = () => {
  const {users, dispatch} = useUsersContext();
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_USERS', payload: json});
      }
    }

    if (user) {
      fetchUsers();
    }

  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="users">
        {users && users.map((user) => (
          <UserDetails key={user._id} user={user} />
        ))}
      </div>
      <UserForm />  
    </div>
  )
}

export default Home;