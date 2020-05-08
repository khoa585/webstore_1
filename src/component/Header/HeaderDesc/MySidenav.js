import React, { useState } from 'react';
import MySidenav1 from '../HeaderMywatch/MySidenav1';
import Myselft from '../HeaderMywatch/Myselft';
import More from '../HeaderMywatch/More';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
function MySidenav(props) {
    const [state, setstate] = useState(0)
    const [a, seta] = useState(0);
    const [showT, setshowT] = useState(false)
    const [showT_, setshowT_] = useState(false)
    const { showsT, setshowTs } = props;
    const showCollection = (indexs) => {
        setstate(indexs)
        if (indexs !== a) {
            seta(indexs)
            setshowT(true)
        } else {
            setshowT(!showT)
        }
        setshowT_(false)
    };
    const hidenMenu = () => {
        setshowT(false);
        setshowTs(false)
        setshowT_(false)
    };
    const closeMenu = () => {
        setshowT(false);
        setshowTs(false)
        setshowT_(false)
    }
    let list = [
        {
            key: 0,
            main: <MySidenav1 state={state} showT={showT} showT_={showT_} setshowT_={setshowT_}></MySidenav1>
        },
        {
            key: 3,
            main: <Myselft showT={showT}></Myselft>
        },
        {
            key: 4,
            main: <More showT={showT}></More>
        }
    ]
    let name = [
        {
            key: 0,
            value: 'THE COLLECTION'
        },
        {
            key: 1,
            value: 'PLANNET LUXURY',
        },
        {
            key: 2,
            value: 'STORE LOCATOR',
        },
        {
            key: 3,
            value: 'CUSTOM LOCATOR',
        },
        {
            key: 4,
            value: 'MORE',
        },
    ]
    return (
        <>
            <div id={showsT === true ? 'mySidenav' : ''} className="sidenav">
                <div onClick={() => hidenMenu()} className={`bodyMenu ${showsT === true ? 'showBg' : ''}`} ></div>
            </div>
            <div id={showsT === true ? 'mySidenav' : ''} className="sidenav sidenav_">
                <div className="button_Close">
                    <button onClick={() => closeMenu()} type="button" className="close_btn close_btn_"><span className="close_btn__">Close</span></button>
                </div>
                <div className="noteMenu">
                    <div className="noteMenu_">
                        <ul className="noteMenu_TXT">
                            {
                                name.map((item, index) => {
                                    return <li key={index} onClick={() => showCollection(index)} className="">
                                        <div className="plannet">
                                        </div>
                                        <span >{item.value}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <TransitionGroup>
                {
                    list.map((iten, index) => {
                        if (state === iten.key) {
                            return <CSSTransition key={index} timeout={200} classNames="item">
                                {iten.main}
                            </CSSTransition>
                        }
                    }
                    )
                }
            </TransitionGroup >
        </>
    );
}
export default React.memo(MySidenav);