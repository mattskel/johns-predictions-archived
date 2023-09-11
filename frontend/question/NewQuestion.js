import React, {useState} from 'react'
import {create} from './api-question.js'
import { Redirect } from 'react-router-dom';


export default function NewQuestion(props) {
  // const [text, setText] = useState('');
  // const [option, setOption] = useState('');
  const {match} = props || {};
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState({
    error: '',
    redirect: false,
    option: '',
    text: '',
  });

  // const handleOptionChange = (e) => {
  //   setOption(e.target.value);
  // }

  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // }

  const handleChange = (key) => (e) => {
    // setText(e.target.value);
    setValues({ ...values, [key]: e.target.value })
  }

  const handleSubmit = (e) => {
    console.log('handleSubmit')
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
      <form onSubmit={handleSubmit}>
      <h1>New Question</h1>
      <input type="text" onChange={handleChange('text')} value={values.text}/>
      <button type="submit">Add question</button>
      </form>
      <div>
      {options && options.map((option, index) => (
          <div key={index}>
            {option}
            <button onClick={() => setOptions(options.filter((o, i) => i !== index))}>Delete</button>
          </div>
      ))}
      </div>
      <input type="text" onChange={handleChange('option')} value={values.option}/>
      <button onClick={() => setOptions([...options, values.option])}>Add option</button>
    </div>
  )
}
