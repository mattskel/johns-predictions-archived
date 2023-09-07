/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

export const CollectionContext = createContext(null);
export const CollectionDispatchContext = createContext(null);

export const collectionReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return {
        collection: action.payload,
      };
    case 'DELETE':
      return {
        collection: state.collection.filter((doc) => doc._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export function CollectionContextProvider({ children }) {
  const [state, dispatch] = useReducer(collectionReducer, {
    collection: [],
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CollectionContext.Provider value={{ ...state }}>
      <CollectionDispatchContext.Provider value={dispatch}>
        {children}
      </CollectionDispatchContext.Provider>
    </CollectionContext.Provider>
  );
}
