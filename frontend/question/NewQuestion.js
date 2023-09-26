import React, {useState} from 'react'
import {create} from './api-question.js'
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';


export default function NewQuestion(props) {
  const {match} = props || {};
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState({
    error: '',
    redirect: false,
    option: '',
    text: '',
  });

  const handleChange = (key) => (e) => {
    setValues({ ...values, [key]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {text} = values || {};
    const question = {
      text: text || undefined,
      options: options || undefined,
    }
    create(match.params, question).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', redirect: true });
      }
    });
  }

  if (values.redirect) {
    return <Redirect to={'/admin/prospective/' + match.params.prospectiveId} />;
  }

  return (
    <div>
      <Typography variant="h6" color="inherit">
      New Question
      </Typography>
      <Divider />
      <br />
      <form onSubmit={handleSubmit}>
        Question:
        <div>
          <input 
          type="text" 
          style={{width: '500px'}}
          onChange={handleChange('text')} value={values.text}/>
        </div>
        <br />
      Options: 
      <div>
      {options && options.map((option, index) => (
        <div key={index}>
            {option}
            <button onClick={() => setOptions(options.filter((o, i) => i !== index))}>Delete</button>
          </div>
      ))}
      </div>
      <div>

      <input type="text" onChange={handleChange('option')} value={values.option}/>
      <button onClick={() => setOptions([...options, values.option])}>Add option</button>
      </div>
      <br />
      <div>
        <Link to={'/admin/prospective/' + match.params.prospectiveId}>
          <button >
            Cancel
          </button>
        </Link>
        <button type="submit">Add question</button>
      </div>
      </form>
    </div>
  )
}
