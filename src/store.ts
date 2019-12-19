import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer, RootState } from './rootReducer';
import { rootEpic } from './rootEpic';

const epicMiddleware = createEpicMiddleware();

export const configureStore = (preloadedState?: RootState) => {
  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers = composeEnhancers(
    applyMiddleware(
      epicMiddleware,
    ),
  )

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers,
  );
  epicMiddleware.run(rootEpic);

  return store
};
