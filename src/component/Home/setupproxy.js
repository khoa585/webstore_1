var proxy = require('http-proxy-middleware');
module.exports = function(){
    app.use(
        proxy('/api/Product_api',{
            target: 'https://apiproductjs.herokuapp.com',
            changeOrigin: true
        })
    );
};