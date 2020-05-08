import * as types from './../constants/index';
const initialState = {
    list: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TASK: {
            return {
                ...state,
                list: []
            };
        }
        case types.FETCH_TASK_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                list: data,
            };
        }
        case types.FETCH_TASK_FAILED: {
            const { error } = action.payload;
            return {
                ...state,
                error
            };
        }
        default:
            return state;
    }
};

export default reducer;

