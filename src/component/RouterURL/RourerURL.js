import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Logined from "../Login/Logined";
import Sign from "../Sign/Sign";
import Products from "../Product_item/Products";
import Detail from "../Detail/Detail";
import DetailCart from "../../container/DetailCart/DetailCart";
class RourerURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/Login"><Logined /></Route>
                    <Route path="/Sign"><Sign /></Route>
                    <Route path="/ProductItem"><Products /></Route>
                    <Route path="/chi-tiet/:id/:slug.html"><Detail/></Route>
                    <Route path="/Cart"><DetailCart/></Route>
                    <Route><Home /></Route>
                </Switch>
            </div>
        );
    }
}
export default RourerURL;