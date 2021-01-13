import { combineReducers } from 'redux';
import { session } from './sessionReducer';
import { applicationSettings } from './applicationSettingsReducer';

export default combineReducers({
  session,
  applicationSettings
});
