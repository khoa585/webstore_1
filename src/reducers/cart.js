import * as types from './../constants/index';
const initialState = {
    listCart: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CART:
            return {
                ...state,
            };
        case types.ADDCART_SUCCESS:
            console.log("ADDCART_SUCCESS")
            return {
                ...state,
            };

        case types.ADDCART_FAIL:
            console.log("ADDCART_FAIL")
            return {
                ...state,
            };

        case types.FETCH_List_Cart:
            console.log("FETCH_List_Cart")
            return {
                ...state,
            };

        case types.FETCH_List_Cart_SUCCESS:
            console.log("FETCH_List_Cart_SUCCESS")
            const { data } = action.payload
            return {
                ...state,
                listCart: data
            };

        case types.FETCH_List_Cart_FAILED:
            const { error } = action.payload;
            return {
                ...state,
                listCart: error
            };

        default:
            return state;
    }
};
export default reducer;

