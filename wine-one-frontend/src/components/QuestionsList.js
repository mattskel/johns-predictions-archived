import { useEffect } from 'react';
import { useQuestions, useQuestionsDispatch } from '../hooks/useQuestionsContext';
import useAuthContext from '../hooks/useAuthContext';
import List from './List';

function QuestionsList() {
  const { user } = useAuthContext();

  const { questions } = useQuestions();
  const dispatch = useQuestionsDispatch();

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

  const deleteQuestion = async (questionId) => {
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
    <div className="questions">
      <List
        collection={questions}
        textKey="text"
        titleKey="text"
        deleteItem={(questionId) => deleteQuestion(questionId)}
      />
    </div>
  );
}

export default QuestionsList;
