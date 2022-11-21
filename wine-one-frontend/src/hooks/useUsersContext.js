import { UsersContext } from '../context/UserContext';
import { useContext } from 'react';

export const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw Error('useUserContext must be used inside a UsersContextProvider');
  }

  return context;
}