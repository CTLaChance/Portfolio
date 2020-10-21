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

        #header {
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

            #header-right {
                color: white;
                text-align: right;

                ul {
                    list-style: none;
                }
            }
        }

        #skills {
            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                padding: 0px;

                list-style-type: none;
                text-align: center;

                li {
                    padding: 8px;
                    margin: 4px;
                    border: 1px solid black;
                    border-radius: 5px;
                    // box-shadow: 5px 5px 10px rgba($color: black, $alpha: 0.25);
                }
            }
        }

        .subsection {
            padding: 0px 32px;
            font-size: 16px;

            h2 {
                margin: 16px 0;
                border-bottom: 1px #000000 solid;
                font-family: 'Tomorrow';
            }

            h3, ul{ 
                margin: 0px 0;
            }

            h4 {
                font-style: italic;
                margin: 0 0 16px 0;
            }

            .experience-subsection {
                margin-bottom: 32px;
            }
        }
    }
</style>

<div id="resume">
    <div id="header">
        <h1>CHRISTOPHER LACHANCE</h1>
        <div id="header-right">
            <ul>
                <a target="_blak" href="https://ctlachance.com"><li>https://ctlachance.com</li></a>
                <a target="_blak" href="https://github.com/CTLaChance"><li>https://github.com/CTLaChance</li></a>
                <a target="_blank" href="https://www.linkedin.com/in/ctlachance/"><li>https://www.linkedin.com/in/ctlachance</li></a>
                <a target="_blank" href="mailto:christopher.t.lachance@gmail.com"><li>christopher.t.lachance@gmail.com</li></a>
            </ul>
        </div>
    </div>

    <div id="experience" class="subsection">
        <h2>Experience</h2>
        <div class="experience-subsection">
            <h3>AGS, LLC</h3>
            <h4>Software Engineer</h4>
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
        <div class="experience-subsection">
            <h3>Freelance Software Engineering</h3>
            <h4>Front End Developer / Software Engineer / Graphic Designer</h4>
            <ul>
                <li>Designed and developed the website, 12+ book covers, and various other branded materials for Algebra Readiness Educators, LLC</li>
                <li>Contributed features and bugfixes to the open source NASA Trick Simulation Environment</li>
            </ul>
        </div>
    </div>

    <div id="skills" class="subsection">
        <h2>Skills</h2>
        <ul>
            <li>JavaScript ES6+</li>
            <li>C#</li>
            <li>NodeJS</li>
            <li>Docker</li>
            <li>SQL</li>
            <li>Svelte</li>
            <li>React</li>
            <li>Git</li>
            <li>SVN</li>
            <li>HTML5 / CSS3</li>
            <li>SCSS</li>
            <li>XML</li>
            <li>Markdown</li>
            <li>JSON</li>
            <li>Linux</li>
            <li>BASH</li>
            <li>Unity3D</li>
        </ul>
    </div>

    <div id="education" class="subsection">
        <h2>Education</h2>
        <div>B.S. Computer Science</div>
        <div>Lamar University</div>
        <div>Beaumont, TX</div>
        <div>December 2016</div>
    </div>
</div>