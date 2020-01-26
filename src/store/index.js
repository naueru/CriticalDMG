import { createStore } from 'redux';

import rootReducer from '../reducers';

const initialState = {
  session: {
    logged: true,
    id: 0,
    userName: 'valdamir',
    password: '1234',
    picture: '',
    icon: 'warrior',
    alterEgo: 'Valdamir!'
  },
};

export default () => {
  const store = createStore(rootReducer, initialState);
  return { store };
};
