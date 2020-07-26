import React, { useState } from 'react';
import MySidenav2 from '../HeaderCole/MySidenav2';
import Coli from '../HeaderCole/Coli';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
function MySidenav1(props) {
    const [statee, setstatee] = useState(0)
    const [a, seta] = useState(0);
    const { showT, showT_, setshowT_ } = props;
    const [watch_, setwatch] = useState(false)
    let names = [
        {
            key: 0,
            value: 'constellation'
        },
        {
            key: 1,
            value: 'seamaster',
        },
        {
            key: 2,
            value: 'Watch Finder',
        },
        {
            key: 3,
            value: 'Nato Straps',
        },
        {
            key: 4,
            value: 'Fine jewellery',
        },
        {
            key: 5,
            value: 'Ladymatic'
        }
    ]
    let list = [
        {
            key: 0,
            main: <MySidenav2 key={0} showT_={showT_}></MySidenav2>
        },
        {
            key: 1,
            main: <Coli showT_={showT_}></Coli>
        }
    ]

    const watch = () => {
        setwatch(!watch_)
        setshowT_(false)
    };
    const reception = (index) => {
        setstatee(index)
        if (index !== a) {
            seta(index)
            setshowT_(true)
        } else {
            setshowT_(!showT_)
        }
    };
    const show = () => {
        const result =  list.filter((tast,key) => statee === tast.key )
        .map((iten, index) => {
                return <CSSTransition key={index} timeout={200} classNames="item_mynode">
                    {iten.main}
                </CSSTransition>
        })
        return result
    }
    return (
        <React.Fragment>
            <div id={showT === true ? 'mySidenav_1' : ''} className="sidenav_1 silvenap">
                <ul className={`tract ${watch_ === true ? 'tract_' : ''}`}>
                    <li className='colorS_' onClick={() => watch()}>
                        <span className='watches'>WATCHES</span>
                    </li>
                    <span className={`panel ${watch_ === true ? 'panel_' : ''}`}>
                        {
                            names.map((item, index) => {
                                return <li key={index} onClick={() => reception(index)} className={`colorS ${item.key === 3 ? 'color_' : ''}`}>{item.value}</li>
                            })
                        }
                    </span>
                    <li className={`closesName ${watch_ === true ? 'tract__' : ''}`}>Fine jewellery</li>
                    <li className={`closesName ${watch_ === true ? 'tract__' : ''}`}>Accessories</li>
                </ul>
            </div >
            <TransitionGroup>
                {
                   show()
                }
            </TransitionGroup>
        </React.Fragment>
    );
}
export default React.memo(MySidenav1);