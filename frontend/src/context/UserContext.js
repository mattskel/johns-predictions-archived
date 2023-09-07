import { createContext, useReducer } from 'react';

export const UsersContext = createContext();

export const usersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        users: action.payload,
      };
    case 'CREATE_USER':
      return {
        users: [action.payload, ...state.users],
      };
    case 'DELETE_USER':
      return {
        users: state.users.filter((user) => user._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function UsersContextProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, {
    users: null,
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UsersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
}
