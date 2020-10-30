<style lang="scss">
    $mobile-width: 8.5in;
    
    #resume {
        @media screen and (max-width: $mobile-width) {
            width: 100%;
            height: fit-content;
            padding-bottom: 32px;
            margin: 0px;
        }

        margin: 100px auto;

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
            @media screen and (max-width: $mobile-width) {
                display: block;
                background: white;
                height: fit-content;

                text-align: center;

                > * {
                    width: 100%;
                }
            }

            padding: 16px;

            background: linear-gradient(135deg, #ffffff 60%, #000000 60%);

            display: flex;
            justify-content: space-between;
            align-items: center;

            height: 95px;

            >:first-child {
                font-family: 'Tomorrow';
                font-size: 225%;
                width: 100%;
                margin-left: 16px;

                @media screen and (max-width: $mobile-width) {
                    margin: 16px auto;
                }
            }

            #header-right {
                @media screen and (max-width: $mobile-width) {
                    color: black;
                    text-align: center;
                }

                color: white;
                text-align: right;

                display: flex;
                flex-direction: column;
                justify-content: space-evenly;

                height: 100%;
            }
        }

        #about {
            margin-top: 16px;
        }

        #experience {
            #games-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                list-style-type: none;
                text-align: center;

                * {
                    padding: 8px;
                    margin: 4px;
                    border: 1px solid black;
                    border-radius: 5px;

                    background: linear-gradient(to right, white 50%, black 50%);
                    background-size: 205% 100%;
                    background-position: left bottom;

                    transition: all .1s linear 0s;
                }

                a:hover {
                    cursor: pointer;
                    color: white;
                    background-position: right bottom;
                }
            }

            #freelance-list {
                li {
                    margin: 16px 0;
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
                }
            }
        }

        .subsection {
            @media screen and (max-width: $mobile-width) {
                h2, h3, h4, p{
                    text-align: center;
                }
            }

            padding: 0px 32px;
            font-size: 16px;

            h2 {
                margin: 16px 0;
                border-bottom: 1px #000000 solid;
                font-family: 'Tomorrow';
                font-size: 20px;
            }


            h3, ul, p{ 
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
            <a target="_blak" href="https://ctlachance.com">https://ctlachance.com</a>
            <a target="_blank" href="https://www.linkedin.com/in/ctlachance/">https://www.linkedin.com/in/ctlachance</a>
            <a target="_blank" href="mailto:christopher.t.lachance@gmail.com">christopher.t.lachance@gmail.com</a>
        </div>
    </div>

    <div id="about" class="subsection">
        Experienced software engineer with a strong foundation in data structures, algorithms, and core web technologies. I have excellent verbal and written communication skills, a strong team oriented work ethic, and an insatiable appetite for learning.
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
            </ul>
            <div id="games-list">
                <a href="https://playags.com/portfolio/pharaoh-sun/">Pharaoh Sun</a>
                <a href="https://playags.com/portfolio/wild-tiki/">Wild Tiki</a>
                <div>Dragon Blast</div>
                <div>Freedom 7</div>
                <div>8 Riches</div>
                <a href="https://playags.com/portfolio/shining-dragon/">Shining Dragon</a>
                <a href="https://playags.com/portfolio/burning-tiger/">Burning Tiger</a>
                <div>Bao Bei Cash</div>
                <div>Temple Cash</div>
                <div>Lightning Wheel</div>
            </div>
        </div>
        <div class="experience-subsection">
            <h3>Freelance Software Engineering</h3>
            <h4>Front End Engineer / Software Engineer / Graphic Designer</h4>
            <ul id="freelance-list">
                <li>Designed and developed the website, 12+ book covers, and various other branded materials for Algebra Readiness Educators, LLC</li>
                <a href="https://algebrareadinesseducators.com">https://algebrareadinesseducators.com</a>
                <li>Contributed features, bugfixes, and documentation to the open source NASA Trick Simulation Environment</li>
                <a href="https://github.com/nasa/trick">https://github.com/nasa/trick</a>
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
        <p>B.S. Computer Science</p>
        <p>Lamar University</p>
        <p>Beaumont, TX</p>
        <p>December 2016</p>
    </div>
</div>