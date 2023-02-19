import { useContext } from 'react';
import { QuestionsContext, QuestionsDispatchContext } from '../context/QuestionsContext';

export const useQuestions = () => {
  // This hook returns the value of the context
  // Which is the value being passed into the provider component
  const context = useContext(QuestionsContext);

  // Check we are within the scope of the context
  if (!context) {
    throw Error('useQuestionsContext must be used inside a QuestionsContextProvider');
  }

  return context;
};

export const useQuestionsDispatch = () => {
  const context = useContext(QuestionsDispatchContext);
  if (!context) {
    throw Error('useQuestionsDispatch must be used inside a QuestionsContextProvider');
  }

  return context;
};
