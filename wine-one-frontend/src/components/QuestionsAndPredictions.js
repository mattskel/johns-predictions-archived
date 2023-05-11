import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import withBreadcrumbs from './withBreadcrumbs';

function QuestionsAndPredictions() {
  const [questionsAndPredictions, setQuestionsAndPredictions] = useState([]);
  const { prospectiveId } = useParams();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    fetch(`/api/prospectives/${prospectiveId}/questions-and-predictions`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => response.json())
      .then((response) => setQuestionsAndPredictions(response));
  }, []);
  return (
    <div>
      <table className="fill-available">
        <tbody className="alternating-background-color">
          {questionsAndPredictions.map((questionAndPrediction) => {
            let result;
            if (questionAndPrediction.answer !== undefined) {
              result = (questionAndPrediction.answer === questionAndPrediction.prediction)
                ? '✅'
                : '❌';
            }
            return (
              <tr key={questionAndPrediction.questionId}>
                <td>{questionAndPrediction.text}</td>
                <td>{questionAndPrediction.prediction}</td>
                <td colSpan="{questionAndPrediction.answer === undefined ? 2 : 1}">
                  {questionAndPrediction.answer || <i>No answer</i>}
                </td>
                {questionAndPrediction.answer && <td>{result}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const QuestionsAndPredictionsWithBreadcrumbs = withBreadcrumbs(QuestionsAndPredictions);
export default QuestionsAndPredictionsWithBreadcrumbs;
