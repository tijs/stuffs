import { combineReducers } from 'redux';
import assets from './Assets';
import auth from './Auth';

// export default combineReducers({
//   assets: () => Assets,
//   auth: () => Auth
// });

export default combineReducers({
  assets,
  auth,
});
