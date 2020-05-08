import React from 'react';

function Modal() {
    return (
        <div id="myModal" className="modal">
            <div className="w3-animate-top">
                <div className="modal-content">

                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12 col-md-12 col-sm-12 center-block" style={{ textAlign: 'center' }}>
                            <input className="search_ search__" type="text" size={45} placeholder="Search..." />
                            <i className="fa fa-search buttonSize" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default React.memo(Modal);