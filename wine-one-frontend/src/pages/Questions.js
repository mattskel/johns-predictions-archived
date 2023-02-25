import { Route, Routes, useParams } from 'react-router-dom';

// Components
import QuestionForm from '../components/QuestionForm';
import QuestionsList from '../components/QuestionsList';
import Generic from './Generic';
import { CollectionContextProvider } from '../context/CollectionContext';

function Questions() {
  const { prospectiveId } = useParams();
  return (
    <Routes>
      <Route path="/" element={<QuestionsList />} />
      <Route path="new" element={<QuestionForm prospectiveId={prospectiveId} />} />
      <Route
        path="options/:questionId/*"
        element={
          <CollectionContextProvider><Generic parent="question" textKey="text" /></CollectionContextProvider>
        }
      />
    </Routes>
  );
}

export default Questions;
