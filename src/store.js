import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './redux/saga';
import rootReducer from './redux/reducer';

const sagaMiddleware = createSagaMiddleWare();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);