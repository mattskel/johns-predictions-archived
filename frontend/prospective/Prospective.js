import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { read } from './api-prospective.js';
import { listForProspective } from '../question/api-question.js';

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
          <h3>{prospective.title}</h3>
          {questions && questions.map((question) => (
            <div key={question._id}>{question.text}</div>
          ))}
          <button type="button">Add question</button>
        </div>
      )}
    </div>

  );
}

export default Prospective;
