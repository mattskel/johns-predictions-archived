import { useEffect } from 'react';
import useQuestionsContext from '../hooks/useQuestionsContext';
import useAuthContext from '../hooks/useAuthContext';
import List from '../components/List';

// Components
// import QuestionDetails from '../components/QuestionDetails';
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

  const handleClick = async (questionId) => {
    // console.log(questionId);
    const response = await fetch(`api/questions/${questionId}`, {
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
    <div className="questions-container">
      <div className="questions">
        {/* {questions && questions.map((question) => (
          <QuestionDetails key={question._id} question={question} />
        ))} */}
        <List
          collection={questions}
          textKey="text"
          titleKey="text"
          handleClick={handleClick}
        />
      </div>
      <QuestionForm />
    </div>
  );
}

export default Questions;
