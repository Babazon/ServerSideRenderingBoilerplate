import * as redux from 'redux';
import thunk from 'redux-thunk';

const INITIAL_STATE = {};

export const configure = (initialState = INITIAL_STATE, reducers = {}, axiosInstance = null) => {
  const middlewares = axiosInstance ? [thunk.withExtraArgument(axiosInstance)] : [thunk];
  const appliedMiddlewares = redux.applyMiddleware(...middlewares);
  const composeArguments = [appliedMiddlewares];
  /* eslint-disable */
  if (global.window !== undefined) {
    composeArguments.push(
      global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
  }
  /* eslint-enable */
  const composedEnhancer = redux.compose(...composeArguments);
  const configuredStore = redux.createStore(reducers, initialState, composedEnhancer);
  return configuredStore;
};
