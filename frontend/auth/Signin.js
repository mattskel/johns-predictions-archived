/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Redirect } from 'react-router-dom';
// import useLogin from '../hooks/useLogin';
// import useAuthContext from '../hooks/useAuthContext';
import { signin } from './api-auth.js';
import auth from './auth-helper';

function Signin(props) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const { login, error, isLoading } = useLogin();
  const [values, setValues] = useState({
    password: '',
    email: '',
    error: '',
    redirectToReferrer: false,
  });

  // const navigate = useNavigate();
  // const location = useLocation();
  // const { state } = location || {};
  // const { from = '/home' } = state || {};

  // const { user } = useAuthContext();

  // useEffect(() => {
  //   if (user) {
  //     navigate(from, { replace: true });
  //   }
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // await login(email, password);
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    }

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        auth.authenticate(data, () => {
          setValues({ ...values, error: '',redirectToReferrer: true})
        })
      }
    })
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
  }
  const {redirectToReferrer} = values
  if (redirectToReferrer) {
      return (<Redirect to={from}/>)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log in</h3>
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

      <button type="submit">Log in</button>
      {values.error && <div className="error">{values.error}</div>}
    </form>

  );
}

export default Signin;
