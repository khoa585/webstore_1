import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/index';
import rootSaga from './../sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const configmiddleware = () => {
    const Middleware = [thunk,sagaMiddleware];
    const enhancer = [applyMiddleware(...Middleware)];
    const store = createStore(rootReducer, composeEnhancers(...enhancer));
    sagaMiddleware.run(rootSaga);
    return store;
};
export default configmiddleware;