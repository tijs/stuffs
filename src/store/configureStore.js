import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
//import reducers from '../reducers';

import rootReducer from '../reducers';


export default function configureStore() {
  let middleware = [thunk];

  if (__DEV__) {
    const logger = createLogger({
      level: 'info',
      collapsed: false,
    });
    middleware = [...middleware, logger];
  }

  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(...middleware),
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(rootReducer);
  //   });
  // }

  return store;
}
