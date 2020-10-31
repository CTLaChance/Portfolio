<style lang="scss">
    $mobile-width: 8.5in;
    
    #resume {
        @media screen and (max-width: $mobile-width) {
            width: 100%;
            height: fit-content;
            padding-bottom: 32px;
            margin: 0px;
        }

        @media print {
            margin: 0;
        }

        margin: 75px auto;

        width: 8.5in;
        height: 11in;

        font-family: 'Roboto';
        box-shadow: 0px 4px 8px rgba($color: black, $alpha: 0.25);
        background-color: white;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: inherit;

            &:hover {
                color: red;
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
                font-family: 'Nunito Sans', monospace;
                font-weight: 200;
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

        #header {
            text-align: center;
            font-family: 'Nunito Sans';

            padding: 32px;

            background: linear-gradient(135deg, white 50%, black 50%);


            h1 {
                font-weight: 200;
                font-size: 48px;
                letter-spacing: 5px;

                color: white;
                mix-blend-mode: difference;
            }

            * {
                margin: 0;
            }
        }

        #links {
            display: flex;
            justify-content: space-between;
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


                    background: linear-gradient(135deg, white 50%, black 50%);
                    background-size: 250% 100%;
                    background-position: left bottom;

                    transition: all .2s linear 0s;
                }

                a:hover {
                    cursor: pointer;
                    color: white;
                    background-position: right bottom;
                }
            }

            #freelance-list {
                li {
                    margin: 8px 0;
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

        #bottom {
            padding-bottom: 32px;

            display: flex;
            justify-content: space-between;

            #education {
                width: 50%;
            }

            #links {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: right;
            }
        }
    }
</style>

<div id="resume">
    <div id="header">
        <h1><b>CHRISTOPHER</b> LACHANCE</h1>
    </div>

    <div id="experience" class="subsection">
        <h2>Experience</h2>
        <div class="experience-subsection">
            <h3>AGS, LLC</h3>
            <div>
                <h4>Software Engineer</h4>
                <h4>01JAN2018 - PRESENT</h4>
            </div>
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
                <li>Designed and developed the website, 12+ book covers, and various other branded materials for Algebra Readiness Educators, LLC - <a href="https://algebrareadinesseducators.com"><em>https://algebrareadinesseducators.com</em></a></li>
                <li>Contributed features, bugfixes, and documentation to the open source NASA Trick Simulation Environment - <a href="https://github.com/nasa/trick"><em>https://github.com/nasa/trick</em></a></li>
            </ul>
        </div>
    </div>

    <div id="skills" class="subsection"> 
        <h2>Skills and Technology</h2>
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
            <li>VR</li>
        </ul>
    </div>

    <div id="bottom">
        <div id="education" class="subsection">
            <h2>Education</h2>
            <p>B.S. Computer Science</p>
            <p>Lamar University</p>
            <p>Beaumont, TX</p>
            <p>August 2013 - December 2016</p>
        </div>

        <div id="links" class="subsection">
            <h2>Links</h2>
            <a target="_blak" href="https://ctlachance.com">https://ctlachance.com</a>
            <a target="_blank" href="https://www.linkedin.com/in/ctlachance/">https://www.linkedin.com/in/ctlachance</a>
            <a target="_blank" href="mailto:christopher.t.lachance@gmail.com">christopher.t.lachance@gmail.com</a>
        </div>
    </div>
</div>