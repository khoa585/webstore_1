import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
function More(props) {
    const { showT } = props
    let name = [
        'My With',

    ]
    return (
        <div id={showT === true ? 'mySidenav_1' : ''} className="sidenav_1 sidenav0">
            <div className="contact0">
            <div className="contact1">
                    <ul class="level0 submenu">
                        <li class="level1">
                            <a href="" class="level1" target="_self">
                                <span>My Wish list</span>
                            </a>
                        </li>
                        <li class="level1">
                            <a href="" class="level1 hidden-tablet" target="_self">
                                <span>Newsletter</span>
                            </a>
                        </li>
                        <li class="level1 ">
                            <a href="" class="level1 " target="_self">
                                <span>Order a catalogue</span>
                            </a>
                        </li>
                        <li class="level1 ">
                            <a href="" class="level1 " target="_self">
                                <span>Press Room</span>
                            </a>
                        </li>
                        <li class="level1 ">
                            <a href="" class="level1 " target="_self">
                                <span>Jobs</span>
                            </a>
                        </li>
                        <li class="level1 ">
                            <a href="" class="level1 " target="_self">
                                <span>Terms of use</span>
                            </a>
                        </li>
                        <li class="level1 ">
                            <a href="" class="level1 " target="_self">
                                <span>Privacy Notice</span>
                            </a>
                        </li>
                        <li class="level1 ">
                            <a href="" class="level1 " target="_self">
                                <span>Cookie Notice</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="contact2">
                    <span>Follow My</span>
                    <ul className="Follow">
                        <li><FacebookIcon></FacebookIcon></li>
                        <li><InstagramIcon></InstagramIcon></li>
                        <li><TwitterIcon></TwitterIcon></li>
                        <li><YouTubeIcon></YouTubeIcon></li>
                    </ul>
                </div>
                <div className="contact3">
                    <span>our app</span>
                    <div className="appstore">
                        <img src='../img/logo-appstore.png'></img>
                        <img src='../img/logo-googleplay.png'></img>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default More;