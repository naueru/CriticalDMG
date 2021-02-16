import getTranslations from '../CritCore/Translations/Translations';

import {
  SET_DEVELOPER_MODE,
  SET_LOCALE,
  SET_TRANSLATIONS
} from './constants';

const initialState = {
  developerMode: false,
  locale: {
    locale: 'en-US',
    lang: 'en',
    countryIso2: 'US',
  },
  translations: getTranslations('en')
};

export const applicationSettings = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVELOPER_MODE:
      return {
        ...state,
        developerMode: action.payload
      };
    case SET_LOCALE:
      return {
        ...state,
        locale: action.payload
      };
    case SET_TRANSLATIONS:
      return {
        ...state,
        translations: action.payload
      };
    default:
      return state;
  }
};
