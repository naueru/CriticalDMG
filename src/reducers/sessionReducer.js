import {
  CHECK_CREDENTIALS_SUCCESS,
  CHECK_CREDENTIALS_FAILED,
  CHECK_CREDENTIALS_LOADING,
  LOG_OUT,
  FETCH_LOGGED_USER_SUCCESS
} from './constants';
import { isLoggedIn } from "../services/localStorageServices";

const initialState = {
  isLoading: false,
  isAuth: isLoggedIn(),
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
        ...action.session,
        isLoading: false,
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

    case FETCH_LOGGED_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.session.user
      };

    default:
      return state;
  }
};
