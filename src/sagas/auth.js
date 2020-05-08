import { takeLatest, call, put } from 'redux-saga/effects';
import * as authTypes from '../constants/auth';
import axiosService from './../services/axiosServices';
import { authenlogin } from './../apis/index';
import { loginSuccess, loginFail } from './../actions/auth';
function setCookie(cname, cvalue) {
    document.cookie = cname + '=' + cvalue;
}
function* processLogin({ playload }) {
    const { username, password } = playload;
    const resp = yield call(authenlogin, {
        username,
        password
    });
    const { data } = resp;
    if (!data.error) {
        yield put(loginSuccess(data));
        const { token } = data.data;
        setCookie('SARS', token);
        var giatri = document.cookie;
        const tokens = giatri.split(/SARS=/g);
        axiosService.setHeader('Authorization', `Bearer ${tokens[1]}`);
    } else {
        yield put(loginFail(data.error));
    }
}
function* authSaga() {
    yield takeLatest(authTypes.LOGIN, processLogin);
}
export default authSaga;