<style lang="scss">
    #resume {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 8.5in;
        height: 11in;

        font-family: 'Roboto';
        box-shadow: 0px 4px 8px rgba($color: black, $alpha: 0.25);
        background-color: white;

        a {
            text-decoration: none;
            color: inherit;

            &:hover {
                color: red;
            }
        }

        #ctl {
            padding: 16px;

            background: linear-gradient(135deg, #ffffff 60%, #000000 60%);


            display: flex;
            justify-content: space-between;
            align-items: center;

            >:first-child {
                text-align: center;
                font-family: 'Tomorrow';
                font-size: 225%;
                width: 100%;
            }

            #ctl-right {
                color: white;
                text-align: right;

                ul {
                    list-style: none;
                }
            }
        }
    }
</style>

<div id="resume">
    <div id="ctl">
        <div>CHRISTOPHER LACHANCE</div>
        <div id="ctl-right">
            <ul>
                <a target="_blank" href="https://ctlachance.com"><li>https://ctlachance.com</li></a>
                <a target="_blank" href="mailto:christopher.t.lachance@gmail.com"><li>christopher.t.lachance@gmail.com</li></a>
                <a target="_blank" href="https://www.linkedin.com/in/ctlachance/"><li>https://www.linkedin.com/in/ctlachance/</li></a>
            </ul>
        </div>
    </div>

    <div id="experience">
        <h1>Experience</h1>
        <div id="ags">
            <h2>AGS, LLC</h2>
            <h3>Software Engineer</h3>
            <ul>
                <li>Developed front-end designs in conjunction with a cross disciplined team of contributors</li>
                <li>Refactored game logic to meet the demands of complex data models</li>
                <li>Lead Engineer for the following 10 games:</li>
                <ul>
                    <li>Pharaoh Sun</li>
                    <li>Wild Tiki</li>
                    <li>Dragon Blast</li>
                    <li>Freedom 7</li>
                    <li>8 Riches</li>
                    <li>Shining Dragon</li>
                    <li>Burning Tiger</li>
                    <li>Bao Bei Cash</li>
                    <li>Temple Cash</li>
                    <li>Lightning Wheel</li>
                </ul>
            </ul>
        </div>
        <div id="miscellaneous">
            <h2>Freelance Software Engineering</h2>
            <h3>Front End Developer / Software Engineer / Graphic Designer</h3>
            <ul>
                <li>Designed and developed the website, 12+ book covers, and various other branded materials for Algebra Readiness Educators, LLC</li>
                <li>Contributed features and bugfixes to the open source NASA Trick Simulation Environment</li>
            </ul>
        </div>
    </div>

    <div id="skills">
        <h1>Skills</h1>
        <ul>
            <li>JavaScript ES6+</li>
            <li>C#</li>
            <li>NodeJS</li>
            <li>Svelte</li>
            <li>React</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>SVN</li>
            <li>HTML5</li>
            <li>SCSS</li>
            <li>XML</li>
            <li>Markdown</li>
            <li>JSON</li>
            <li>Linux</li>
            <li>Bash</li>
            <li>Unity3D</li>
        </ul>
    </div>

    <div id="education">
        <h1>Education</h1>
        <div>B.S. Computer Science</div>
        <div>Lamar University</div>
        <div>Beaumont, TX</div>
        <div>December 2016</div>
    </div>
</div>