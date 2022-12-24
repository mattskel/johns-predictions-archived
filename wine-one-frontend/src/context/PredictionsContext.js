import { createContext, useReducer } from 'react';
export const PredictionsContext = createContext();

export const predictionsReducer = (state, action) => {
  switch(action.type) {
    case 'SET_PREDICTIONS':
      return {
        predictions: action.payload
      }
    default:
      return state;  
  }
};

export const PredictionsContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(predictionsReducer, {
    predictions: null
  });

  return (
    <PredictionsContext.Provider value={{...state, dispatch}}>
      {children}
    </PredictionsContext.Provider>
  )
}