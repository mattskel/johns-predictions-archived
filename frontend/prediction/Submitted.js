import React, {useState, useEffect} from 'react';
import auth from '../auth/auth-helper';
import { listForProspective } from '../question/api-question.js';
import { predictionsForProspective, createPredictions } from './api-prediction.js';

function predictionsSubmitted(props) {
  const {match} = props || {};
  const [questions, setQuestions] = useState([]);
  const [predictions, setPredictions] = useState({});
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const prospectiveId = match.params.prospectiveId;
    const userId = jwt.user._id;

    predictionsForProspective({prospectiveId, userId}, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        const initPredictions = data.reduce((acc, prediction) => {
          acc[prediction.questionId] = prediction.prediction;
          return acc;
        }, {});
        setPredictions(initPredictions);
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
        <div key={question._id}>
          {question.text}
          {predictions && 
            <span>
              {predictions[question._id]}
              {question.answer &&
                <>
                  {question.answer}
                  {predictions[question._id] === question.answer && "✅" }
                </>
              }
            </span>}
        </div>
      ))}
    </div>
  )
}

export default predictionsSubmitted;