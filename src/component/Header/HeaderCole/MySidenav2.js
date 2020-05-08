import React from 'react';
import { Link } from 'react-router-dom';
function MySidenav2(props){
        const {showT_ } = props;
        return (
            <div id={showT_ === true ? 'mySidenav_Two' : ''} className="sidenav_Two">
                <div className="row imgPro">
                    <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                        <img className="img-fluid mx-auto d-block" src="img/img15.png " alt="" />
                    </div>
                    <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                        <img className="img-fluid mx-auto d-block" src="img/img15.png" alt="" />
                    </div>
                </div>
                <div className="contsainer">
                    <Link to="/ProductItem"><button className="btn btn1">See all the Constellation</button></Link>
                </div>
            </div>
        );
    }
export default React.memo(MySidenav2);