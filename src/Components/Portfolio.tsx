import React from 'react';
import Swiper from 'swiper';
import './Portfolio.scss';
import 'swiper/swiper.scss'

class Portfolio extends React.Component {
    state = {
        opened: false
    }

    private projects = [
        {
            name: "Portfolio",
            picture: "/assets/projects/portfolio_card.png",
        },
    ];

    openPortfolio() {
        let name = document.getElementById("name");
        if (!this.state.opened) {
            this.setState({opened: true});
            name?.classList.add("opened");
        }
        else {
            this.setState({ opened: false});
            name?.classList.remove("opened");
        }
    }

    componentDidUpdate() {
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

        let swiper;

        if(this.state.opened)
        {
            swiper =
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" augmented-ui="bl-clip-y tl-clip-x br-clip exe" style={{backgroundImage: `url(${this.projects[0].picture})`, backgroundSize: "100% 100%"}}><h1>{this.projects[0].name}</h1></div>
                    <div className="swiper-slide" augmented-ui="bl-clip-y tl-clip-x br-clip exe"><h1>Card 2</h1></div>
                    <div className="swiper-slide" augmented-ui="bl-clip-y tl-clip-x br-clip exe"><h1>Card 3</h1></div>
                </div>
            </div>;
        }

        return (
            <React.Fragment>
                <div id="name" onClick={() => {this.openPortfolio()}}>CHRISTOPHER LACHANCE</div>
                {swiper}
            </React.Fragment>
        )
    }
}

export default Portfolio;