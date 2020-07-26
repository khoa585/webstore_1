import React, { useEffect } from "react";
import Product from "../../component/Home/Product/Product";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as taskActions from "./../../actions/index";
let ProductItem = (props) => {
    let { products_, taskActions } = props;
    let { actFetchProducts } = taskActions;
    useEffect(() => {
        const track = () => {
            if (!props.products_.length) {
                actFetchProducts();
            };
        }
        track()
    }, [props.products_.length,actFetchProducts])
    let add_Cart = (item) => {
        let { actaddCart } = taskActions;
        actaddCart(item, 1)
    }
    return (
        <Product products_={products_} add_Cart={add_Cart}></Product>
    );
}
let mapStateToProps = state => {
    return {
        products_: state.task.list,
    };
};
let mapDispatchToProps = dispatch => {
    return {
        taskActions: bindActionCreators(taskActions, dispatch),
    };
};
let withconnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
export default compose(withconnect)(ProductItem);