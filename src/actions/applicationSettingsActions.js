import getTranslations from '../CritCore/Translations/Translations';

import {
  SET_DEVELOPER_MODE,
  SET_LOCALE,
  SET_TRANSLATIONS
} from '../reducers/constants';

export const updateDeveloperModeSetting = (payload) => dispatch => {
  return dispatch({
    type: SET_DEVELOPER_MODE,
    payload
  });
};

export const updateLocaleSetting = (payload) => dispatch => {
  dispatch({
    type: SET_TRANSLATIONS,
    payload: getTranslations(payload.lang)
  });
  return dispatch({
    type: SET_LOCALE,
    payload
  });
};
