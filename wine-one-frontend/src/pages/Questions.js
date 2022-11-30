import { useEffect } from "react";
import { useQuestionsContext } from '../hooks/useQuestionsContext';

// Components
import QuestionDetails from '../components/QuestionDetails';
import QuestionForm from '../components/QuestionForm';

const Questions = () => {
  const {questions, dispatch} = useQuestionsContext();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('/api/questions')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_QUESTIONS', payload: json});
      }
    }

    fetchQuestions();
  }, [dispatch]);

  return (
    <div className='questions-container'>
      <div className="questions">
        {questions && questions.map((question) => (
          <QuestionDetails key={question._id} question={question} />
        ))}
      </div>
      <QuestionForm />
    </div>
  )
}

export default Questions;