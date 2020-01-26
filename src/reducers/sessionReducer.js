import _get from 'lodash/get';
import {
  CHECK_CREDENTIALS_SUCCESS,
  CHECK_CREDENTIALS_FAILED,
  CHECK_CREDENTIALS_LOADING,
  LOG_OUT
} from './constants';

const initialState = {
  isLoading: false,
  isAuth: false,
  token: null,
  error: null,
  user: null
};

export const session = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_CREDENTIALS_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case CHECK_CREDENTIALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: _get(action, 'session.data.token'),
        user: _get(action, 'session.data.user'),
        isAuth: true
      };

    case CHECK_CREDENTIALS_FAILED:
      return {
        isLoading: false,
        error: action.error,
        isAuth: false
      };

    case LOG_OUT:
      return {
        isLoading: false,
        isAuth: false
      };

    default:
      return state;
  }
};
