 import {useLocation, Navigate, Outlet} from 'react-router-dom';
 import { useAuthContext } from '../hooks/useAuthContext';
 const RequireAuth = ({isAdmin}) => {
  const {user} = useAuthContext();
  const location = useLocation();

  return (
    !user
      ? <Navigate to="/login" state={{from: location}} replace />
      : isAdmin && !user.isAdmin
        ? <Navigate to="/unauthorized" state={{from: location}} replace />
        : <Outlet />
  )
 }

 export default RequireAuth;