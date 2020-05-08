import React, { Component } from 'react';
import Hed from './Hed';
import Login from './Login';
import Discount from '../Home/Discount';
class Logined extends Component {
    render() {
        return (
            <div>
                <br></br>
                <Hed></Hed>
                <Login></Login>
                <Discount></Discount>
            </div>
        );
    }
}
export default Logined;