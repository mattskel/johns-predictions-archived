import { useContext } from 'react';
import { PredictionsContext } from '../context/PredictionsContext';

const usePredictionsContext = () => {
  // This hook returns the value of the context
  // Which is the value being passed into the provider component
  const context = useContext(PredictionsContext);

  // Check we are within the scope of the context
  if (!context) {
    throw Error('usePredictionsContext must be used inside a PredictionsContextProvider');
  }

  return context;
};

export default usePredictionsContext;
