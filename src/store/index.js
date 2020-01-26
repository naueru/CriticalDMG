import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const initialState = {};

const middleware = [thunk],
  enhancers = [];

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );


export default () => {
  const store = createStore(rootReducer, initialState, composedEnhancers);
  return { store };
};
