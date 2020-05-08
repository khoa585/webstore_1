import * as types from './../constants/index';
const initialState = {
    showloading : false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOWLOADING: {
            return{
                ...state,
                showloading : true
            };
        }
        case types.HIDELOADING: {
            return{
                ...state,
                showloading : false
            };
        }
        default:
            return state;
    }
};
export default reducer;

