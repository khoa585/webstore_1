import { takeLatest, call, put } from 'redux-saga/effects';
import * as Types from '../constants/index';
import { addcart, getListCart } from './../apis/index';
import axiosService from '../services/axiosServices';
import { actFetchListCartsSucccess, actFetchListCartsFailed } from "./../actions/index";

let findProductInCart = (cart, product) => {
    let index = -1;
    if (cart !== null) {
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].product_ === product) {
                    index = i;
                    break;
                }
            }
        }
    }
    return index;
}
function* add__cart({ payload }) {
    let { product, quantity } = payload
    let product_ = product._id
    let token = document.cookie;
    let todoCart = JSON.parse(localStorage.getItem('CART'));
    let settodoCart = !todoCart ? [] : todoCart
    if (token) {
        let tokens = token.replace(/SARS=/g, '');
        axiosService.setHeader('Authorization', tokens);
        let todoCart = JSON.parse(localStorage.getItem('CART'));
        let index = -1;
        index = findProductInCart(todoCart, product_);
        if (index !== -1) {
            quantity += settodoCart[index].quantity;
            settodoCart.splice(index,1)
            localStorage.setItem("CART", JSON.stringify(settodoCart));
        }
        let resp = yield call(addcart, { product_, quantity })
        let { data } = resp;
    } else {
        let index = -1;
        index = findProductInCart(settodoCart, product_);
        if (index !== -1) {
            settodoCart[index].quantity++
        } else {
            settodoCart.push({ product_, quantity })
        }
        localStorage.setItem("CART", JSON.stringify(settodoCart));
        return [...settodoCart];
    }
}
function* List__cart() {
    let token = document.cookie;
    let tokens = token.replace(/SARS=/g, '');
    axiosService.setHeader('Authorization', tokens);
    const resp = yield call(getListCart);
    const { data } = resp;
    console.log(data)
    if (data) {
        yield put(actFetchListCartsSucccess(data))
    } else {
        yield put(actFetchListCartsFailed(data))
    }
}
function* cart() {
    yield takeLatest(Types.ADD_CART, add__cart);
    yield takeLatest(Types.FETCH_List_Cart, List__cart);
}
export default cart;