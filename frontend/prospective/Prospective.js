import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { read } from './api-prospective.js';
import { listForProspective } from '../question/api-question.js';
import {Link} from 'react-router-dom'

function Prospective(props) {
  const [prospective, setProspective] = useState({});
  const [questions, setQuestions] = useState([]);
  const {match} = props || {};
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read(match.params, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setProspective(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listForProspective(match.params, signal).then((data) => {
      console.log('data', data)
      if (data && data.error) {
        console.log(data.error);
      } else {
        setQuestions(data);
      }
    });
  }, [match.params.prospectiveId]);

  return (
    <div className="prospective">
      {prospective && prospective._id && (
        <div>
          <div>
            <Typography variant="h6" color="inherit" display="inline">
            {prospective.title}
            </Typography>
            <Link to={"/admin/prospective/edit/" + prospective._id} display="inline">
              Edit
            </Link>
          </div>

          <Divider />
          
          {questions && questions.map((question) => (
            <div key={question._id}>
              {question.text}
              <Link to={"/admin/question/edit/" + question._id}>edit</Link>
            </div>
            
          ))}
          <Link to={"/admin/question/new/" + prospective._id}>
            <button color="primary" variant="contained">
              Add question
            </button>
          </Link>
        </div>
      )}
    </div>

  );
}

export default Prospective;
