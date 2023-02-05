/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import useQuestionsContext from '../hooks/useQuestionsContext';

function QuestionDetails({ question }) {
  const { dispatch } = useQuestionsContext();

  const handleClick = async () => {
    const response = await fetch(`api/questions/${question._id}`, {
      method: 'DELETE',
    });

    const json = await response.json();
    if (response.ok) {
      dispatch({ type: 'DELETE_QUESTION', payload: json });
    }
  };

  return (
    <div className="question-details">
      <h4>{question.text}</h4>
      <p>{formatDistanceToNow(new Date(question.createdAt), { addSuffix: true })}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
}

export default QuestionDetails;
