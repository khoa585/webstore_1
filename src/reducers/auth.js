import * as types from './../constants/auth';
import { toastError, toastSuccess } from '../helpper/toastHelper';
const initialState = {
    resultAuthen: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
            };
        case types.LOGIN_SUCCESS:
            const result = action.playload.data;
            const username = result.data.username;
            toastSuccess('🦄 Hello ' + username);
            return {
                ...state,
                resultAuthen: true
            };

        case types.LOGIN_FAILED:
            toastError('🦄 Wow so easy!');
            return {
                ...state,
                resultAuthen: false
            };
        default: return state;
    }
};
export default reducer;