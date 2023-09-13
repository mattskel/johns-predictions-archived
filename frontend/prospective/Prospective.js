import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button'
// import { Outlet } from 'react-router-dom';
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
          <span>{prospective.title}</span>
          <Link to={"/admin/prospective/edit/" + prospective._id}>Edit</Link>
          
          {questions && questions.map((question) => (
            <div key={question._id}>{question.text}</div>
          ))}
          <Link to={"/admin/question/new/" + prospective._id}>
            <Button color="primary" variant="contained">
              Add question
            </Button>
          </Link>
        </div>
      )}
    </div>

  );
}

export default Prospective;
