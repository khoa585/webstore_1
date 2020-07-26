import React from 'react';

function Myselft(props) {
    const { showT } = props
    return (
        <div id={showT === true ? 'mySidenav_1' : ''} className="sidenav_1 sidenav0">
            <div className="contact1D">
                <ul className="level0 submenu">
                    <li className="level1 first">
                        <a href=" " className="level1 first" target="_self">
                            <span>My Wish list</span>
                        </a>
                    </li>
                    <li className="level1 first">
                        <a href=" " className="level1 hidden-tablet" target="_self">
                            <span>Newsletter</span>
                        </a>
                    </li>
                    <li className="level1 first">
                        <a href=" " className="level1 " target="_self">
                            <span>Order a catalogue</span>
                        </a>
                    </li>
                    <li className="level1 first">
                        <a href=" " className="level1 " target="_self">
                            <span>Press Room</span>
                        </a>
                    </li>
                    <li className="level1 first">
                        <a href=" " className="level1 " target="_self">
                            <span>Jobs</span>
                        </a>
                    </li>
                    <li className="level1 first">
                        <a href=" " className="level1 " target="_self">
                            <span>Terms of use</span>
                        </a>
                    </li>
                    <li className="level1 first">
                        <a href=" " className="level1 " target="_self">
                            <span>Privacy Notice</span>
                        </a>
                    </li>
                    <li className="level1 first">
                        <a href=" " className="level1 " target="_self">
                            <span>Cookie Notice</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default Myselft;