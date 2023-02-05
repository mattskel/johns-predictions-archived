/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

function PredictionInput({
  question, onChange, value, className,
}) {
  return (
    <div className="prediction-container">
      <label>{question.text}</label>
      <select value={value || ''} onChange={onChange} id={question._id} className={className}>
        <option value="" disabled="disabled">Select an option</option>
        {question.options && question.options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default function PredictionsForm() {
  // There is no need to use context for the questions
  // The questions don't change so the page doesn't need to reload
  const [questions, setQuestions] = useState([]);
  const prospectiveId = '638b2bb468447d08f7496271';
  // Can prepopulate the predictions
  // Look up the user and prospective and return all predictions (if they exist)
  const [predictions, setPredictions] = useState({});
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { user } = useAuthContext();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/prospectives/${prospectiveId}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(predictions),
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      return;
    }

    setError(null);
    setEmptyFields([]);
    setSubmitted(true);

    // Go to the confirmation page
  };

  const onPredictionChange = (event) => {
    const prediction = event.target.value;
    const questionId = event.target.id;
    setPredictions({
      ...predictions,
      [questionId]: prediction,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${user.token}`,
      };
      const questionsResponse = await fetch(`/api/questions?prospectiveId=${prospectiveId}`, { headers });
      const questionsJson = await questionsResponse.json();
      if (!questionsResponse.ok) {
        return;
      }

      setQuestions(questionsJson);

      const predictionsResponse = await fetch(`/api/predictions?prospectiveId=${prospectiveId}`, { headers });
      const predictionsJson = await predictionsResponse.json();
      if (predictionsResponse.ok) {
        const initialPredictions = predictionsJson.reduce((accumulator, currentValue) => {
          const { questionId, prediction } = currentValue;
          return {
            ...accumulator,
            [questionId]: prediction,
          };
        }, {});
        setPredictions(initialPredictions);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  if (submitted) {
    return (
      <div className="confirmation">
        <span>Form submitted. </span>
        <Link to="/">Return home.</Link>
      </div>
    );
  }

  return (

    <form onSubmit={handleSubmit} className="predictions">
      {questions && questions.map((question) => (
        <PredictionInput
          key={question._id}
          question={question}
          onChange={onPredictionChange}
          value={predictions[question._id]}
          className={emptyFields.includes(question._id) ? 'error' : ''}
        />
      ))}

      <button type="button">Submit form</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
