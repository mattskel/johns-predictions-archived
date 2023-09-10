/*
 * clearJWT in frontend/auth/auth-helper.js
import useAuthContext from './useAuthContext';

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    // remove user from storat
    localStorage.removeItem('user');

    // dispatch logout action
    dispatch({ type: 'LOGIN' });
  };

  return { logout };
};

export default useLogout;
*/
