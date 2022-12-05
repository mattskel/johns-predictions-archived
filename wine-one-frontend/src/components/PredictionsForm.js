import {useState, useEffect} from 'react';
import { useQuestionsContext } from '../hooks/useQuestionsContext';
import { QuestionsContextProvider } from '../context/QuestionsContext';
// import PredictionInput from './PredictionInput'


const PredictionInput = (({question, onChange, value}) => {
  // const [prediction, setPrediction] = useState('');
  return (
    <div className="prediction-container">
      <label>{question.text}</label>
      {/* <select value={prediction} onChange={(e) => setPrediction(e.target.value)}> */}
      <select value={value || ""} onChange={onChange} id={question._id}>
      <option value="" disabled="disabled">Select an option</option>
      {question.options && question.options.map((option) => (
        <option value={option} key={option}>{option}</option>
      ))}
      </select>
      
      {/* <input 
        type="text" 
        className="prediction"
        value={prediction}
        onChange={(e) => setPrediction(e.target.value)}
      /> */}
    </div>
  )
});

export default function PredictionsForm() {
  const {questions, dispatch} = useQuestionsContext();
  const prospectiveId = '638b2bb468447d08f7496271'
  const [predictions, setPredictions] = useState({});
  // const questions = [{_id: '1', text: 'What are you going to do today?'}];
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.dir(predictions);
  };

  const onPredictionChange = (event) => {
    const prediction = event.target.value;
    const questionId = event.target.id
    setPredictions({
      ...predictions,
      [questionId]: prediction
    })
  }

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
          <PredictionInput 
            key={question._id}
            question={question}
            onChange={onPredictionChange}
            value={predictions[question._id]}
          />
        ))}
        </QuestionsContextProvider>

        <button>Submit form</button>
    </form>
  )
}