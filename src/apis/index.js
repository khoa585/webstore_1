import axiosService from './../services/axiosServices';

const endpoint = '/Product_api';
const URL = '/login';
const URL_ = '/add';
const URL__ = '/listCart';
export const getList = () => {
    return axiosService.get(`${endpoint}`);
};
export const authenlogin = (body) => {
    return axiosService.post(`${URL}`, body);
};
export const addcart = (body) => {
    return axiosService.post(`${URL_}`, body);
};
export const getListCart = () => {
    return axiosService.get(`${URL__}`);
};