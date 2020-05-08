import React, { Component } from 'react';

class Authenticity extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-xs-6">				
                    <div className="thump">
                    <img className="cbr-image-box img-responsive img-fluid" src="img/S-Hop.jpg" alt="inm" />
                    </div>
                </div>
                <div className="col-xs-6 cbp-item">
                    <p className="pm-title ">certificate of <br />authenticity</p>
                    <p><button className="btn btn_a center-block">Discover more</button></p>
                </div>
                </div>
            </div>
        );
    }
}

export default Authenticity;