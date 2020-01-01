import React from 'react';
import Swiper from 'swiper';
import './Portfolio.scss';
import 'swiper/swiper.scss'

class Portfolio extends React.Component {
    componentDidMount() {
        let mySwiper = new Swiper('.swiper-container', {
            init: true,
            freeMode: true,
            initialSlide: 1,
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
                        <div className="swiper-slide augmented-card" augmented-ui="bl-clip-y tl-clip-x br-clip exe"><h1>Card 1</h1></div>
                        <div className="swiper-slide augmented-card" augmented-ui="bl-clip-y tl-clip-x br-clip exe"><h1>Card 2</h1></div>
                        <div className="swiper-slide augmented-card" augmented-ui="bl-clip-y tl-clip-x br-clip exe"><h1>Card 3</h1></div>
                        <div className="swiper-slide augmented-card" augmented-ui="bl-clip-y tl-clip-x br-clip exe"><h1>Card 4</h1></div>
                        <div className="swiper-slide augmented-card" augmented-ui="bl-clip-y tl-clip-x br-clip exe"><h1>Card 5</h1></div>
                        <div className="swiper-slide augmented-card" augmented-ui="bl-clip-y tl-clip-x br-clip exe"><h1>Card 6</h1></div>
                        <div className="swiper-slide augmented-card" augmented-ui="bl-clip-y tl-clip-x br-clip exe"><h1>Card 7</h1></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio;