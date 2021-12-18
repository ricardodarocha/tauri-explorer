import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootSaga from './Sagas';
import rootReducer, { IAppState } from './Reducers';
import { Actions } from '../Typings/Store/store';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore<IAppState, Actions, unknown, unknown>(
  rootReducer,
  compose(
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware
    )
  )
);

sagaMiddleware.run(rootSaga);

export default store;