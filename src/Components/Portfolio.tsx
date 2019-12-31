import React from 'react';
import Swiper from 'swiper';
import './Portfolio.scss';
import 'swiper/swiper.scss'

class Portfolio extends React.Component {
    componentDidMount() {
        let mySwiper = new Swiper('.swiper-container', {
            init: true,
            freeMode: true,
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: true
        });
    }

    render() {
        return (
            <React.Fragment>
                <div id="name">CHRISTOPHER LACHANCE</div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Card 1</div>
                        <div className="swiper-slide">Card 2</div>
                        <div className="swiper-slide">Card 3</div>
                        <div className="swiper-slide">Card 4</div>
                        <div className="swiper-slide">Card 5</div>
                        <div className="swiper-slide">Card 6</div>
                        <div className="swiper-slide">Card 7</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio;