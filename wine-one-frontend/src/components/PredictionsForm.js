import {useState, useEffect} from 'react';
import { useQuestionsContext } from '../hooks/useQuestionsContext';
import { QuestionsContextProvider } from '../context/QuestionsContext';
// import PredictionInput from './PredictionInput'


const PredictionInput = (({question}) => {
  const [prediction, setPrediction] = useState('');
  return (
    <div className="prediction-container">
      <label>{question.text}</label>
      <input 
        type="text" 
        className="prediction"
        value={prediction}
        onChange={(e) => setPrediction(e.target.value)}
      />
    </div>
  )
});

export default function PredictionsForm() {
  const {questions, dispatch} = useQuestionsContext();
  const prospectiveId = '638b2bb468447d08f7496271'
  // const questions = [{_id: '1', text: 'What are you going to do today?'}];
  const handleSubmit = () => {

  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(`/api/questions?prospectiveId=${prospectiveId}`)
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_QUESTIONS', payload: json});
      }
    }

    fetchQuestions();
  }, [dispatch]);

  return (
    
    <form onSubmit={handleSubmit} className="predictions">
      <QuestionsContextProvider>
        {questions && questions.map((question) => (
          <PredictionInput key={question._id} question={question} />
        ))}
        </QuestionsContextProvider>
    </form>
  )
}