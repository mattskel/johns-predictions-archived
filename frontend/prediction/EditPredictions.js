import React, {useState, useEffect} from 'react';
import auth from '../auth/auth-helper';
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';
import { Redirect, Link } from "react-router-dom";
import { listForProspective } from '../question/api-question.js';
import { predictionsForProspective, update } from './api-prediction.js';
import {read} from '../prospective/api-prospective.js';

function Predictions(props) {
  const {match} = props || {};
  const [questions, setQuestions] = useState([]);
  const [predictions, setPredictions] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [prospective, setProspective] = useState({});
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
  }, [match.params.prospectiveId]);

  const handlePredictionChange = (questionId) => (event) => {
    const prediction = event.target.value;
    setPredictions({
      ...predictions,
      [questionId]: prediction,
    });

  }

  const handleSumbmitClick = () => {
    const prospectiveId = match.params.prospectiveId;
    const userId = jwt.user._id;
    update({prospectiveId, userId}, {t: jwt.token}, predictions).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setRedirect(true);
      }
    });
  }

  if (redirect) {
    return <Redirect to="/prospectives/published/" />;
  }

  return (
    <div>
      <div className="predictions">
      <Typography variant="h6" color="inherit" display="inline">
        {prospective.title}
      </Typography> 
      <Divider />
      </div>
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
      <Link to="/prospectives/published">
          <button >
            Cancel
          </button>
        </Link>
      <button onClick={handleSumbmitClick}>Submit your answers</button>
    </div>
  )
}

export default Predictions;