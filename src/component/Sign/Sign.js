import React, { Component } from 'react';
import Hed from '../Login/Hed';
import SignUp from './SignUp';
class Sign extends Component {
    render() {
        return (
            <div>
                <br></br>
                <Hed></Hed>
                <SignUp></SignUp>
            </div>
        );
    }
}

export default Sign;