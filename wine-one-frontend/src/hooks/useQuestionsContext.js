import { useContext } from 'react';
import { QuestionsContext } from '../context/QuestionsContext';

export const useQuestionsContext = () => {
  // This hook returns the value of the context
  // Which is the value being passed into the provider component
  const context = useContext(QuestionsContext);

  // Check we are within the scope of the context
  if (!context) {
    throw Error('useQuestionsContext must be used inside a QuestionsContextProvider');
  }

  return context;
};
