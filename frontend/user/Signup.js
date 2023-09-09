/* eslint-disable jsx-a11y/label-has-associated-control */
import {create} from './api-user.js';
import React, { useState } from 'react';
// import useSignup from '../hooks/useSignup';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'

function Signup() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [values, setValues] = useState({
    password: '',
    email: '',
    username: '',
    open: false,
    error: '',
  });
  // const { signup, isLoading, error } = useSignup();


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
   }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await signup(email, password);
  // };
  const handleSubmit = (e) => {
    // Without this the page will reload
    e.preventDefault();
    const user = {
      username: values.username || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };
    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', open: true });
      }
    });
  };

  return (<div>
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <label>Name:</label>
      <input
        type="username"
        onChange={handleChange('username')}
        value={values.username}
      />
      <label>Email:</label>
      <input
        type="email"
        onChange={handleChange('email')}
        value={values.email}
      />
      <label>Pasword:</label>
      <input
        type="password"
        onChange={handleChange('password')}
        value={values.password}
      />

      <button type="submit">Submit</button>
      {values.error && <div className="error">{values.error}</div>}
    </form>
    <Dialog open={values.open} disableBackdropClick={true}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/signin">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              Sign In
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
  </div>
  );
}

export default Signup;
