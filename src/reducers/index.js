import { combineReducers } from 'redux';
import Assets from './Assets';
import Auth from './Auth';

export default combineReducers({
  assets: () => Assets,
  auth: () => Auth
});
