import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as taskActions from './../../actions/index';
class Products extends Component {
    componentDidMount() {
        const { taskActions } = this.props;
        const { actFetchProducts } = taskActions;
        actFetchProducts();
    };
    render() {
        const { product } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {this.ShowProduct(product)}
                </div>
            </div>
        );
    }
    ShowProduct = (e) => {
        var result = null;
        if (e.length > 0) {
            result = e.map((item, index) => {
                return <ProductItem star={item.start} key={index} sale={item.sale} name={item.name} price={item.price}></ProductItem>;
            });
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        product: state.task.list,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        taskActions: bindActionCreators(taskActions, dispatch)
    };
};
const withconnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
export default compose(withconnect)(Products);