import React, { Component } from 'react';

class Hed extends Component {

    render() {
        return (
            <div className="hed">
                <ul className="breadcrumbs">
                <li className="breadcrumbs-item ">
                    <a href="#" title="Home" className="breadcrumbs-item-text">
                    <span>HOME</span>
                    </a>
                </li>
                <li className="breadcrumbs-item">
                    <span className="breadcrumbs-item-sep">›</span>
                    <a  href="#" title="My Omega Dashboard" className="breadcrumbs-item-text">
                    <span>MY OMEGA DASHBOARD</span>
                    </a>
                </li>
                <li className="breadcrumbs-item">
                    <span className="breadcrumbs-item-sep">›</span>
                    <span className=" breadcrumbs-item-text pm-font-weight-bold">SIGN UP</span>
                </li>
                </ul>
            </div>
        );
    }
}

export default Hed;