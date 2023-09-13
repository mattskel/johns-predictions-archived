import React, {useState} from 'react'
import {create} from './api-prospective.js'

export default function NewProspective(props) {
  const [values, setValues] = useState({});
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
      <h1>New Prospective</h1>
      <form onSubmit={handleSubmit}>
      <input onChange={(e) => setValues({...values, title: e.target.value})} value={values.title} />
      <button type="submit">Add</button>
      </form>
    </div>
  )
}