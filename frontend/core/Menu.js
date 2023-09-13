import React from 'react'
import { Link, withRouter } from 'react-router-dom';
// import useLogout from '../hooks/useLogout';
// import useAuthContext from '../hooks/useAuthContext';
// import Button from './button';
import auth from '../auth/auth-helper';

const Menu = withRouter(({history}) => {
  // const { logout } = useLogout();
  // const { user } = useAuthContext();

  const handleClick = () => {
    // logout();
    console.log('logout');
    auth.clearJWT(() => history.push('/'))
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Johns predictions</h1>
        </Link>
        <nav>
          {auth.isAuthenticated() && (
            <div>
              <span>{auth.isAuthenticated().user.email}</span>
              {auth.isAuthenticated().user.isAdmin && (
                <Link to="/admin/prospectives">Prospectives</Link>)}
              <Link to="/prospectives/published">Predictions</Link>  
              <button type="button" onClick={handleClick}>Log out</button>
              {/* <Button type="button" handleClick={handleClick}><span>Log out</span></Button> */}
            </div>
          )}
          {!auth.isAuthenticated() && (
            <div>
              <Link to="/signin">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>

  );
});

export default Menu;
