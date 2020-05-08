import React , {useEffect} from 'react';
import Cart from '../../component/Cart/Cart';
import { useSelector,useDispatch  } from "react-redux";
import * as taskActions from "./../../actions/index";
function DetailCart(props) {
    let dispatch = useDispatch()
    let { actFetchListCarts } = taskActions;
    let listCart = useSelector(state => state.cart.listCart);
    useEffect(()=>{
        dispatch(actFetchListCarts())
    },[])
    return (
        <div>
            <Cart listCart={listCart}></Cart>
        </div>
    );
}

export default DetailCart;