import { useEffect } from 'react';
import { useQuestionsContext } from '../hooks/useQuestionsContext';
import { useAuthContext } from '../hooks/useAuthContext';

// Components
import QuestionDetails from '../components/QuestionDetails';
import QuestionForm from '../components/QuestionForm';

function Questions() {
  const { questions, dispatch } = useQuestionsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('/api/questions', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_QUESTIONS', payload: json });
      }
    };

    if (user) {
      fetchQuestions();
    }
  }, [dispatch, user]);

  return (
    <div className="questions-container">
      <div className="questions">
        {questions && questions.map((question) => (
          <QuestionDetails key={question._id} question={question} />
        ))}
      </div>
      <QuestionForm />
    </div>
  );
}

export default Questions;
