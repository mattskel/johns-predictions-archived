import React, {useState, useEffect} from 'react';
import { listForProspective } from '../question/api-question.js';
import { predictionsForProspective } from './api-prediction.js';

function Predictions(props) {
  const {match} = props || {};
  const [questions, setQuestions] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    predictionsForProspective(match.params, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setPredictions(data);
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
      if (data && data.error) {
        console.log(data.error);
      } else {
        setQuestions(data);
      }
    });
  }, [match.params.prospectiveId]);

  return (
    <div>
      {questions && questions.map((question) => (
        <div key={question._id}>{question.text}</div>
      ))}
    </div>
  )
}

export default Predictions;