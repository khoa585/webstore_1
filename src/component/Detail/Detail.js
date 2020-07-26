import React, { useEffect } from "react";
import { bindActionCreators, compose } from "redux";
import * as productActions from "./../../actions/index";
import { connect } from "react-redux";
import Detailitem from "./Detailitem";
import { withRouter } from "react-router";
function Detail(props) {
  useEffect(() => {
    const { productActions } = props;
    const { actFetchProducts } = productActions;
    actFetchProducts();
  },[props])

  // show = (product, pd_id) => {
  //   product.map((task,index) => {
  //     if (pd_id === task._id) {
  //       return <Detailitem key={index} task={task}></Detailitem>
  //     }
  //   });
  // }
  const show = (product, pd_id) => {
    product.filter((tast) => pd_id === tast._id)
      .map((task, index) => {
        return <Detailitem key={index} task={task}></Detailitem>
      });
  }
  const showdetail = product => {
    const pd_id = props.match.params.id;
    if (product.length > 0) {
      show(product, pd_id)
    }
  };
  const { products } = this.props;
  return <div className="containerD">{showdetail(products)}</div>;
}
const mapStateToProps = state => {
  return {
    products: state.task.list,
    fr: state.form
  };
};
const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  };
};
const withconnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withconnect, withRouter)(React.memo(Detail));
