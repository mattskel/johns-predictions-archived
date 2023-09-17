import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';
import {read, update} from './api-question.js'
import { Redirect, Link } from 'react-router-dom';

export default function EditQuestion(props) {
  const {match} = props || {};
  const [question, setQuestion] = useState({
    options: [],
    text: '',
    answer: '',
  });
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState({
    error: '',
    redirect: false,
    option: '',
    answer: '',
  });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read(match.params, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        // setOptions(data.options);
        setQuestion(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [match.params]);

  useEffect(() => {
    setOptions(question.options);
  }, [question]);

  const handleValuesChange = (key) => (e) => {
    setValues({ ...values, [key]: e.target.value })
  }

  const handleQuestionChange = (key) => (e) => {
    setQuestion({ ...question, [key]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    update(match.params, {...question, options}).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', redirect: true });
      }
    });
  }

  if (values.redirect) {
    return <Redirect to={'/admin/prospective/' + question.prospectiveId} />;
  }

  return (
    <div>
      <Typography variant="h6" color="inherit" display="inline">
        Edit
      </Typography>
      <Divider />
      <br />
      <form onSubmit={handleSubmit}>
      <input 
        type="text"
        style={{width: '500px'}}
        onChange={handleQuestionChange('text')} 
        value={question && question.text}/>
      <br />
      Answer:
      <div>
      <select id="answer" value={question.answer} onChange={handleQuestionChange('answer')}>
        <option value="">Select...</option>
        {options && options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      </div>
      <br />
      <div>
      Options:
      {options && options.map((option, index) => (
        <div key={index}>
          {option}
          <button onClick={() => setOptions(options.filter((o, i) => i !== index))}>Delete</button>
        </div>
      ))}
      <input type="text" onChange={handleValuesChange('option')}/>
      <button onClick={() => setOptions([...options, values.option])}>Add option</button>
      </div>
      <br />
      <div>
        <Link to={"/admin/prospective/" + question.prospectiveId}>
          <button >
            Cancel
          </button>
        </Link>
        <button type="submit">Update question</button>
      </div>
      </form>
      

       
    </div>
  )
}