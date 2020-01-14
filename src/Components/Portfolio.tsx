import React from 'react';
import Swiper from 'swiper';
// @ts-ignore
import ScrollBooster from 'scrollbooster';
import './Portfolio.scss';
import 'swiper/swiper.scss'

class Portfolio extends React.Component {
    state = {
        opened: false,
        detailsOpened: true,
        projectIndex: 0,
    }

    private projects = [
        {
            name: "Portfolio",
            date: "13JAN2020",
            card: "/assets/projects/portfolio_card.png",
        },
        {
            name: "ARE Website",
            date: "24DEC2016",
            card: "/assets/projects/arewebsite_card.png"
        },
        {
            name: "Pharaoh Sun",
            date: "00NUL0000",
            card: "/assets/projects/pharaohsun_card.jpg"
        },
        {
            name: "Wild Tiki",
            date: "00NUL0000",
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
            this.setState({opened: false});
            name?.classList.remove("opened");
        }
    }

    openDetails(index : number) {
        this.setState({opened: false, projectIndex: index, detailsOpened: true});
    }

    closeDetails() {
        this.setState({detailsOpened: false, openedProject: -1});
        this.openPortfolio();
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
                        return <div key={index} onClick={() => {this.openDetails(index)}} className="swiper-slide" augmented-ui="br-clip-x tl-clip-x bl-clip exe" style={{ backgroundImage: `url(${element.card})`, backgroundSize: "cover", backgroundPosition: "center"}}><h1>{element.name}</h1></div>
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
                    <svg id="details-close-button" onClick={() => {this.closeDetails()}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <dl id="details-info">
                        <div>
                            <dt>PROJECT NAME:</dt>
                            <dd>{this.projects[this.state.projectIndex].name}</dd>
                            
                            <dt>DATE:</dt>
                            <dd>{this.projects[this.state.projectIndex].date}</dd>

                            <dt>LINK:</dt>
                            <dd><a href="https://ctlachance.com">https://ctlachance.com</a></dd>
                            <dd><a href="https://github.com/CTLaChance/Portfolio">https://github.com/CTLaChance/Portfolio</a></dd>

                            <dt>COLLABORATORS:</dt>
                            <dd>NULL</dd>
                        </div>
                        <div>
                            <dt>SUMMARY:</dt>
                            <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima at nesciunt omnis a itaque dolores unde ut officia facere soluta aliquid provident tempora, illo assumenda quas ducimus sapiente non.</dd>
                        </div>
                    </dl>
                    <div id="details-pictures">
                        <img src={this.projects[this.state.projectIndex].card} alt="Project Media"></img>
                        <img src={this.projects[this.state.projectIndex].card} alt="Project Media"></img>
                        <img src={this.projects[this.state.projectIndex].card} alt="Project Media"></img>
                        <img src={this.projects[this.state.projectIndex].card} alt="Project Media"></img>
                        <img src={this.projects[this.state.projectIndex].card} alt="Project Media"></img>
                        <img src={this.projects[this.state.projectIndex].card} alt="Project Media"></img>
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