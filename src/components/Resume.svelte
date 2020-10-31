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
        font-weight: 300;
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

            h3, h4, ul, p{ 
                margin: 0;
            }

            h2 {
                margin: 16px 0;
                border-bottom: 1px #000000 solid;
                font-family: 'Nunito Sans', monospace;
                font-weight: 200;
                font-size: 20px;
            }

            h4 {
                font-weight: 100;
                white-space: pre;
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

        #experience {
            #games-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
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

            .experience-subsection {
                margin-bottom: 16px;

                p, ul {
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

    <p style="margin:auto 0; padding: 0 32px;">Id eu labore cupidatat ad deserunt officia enim pariatur aute veniam sunt. Fugiat eiusmod et excepteur fugiat cupidatat ea enim laboris dolore elit deserunt cillum nisi. In et sint exercitation ad magna exercitation mollit. Aute ex aliquip labore culpa aliquip ullamco ad nulla. Lorem qui irure fugiat commodo est aliqua consequat aliqua duis velit. Anim est occaecat consequat incididunt do.</p>

    <div id="experience" class="subsection">
        <h2>Experience</h2>
        <div class="experience-subsection">
            <h3>Software Engineer</h3>
            <h4>AGS, LLC   |   January 2018  -  Present</h4>
            <p>At AGS I've worked alongside an incredibly talented team of individual contributors to design, build, and test over 10 class 3 video slot games.</p>
            <ul>
                <li>Nostrud proident irure sit qui minim et laboris.</li>
                <li>Irure labore enim enim et quis exercitation excepteur ad culpa aliquip in eu.</li>
                <li>Enim nostrud qui officia adipisicing.</li>
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
        <!-- <div class="experience-subsection">
            <h3>Freelance</h3>
            <h4>Front End Engineer / Software Engineer / Graphic Designer</h4>
            <div id="freelance-list">
                <div style="display: flex; justify-content: space-between;">
                    <h5>Algebra Readiness Educators</h5>
                    <h5><a href="https://algebrareadinesseducators.com"><em>https://algebrareadinesseducators.com</em></a></h5>
                </div>
                <p>Designed and developed the website, 12+ book covers, and various other branded materials for Algebra Readiness Educators, LLC</p>
                
                <div style="display: flex; justify-content: space-between;">
                    <h5>NASA Trick Simulation Environment</h5>
                    <h5><a href="https://github.com/nasa/trick"><em>https://github.com/nasa/trick</em></a></h5>
                </div>
                <p>Contributed features, bugfixes, and documentation to the open source NASA Trick Simulation Environment</p>
            </div>
        </div> -->
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