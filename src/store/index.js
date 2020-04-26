import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

const initialState = {};

const middleware = [thunk, routerMiddleware(history)],
  enhancers = [];

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );


export default () => {
  const store = createStore(rootReducer, initialState, composedEnhancers);
  return { store };
};
