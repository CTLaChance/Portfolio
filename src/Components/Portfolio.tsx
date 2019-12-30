import React from 'react';
import './Portfolio.scss';

class Portfolio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="portfolio">
                    <h1 id="name">CHRISTOPHER LACHANCE</h1>
                    <h2 className="augmented-header" augmented-ui="bl-clip tr-clip exe">PROJECTS</h2>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio;