import React, {useState} from 'react'
import { Redirect } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {create} from './api-prospective.js'

export default function NewProspective(props) {
  const [values, setValues] = useState({title: '', error: '', redirect: false});
  const handleSubmit = (e) => {
    e.preventDefault();
    const {title} = values || {};
    const question = {title};
    create(undefined, question).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', redirect: true });
      }
    });
  }

  if (values.redirect) {
    return <Redirect to="/admin/prospectives/" />;
  }
  return (
    <div>
      <Typography variant="h6" color="inherit" display="inline">
        New prospective
      </Typography> 
      <Divider />
      <br />
      <form onSubmit={handleSubmit}>
        Title
        <div>
          <input
            id="title"
            onChange={(e) => setValues({...values, title: e.target.value})} 
            value={values.title} />
        </div>  
        <button>
          Ok
        </button>
      </form>
    </div>
  )
}