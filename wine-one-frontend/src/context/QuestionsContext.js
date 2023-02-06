import { createContext, useReducer } from 'react';

export const QuestionsContext = createContext();

export const questionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        questions: action.payload,
      };
    case 'CREATE_QUESTION':
      return {
        questions: [action.payload, ...state.questions],
      };
    case 'DELETE_QUESTION':
      return {
        questions: state.questions.filter((question) => question._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function QuestionsContextProvider({ children }) {
  const [state, dispatch] = useReducer(questionsReducer, {
    questions: [],
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <QuestionsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  );
}
