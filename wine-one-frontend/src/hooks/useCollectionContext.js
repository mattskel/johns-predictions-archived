import { useContext } from 'react';
import { CollectionContext, CollectionDispatchContext } from '../context/CollectionContext';

export const useCollectionContext = () => {
  const context = useContext(CollectionContext);
  if (!context) {
    throw Error('useCollectionContext must be used inside a CollectionDispatchContext');
  }

  return context;
};

export const useCollectionDispatch = () => {
  const context = useContext(CollectionDispatchContext);
  if (!context) {
    throw Error('useCollectionDispatch must be used inside a CollectionDispatchContext');
  }

  return context;
};
