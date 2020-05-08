import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../component/Header/Header";
import * as authActions from "../../actions/auth";
import * as taskAction from "../../actions/index";
function Headers(props) {
    let dispatch = useDispatch();
    let resultAuthen = useSelector(state => state.auth.resultAuthen);
    let { login } = authActions;
    let { actFetchListCarts } = taskAction;
    let dispatchSubmit = (username, password) => {
        dispatch(login(username, password))
    };
    if (resultAuthen)
        dispatch(actFetchListCarts())
    return (
        <div>
            <Header dispatchSubmit={dispatchSubmit}></Header>
        </div>
    );
}

export default (React.memo(Headers));