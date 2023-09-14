import React, {useState, useEffect} from 'react';
import auth from '../auth/auth-helper';
import { Redirect } from "react-router-dom";
import { listForProspective } from '../question/api-question.js';
import { predictionsForProspective, createPredictions } from './api-prediction.js';

function Predictions(props) {
  const {match} = props || {};
  const [questions, setQuestions] = useState([]);
  const [predictions, setPredictions] = useState({});
  const [redirect, setRedirect] = useState(false);
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
        setPredictions(data.reduce((acc, prediction) => {
          acc[prediction.questionId] = prediction.prediction;
          return acc;
        }, {}));
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

  const handlePredictionChange = (questionId) => (event) => {
    const prediction = event.target.value;
    console.log('prediction', prediction)
    console.log('questionId', questionId)
    setPredictions({
      ...predictions,
      [questionId]: prediction,
    });

  }

  const handleSumbmitClick = () => {
    const prospectiveId = match.params.prospectiveId;
    const userId = jwt.user._id;
    createPredictions({prospectiveId, userId}, null, predictions).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setRedirect(true);
      }
    });
  }

  if (redirect) {
    return <Redirect to="/prospectives/published/" />;
  }

  return (
    <div>
      {questions && questions.map((question) => (
        <div key={question._id}>
          {question.text}
          <select value={predictions[question._id] || ""} onChange={handlePredictionChange(question._id)}>
            <option value="">Select...</option>
            {question.options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleSumbmitClick}>Submit your answers</button>
    </div>
  )
}

export default Predictions;