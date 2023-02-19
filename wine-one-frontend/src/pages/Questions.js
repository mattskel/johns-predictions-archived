// Components
import QuestionForm from '../components/QuestionForm';
import QuestionsList from '../components/QuestionsList';

function Questions() {
  return (
    <div className="questions-container">
      <QuestionsList />
      <QuestionForm />
    </div>
  );
}

export default Questions;
