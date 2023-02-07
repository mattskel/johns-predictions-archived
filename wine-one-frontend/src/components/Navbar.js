import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import useAuthContext from '../hooks/useAuthContext';
import Button from './button';

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Johns predictions</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              {/* <button type="button" onClick={handleClick}>Log out</button> */}
              <Button type="button" handleClick={handleClick}><span>Log out</span></Button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>

  );
}

export default Navbar;
