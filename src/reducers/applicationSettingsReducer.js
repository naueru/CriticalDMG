import {
  SET_DEVELOPER_MODE
} from './constants';

const initialState = {
  developerMode: false
};

export const applicationSettings = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVELOPER_MODE:
      return {
        ...state,
        developerMode: action.payload
      };

    default:
      return state;
  }
};
