import PropTypes from 'prop-types';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

function RequireAuth({ isAdmin }) {
  const { user } = useAuthContext();
  const location = useLocation();

  return (
    // eslint-disable-next-line no-nested-ternary
    !user
      ? <Navigate to="/login" state={{ from: location }} replace />
      : isAdmin && !user.isAdmin
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Outlet />
  );
}

RequireAuth.propTypes = {
  isAdmin: PropTypes.bool,
};

RequireAuth.defaultProps = {
  isAdmin: false,
};

export default RequireAuth;