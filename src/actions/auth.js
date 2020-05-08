import * as types from './../constants/auth';
export const login = (username, password) => ({
    type: types.LOGIN,
    playload: {
        username,
        password
    }
});
export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    playload: {
        data
    }
});
export const loginFail = (error) => ({
    type: types.LOGIN_FAILED,
    playload: {
        error
    }
});