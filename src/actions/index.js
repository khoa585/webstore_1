import * as taskConstants from './../constants/index';
export const actFetchProducts = () => ({
    type: taskConstants.FETCH_TASK
});
export const actFetchProductsSucccess = (data) => ({
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
        data
    }
});
export const actFetchProductsFailed = (error) => ({
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
        error
    }
});

export const showloading = () => ({
    type: taskConstants.SHOWLOADING
});
export const hideloading = () => ({
    type: taskConstants.HIDELOADING
});

export const actaddCart = (product, quantity) => ({
    type: taskConstants.ADD_CART,
    payload: {
        product,
        quantity
    }
})
export const actaddCartSuccess = (data) => ({
    type: taskConstants.ADDCART_SUCCESS,
    payload: {
        data
    }
});
export const actaddCartFail = (error) => ({
    type: taskConstants.ADDCART_FAIL,
    payload: {
        error
    }
});


export const actFetchListCarts = () => ({
    type: taskConstants.FETCH_List_Cart
});
export const actFetchListCartsSucccess = (data) => ({
    type: taskConstants.FETCH_List_Cart_SUCCESS,
    payload: {
        data
    }
});
export const actFetchListCartsFailed = (error) => ({
    type: taskConstants.FETCH_List_Cart_FAILED,
    payload: {
        error
    }
});