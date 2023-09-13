import React, {useState, useEffect} from 'react'
import { Redirect } from "react-router-dom";
import {update, read} from './api-prospective.js'

export default function EditProspective({match}) {
  const [values, setValues] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read(match.params, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setValues(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.prospectiveId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit')
    const {title} = values || {};
    const prospective = {title};
    update(match.params, prospective).then((data) => {
      if (data.error) {
        console.log(data.error);
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', redirect: true });
      }
    });
  }

  if (values.redirect) {
    return <Redirect to={"/admin/prospective/" + match.params.prospectiveId} />;
  }

  return (
    <div>
      {/* <h1>{values.title}</h1> */}
      <form onSubmit={handleSubmit}>
      <input onChange={(e) => setValues({...values, title: e.target.value})} value={values.title || ''} />
      <button type="submit">Update</button>
      </form>
    </div>
  )
}