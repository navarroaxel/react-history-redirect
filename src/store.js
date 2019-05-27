import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import mySaga from './mySaga';
import reducers from './reducers';
import history from './history';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers(history),
    undefined,
    compose(
        applyMiddleware(logger),
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
);

sagaMiddleware.run(mySaga);

export default store;
