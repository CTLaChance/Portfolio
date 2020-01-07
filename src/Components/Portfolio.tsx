import React from 'react';
import Swiper from 'swiper';
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
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.projects.map((element, index) => {
                        return <div key={index}className="swiper-slide" augmented-ui="br-clip-x tl-clip-x bl-clip exe" style={{ backgroundImage: `url(${element.card})`, backgroundSize: "cover", backgroundPosition: "center"}}><h1>{element.name}</h1></div>
                    })}
                </div>
            </div>;

            setTimeout(function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                let mySwiper = new Swiper('.swiper-container', {
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
            details =
            <div id="details-page">
                <div id="details-info">
                    <dl>
                        <dt>PROJECT NAME:</dt>
                        <dd>Lorem Ipsum</dd>
                        
                        <dt>SERVICES:</dt>
                        <dd>Engineering, Art Design, Tom Fuckery</dd>

                        <dt>DATE:</dt>
                        <dd>06JAN2020</dd>

                        <dt>COLLABORATORS:</dt>
                        <dd>Null</dd>

                        <dt>SUMMARY:</dt>
                        <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima at nesciunt omnis a itaque dolores unde ut officia facere soluta aliquid provident tempora, illo assumenda quas ducimus sapiente non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident qui magni accusamus aperiam aut, beatae iusto modi repellendus quisquam! Voluptatem, sequi libero quaerat dolores labore unde non consequuntur ex!</dd>
                    </dl>
                </div>

                <div id="details-pictures">
                    <img src={this.projects[0].card} alt="Project Media"></img>
                    <img src={this.projects[0].card} alt="Project Media"></img>
                    <img src={this.projects[0].card} alt="Project Media"></img>
                    <img src={this.projects[0].card} alt="Project Media"></img>
                    <img src={this.projects[0].card} alt="Project Media"></img>
                    <img src={this.projects[0].card} alt="Project Media"></img>
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