import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import auth from '../auth/auth-helper';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}

const Menu = withRouter(({history}) => {

  const handleClick = () => {
    auth.clearJWT(() => history.push('/'))
  };

  return (
    <AppBar position="static">
      <Toolbar >
        <Link to="/">
          <Typography variant="h6" color="inherit">
            Johns predictions
          </Typography>
        </Link>
        {auth.isAuthenticated() && (
          <>
            {auth.isAuthenticated().user.isAdmin && (
              <Link to="/admin/prospectives">
                <Button style={isActive(history, "/admin/prospectives")}>
                  Prospectives
                </Button>
              </Link>)}
            <Link to="/prospectives/published">
              <Button style={isActive(history, "/prospectives/published")}>
                Predictions
              </Button>
            </Link>

            <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
              <span>{auth.isAuthenticated().user.email}</span>
              <Button type="button" onClick={handleClick}>Log out</Button>
            </span></div>
          </>
        )}
        {!auth.isAuthenticated() && (
          <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
            <Link to="/signin">Login</Link>
            <Link to="/signup">Signup</Link>
          </span></div>
        )}
      </Toolbar>
    </AppBar>

  );
});

export default Menu;
