import React from 'react';
import Swiper from 'swiper';
import './Portfolio.scss';

class Portfolio extends React.Component {
    componentDidMount() {
        let mySwiper = new Swiper('#carousel', {
            init: true,

        });
    }

    render() {
        return (
            <React.Fragment>
                <div id="name">CHRISTOPHER LACHANCE</div>
                <div id="carousel">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide portfolio-card">Card 1</div>
                        <div className="swiper-slide portfolio-card">Card 2</div>
                        <div className="swiper-slide portfolio-card">Card 3</div>
                        <div className="swiper-slide portfolio-card">Card 4</div>
                        <div className="swiper-slide portfolio-card">Card 5</div>
                        <div className="swiper-slide portfolio-card">Card 6</div>
                        <div className="swiper-slide portfolio-card">Card 7</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio;