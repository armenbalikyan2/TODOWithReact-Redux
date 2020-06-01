import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { initSagas } from '../sagas/initSagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware, thunk];
const store = createStore(rootReducer, compose(applyMiddleware(...middleWare)));

initSagas(sagaMiddleware);

export default store;
