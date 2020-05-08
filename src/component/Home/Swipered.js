import React, { useEffect, useState } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
let Swipered = () => {
    let [swiper, updateSwiper] = useState(null);
    let [currentIndex, updateCurrentIndex] = useState(0);
    let sr = ".swiper-button-next" + ".swiperB";
    let sr_ = ".swiper-button-prev" + ".swiperB";
    let params = {
        Swiper,
        initialSlide: 3,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl:  sr,
            prevEl: sr_,
        },
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        getSwiper: updateSwiper
    };
    let updateIndex = () => updateCurrentIndex(1 + swiper.realIndex);
    useEffect(() => {
        if (swiper !== null) {
            swiper.on('slideChange', updateIndex);
        }
        return () => {
            if (swiper !== null) {
                swiper.off('slideChange', updateIndex);
            }
        };
        
    }, [swiper]);
    return (
        <>
            <div className="container">
                <Swiper {...params} >
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                </Swiper>
            </div>
            <div>
                {currentIndex}
            </div>
        </>
    );
};
export default Swipered;

