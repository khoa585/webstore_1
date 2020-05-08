import axios from 'axios';

class Service {
    constructor() {
        const service = axios.create({ headers: {} });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }
    handleSuccess(response) {
        return response;
    }
    handleError = error => {
        return Promise.reject(error);
    }
    setHeader(value, token) {
        this.service.defaults.headers.common[value] = token;
    }
    get(endpoint) {
        return this.service.get(endpoint);
    }
    post(endpoint, payload) {
        return this.service.request({
            method: 'POST',
            url: endpoint,
            responseType: 'json',
            data: payload
        });
    }
}

export default new Service();
