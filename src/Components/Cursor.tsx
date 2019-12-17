import React from 'react'
import './Cursor.scss'

class Cursor extends React.Component {
    private cursor : HTMLDivElement;

    componentDidMount() {
        const cursor = this.cursor;


        // Hide the cursor when leaving.
        document.addEventListener('mouseleave', event => {
            cursor.hidden = true;
        });

        document.addEventListener('mouseenter', event => {
            cursor.hidden = false;
        });

        // Update the cursor div position on mouse move.
        document.addEventListener('mousemove', event => {
            cursor?.setAttribute("style", `top: ${event.pageY - (cursor.offsetHeight/2)}px; left: ${event.pageX - (cursor.offsetWidth/2)}px;`);
        });
    }

    render() {
        return <div id="cursor" ref={(element: HTMLDivElement) => this.cursor = element}></div>;
    }
}

export default Cursor;