import { useContext } from 'react';
import { UsersContext } from '../context/UserContext';

const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw Error('useUserContext must be used inside a UsersContextProvider');
  }

  return context;
};

export default useUsersContext;
