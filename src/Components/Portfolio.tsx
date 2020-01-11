import React from 'react';
import Swiper from 'swiper';
// @ts-ignore
import ScrollBooster from 'scrollbooster';
import './Portfolio.scss';
import 'swiper/swiper.scss'

class Portfolio extends React.Component {
    state = {
        opened: false,
        detailsOpened: true
    }

    private projects = [
        {
            name: "Portfolio",
            card: "/assets/projects/portfolio_card.png",
        },
        {
            name: "ARE Website",
            card: "/assets/projects/arewebsite_card.png"
        },
        {
            name: "Pharaoh Sun",
            card: "/assets/projects/pharaohsun_card.jpg"
        },
        {
            name: "Wild Tiki",
            card: "/assets/projects/wildtiki_card.jpg"
        }
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

    render() {

        let swiper;
        let details;

        if(this.state.opened)
        {
            swiper =
            <div id="project-swiper" className="swiper-container">
                <div className="swiper-wrapper">
                    {this.projects.map((element, index) => {
                        return <div key={index}className="swiper-slide" augmented-ui="br-clip-x tl-clip-x bl-clip exe" style={{ backgroundImage: `url(${element.card})`, backgroundSize: "cover", backgroundPosition: "center"}}><h1>{element.name}</h1></div>
                    })}
                </div>
            </div>;

            setTimeout(function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                let mySwiper = new Swiper('#project-swiper', {
                    init: true,
                    freeMode: true,
                    initialSlide: 1,
                    slidesPerView: "auto",
                    spaceBetween: 50,
                    centeredSlides: true,
                });
            }, 1);
        }

        if(this.state.detailsOpened)
        {
            setTimeout(function () {
                const viewport = document.getElementById('details-page');
                const content = document.getElementById('scroll-wrapper');

                new ScrollBooster({
                    viewport,
                    content,
                    direction: "vertical",
                    onUpdate: (state: { position: { x: number; y: number; }; }) => {
                        content.style.transform = `translate(
                            ${-state.position.x}px,
                            ${-state.position.y}px
                        )`;
                    }
                });
            }, 1);

            details =
            <div id="details-page">
                <div id="scroll-wrapper">
                    <dl id="details-info">
                        <dt>PROJECT NAME:</dt>
                        <dd>Lorem Ipsum</dd>
                        
                        <dt>DATE:</dt>
                        <dd>06JAN2020</dd>

                        <dt>LINK:</dt>
                        <dd><a href="https://ctlachance.com">https://ctlachance.com</a></dd>

                        <dt>COLLABORATORS:</dt>
                        <dd>NULL</dd>

                        <dt>SUMMARY:</dt>
                        <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima at nesciunt omnis a itaque dolores unde ut officia facere soluta aliquid provident tempora, illo assumenda quas ducimus sapiente non.</dd>
                    </dl>
                    <div id="details-pictures">
                        <img src={this.projects[0].card} alt="Project Media"></img>
                        <img src={this.projects[0].card} alt="Project Media"></img>
                        <img src={this.projects[0].card} alt="Project Media"></img>
                        <img src={this.projects[0].card} alt="Project Media"></img>
                        <img src={this.projects[0].card} alt="Project Media"></img>
                        <img src={this.projects[0].card} alt="Project Media"></img>
                    </div>
                </div>
            </div>;
        }

        return (
            <React.Fragment>
                <div id="name" onClick={() => {this.openPortfolio()}}>CHRISTOPHER LACHANCE</div>
                {swiper}
                {details}
            </React.Fragment>
        )
    }
}

export default Portfolio;