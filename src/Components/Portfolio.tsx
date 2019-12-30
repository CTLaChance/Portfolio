import React from 'react';
import './Portfolio.scss';

class Portfolio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="portfolio">
                    <h1 id="name">CHRISTOPHER LACHANCE</h1>
                    <div id="about">
                        <h2>About</h2>
                        <p>
                            I am an artist and engineer with a passion for music, aesthetic design, and minimalism.
                        </p>
                        <p>
                            This site was created as an exercise in learning React, Typescript, and BabylonJS. The source code is available on <a href="https://github.com/CTLaChance/Portfolio">GitHub.</a>
                        </p>
                    </div>
                    <div id="projects">
                        <h2>Projects</h2>
                        <div className="portfolio-card">Card 1</div>
                        <div className="portfolio-card">Card 2</div>
                        <div className="portfolio-card">Card 3</div>
                        <div className="portfolio-card">Card 4</div>
                        <div className="portfolio-card">Card 5</div>
                        <div className="portfolio-card">Card 6</div>
                        <div className="portfolio-card">Card 7</div>
                        <div className="portfolio-card">Card 8</div>
                        <div className="portfolio-card">Card 9</div>
                        <div className="portfolio-card">Card 10</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio;