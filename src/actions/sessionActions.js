import _get from 'lodash/get';
import {
  CHECK_CREDENTIALS_SUCCESS,
  CHECK_CREDENTIALS_FAILED,
  CHECK_CREDENTIALS_LOADING,
  LOG_OUT,
  // LOG_IN
} from '../reducers/constants';

import { loginCredentials } from '../services/sessionServices';
import { setAutohrizationToken, removeAutohrizationToken } from '../services/localStorageServices';

export const checkCredentialsLoading = () => ({
  type: CHECK_CREDENTIALS_LOADING
});

export const checkCredentialsSuccess = session => ({
  type: CHECK_CREDENTIALS_SUCCESS,
  session
});

export const checkCredentialsFailed = error => ({
  type: CHECK_CREDENTIALS_FAILED,
  error
});

export const logOut = () => ( dispatch ) => {
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
    .then(response => dispatch(checkCredentialsSuccess(response)))
    .catch(err => {
      dispatch(checkCredentialsFailed(err.response));
      const error = _get(err, 'response.data') || err.response;
      throw error;
    });
};
