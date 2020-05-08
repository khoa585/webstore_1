import {takeLatest,call,put,delay} from "redux-saga/effects";
import * as taskTypes from "../constants/index";
import { getList }  from "./../apis/index";
import { actFetchProductsSucccess,actFetchProductsFailed,showloading,hideloading} from "./../actions/index";
  
function* watchFetchListAction(){
    // yield put(showloading());
    const resp = yield call(getList);
    const { data } = resp;
    yield put(actFetchProductsSucccess(data));
    yield delay(1000);
    yield put(hideloading());
}
function* taskSaga() {
    yield takeLatest(taskTypes.FETCH_TASK,watchFetchListAction);
}

export default taskSaga;