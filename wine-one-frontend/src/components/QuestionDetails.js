/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import useQuestionsContext from '../hooks/useQuestionsContext';
import useAuthContext from '../hooks/useAuthContext';

function QuestionDetails({ question }) {
  const { dispatch } = useQuestionsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    const response = await fetch(`api/questions/${question._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
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

QuestionDetails.propTypes = {
  question: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuestionDetails;
