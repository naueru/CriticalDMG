import _get from 'lodash/get';
import {
  CHECK_CREDENTIALS_SUCCESS,
  CHECK_CREDENTIALS_FAILED,
  CHECK_CREDENTIALS_LOADING,
  LOG_OUT,
  FETCH_LOGGED_USER_SUCCESS,
  // LOG_IN
} from '../reducers/constants';

import { loginCredentials } from '../services/sessionServices';
import { setAutohrizationToken, removeAutohrizationToken, getAutohrizationTokenDecoded } from '../services/localStorageServices';
import { fetchUser, register } from '../services/userServices';

export const checkCredentialsLoading = () => ({
  type: CHECK_CREDENTIALS_LOADING
});

export const fetchLoggedUserSuccess = user => ({
  type: FETCH_LOGGED_USER_SUCCESS,
  session: { user }
});

export const checkCredentialsSuccess = session => ({
  type: CHECK_CREDENTIALS_SUCCESS,
  session
});

export const checkCredentialsFailed = error => ({
  type: CHECK_CREDENTIALS_FAILED,
  error
});

export const logOut = () => dispatch => {
  removeAutohrizationToken();
  return dispatch({ type: LOG_OUT });
};

const saveTokenToLocalStorage = response => {
  setAutohrizationToken(response.accessToken);
  return response;
};

export const checkCredentials = credentials => (dispatch, getState) => {
  if (!credentials) {
    return Promise.reject({ message: 'Please review your credentials' });
  }

  const { session } = getState();

  if (session.isLoading) {
    return Promise.reject({
      message: 'The app is loging now, please wait'
    });
  }

  dispatch(checkCredentialsLoading(credentials));
  return loginCredentials(credentials)
    .then(saveTokenToLocalStorage)
    .then(response => {
      return dispatch(checkCredentialsSuccess(response));
    })
    .catch(err => {
      const error = _get(err, 'response.data', err && err.response);
      dispatch(checkCredentialsFailed(error));
      // throw error;
    });
};

export const fetchLoggedUser = () => async dispatch => {
  const { sub } = getAutohrizationTokenDecoded();
  const loggedUser = await fetchUser(sub);
  return dispatch(fetchLoggedUserSuccess(loggedUser));
};

export const registerUser = credentials => (dispatch) => {
  return register(credentials).then((res) => {
    // return dispatch(checkCredentials(res));
  })
};
