import React, { useEffect } from 'react';
import Cart from '../../component/Cart/Cart';
import { useSelector, useDispatch } from "react-redux";
import * as taskActions from "./../../actions/index";
function DetailCart(props) {
  let listCart = useSelector(state => state.cart.listCart);
  let dispatch = useDispatch()
  useEffect(() => {
    const track = () => {
      let { actFetchListCarts } = taskActions;
      dispatch(actFetchListCarts())
    }
    track()
  }, [dispatch])
  return (
    <div>
      <Cart listCart={listCart}></Cart>
    </div>
  );
}

export default DetailCart;