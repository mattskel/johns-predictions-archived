import { createContext, useReducer } from 'react';

export const QuestionsContext = createContext();

export const questionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        questions: action.payload
      }
    case 'CREATE_QUESTION':
      return {
        questions: [action.payload, ...state.questions]
      }
    default:
      return state  
  }
}

export const QuestionsContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(questionsReducer, {
    questions: null
  })

  return (
    <QuestionsContext.Provider value={{...state, dispatch}}>
      {children}
    </QuestionsContext.Provider>
  )
}