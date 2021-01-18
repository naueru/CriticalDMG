import {
  SET_DEVELOPER_MODE
} from '../reducers/constants';

export const updateDeveloperModeSetting = (payload) => dispatch => {
  return dispatch({
    type: SET_DEVELOPER_MODE,
    payload
  })
};
