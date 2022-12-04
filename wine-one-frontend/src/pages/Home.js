// Components
import PredictionsForm from '../components/PredictionsForm';
import { QuestionsContextProvider } from '../context/QuestionsContext';

const Home = () => {

  return (
    <div className="home">
      Welcome!
      <div className="predictions">
      <QuestionsContextProvider>
        <PredictionsForm />
      </QuestionsContextProvider>
      </div>
    </div>
  )
}

export default Home;