import { createContext, useReducer } from 'react';

export const PredictionsContext = createContext();

export const predictionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PREDICTIONS':
      return {
        predictions: action.payload,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function PredictionsContextProvider({ children }) {
  const [state, dispatch] = useReducer(predictionsReducer, {
    predictions: null,
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PredictionsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PredictionsContext.Provider>
  );
}
