import React from 'react';
import Swiper from 'swiper';
// @ts-ignore
import ScrollBooster from 'scrollbooster';
import './Portfolio.scss';
import 'swiper/swiper.scss'
import { projects } from "./projects";

class Portfolio extends React.Component {
    state = {
        opened: false,
        detailsOpened: false,
        projectIndex: 0,
    }

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
        let projectsScroller;
        let details;

        let mouseDownPosition = {x: 0, y: 0};

        if(this.state.opened)
        {
            projectsScroller =
            <div id="projects-scroller" >
                <div id="projects-wrapper" onMouseDown={(event) => {mouseDownPosition.x = event.clientX; mouseDownPosition.y = event.clientY}}>
                    {projects.map((element, index) => {
                        return <div key={index} className="project-slide" onClick={() => {this.openDetails(index)}} augmented-ui="br-clip-x tl-clip-x bl-clip exe" style={{ backgroundImage: `url(${element.card})`, backgroundSize: "cover", backgroundPosition: "center"}}><h1>{element.name}</h1></div>
                    })}
                </div>
            </div>;

            setTimeout(function () {
                const viewport = document.getElementById('projects-scroller');
                const content = document.getElementById('projects-wrapper')

                new ScrollBooster({
                    viewport,
                    content,
                    direction: "horizontal",
                    onUpdate: (state: { position: { x: number; y: number; }; }) => {
                        content.style.transform = `translate(
                            ${-state.position.x}px,
                            ${-state.position.y}px
                        )`;
                    },
                    onClick: (state: any, event: MouseEvent) => {
                        // Prevent accidental link following when scrolling.
                        if (Math.abs(mouseDownPosition.x - event.clientX) > 5 || Math.abs(mouseDownPosition.y - event.clientY) > 5) {
                            event.stopPropagation();
                        }
                    }
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
                <svg id="details-close-button" onClick={() => {this.closeDetails()}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <div id="scroll-wrapper">
                    <div id="details-info">
                        <div>
                            <dt>[PROJECT NAME]</dt>
                            <dd>{projects[this.state.projectIndex].name}</dd>
                            
                            <dt>[DATE]</dt>
                            <dd>{projects[this.state.projectIndex].date}</dd>

                            <dt>[LINKS]</dt>
                            {projects[this.state.projectIndex].links.map((element, index) => {
                                return <dd key={index}><a href={element}>{element}</a></dd>
                            })}
                        </div>
                        <div>
                            {projects[this.state.projectIndex].summary}
                        </div>
                    </div>
                    <div id="details-pictures">
                        {projects[this.state.projectIndex].media.map((element, index) => {
                            return <img key={index} src={projects[this.state.projectIndex].media_folder + element.substr(1)} alt="Project Media"></img>
                        })}
                    </div>
                </div>
            </div>;
        }

        return (
            <React.Fragment>
                <div id="name" onClick={() => {this.openPortfolio()}}>CHRISTOPHER LACHANCE</div>
                {projectsScroller}
                {details}
            </React.Fragment>
        )
    }
}

export default Portfolio;