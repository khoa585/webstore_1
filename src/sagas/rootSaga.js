import { fork, all } from 'redux-saga/effects';
import taskSaga from './task';
import authSaga from './auth';
import cart from './cart';
function* rootSaga() {
  yield all([yield fork(taskSaga),yield fork(authSaga),yield fork(cart)]);
}

export default rootSaga;
