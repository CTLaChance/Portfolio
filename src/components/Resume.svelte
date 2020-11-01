<style lang="scss">
    $mobile-width: 8.5in;
    
    #resume {
        @media print {
            margin: 0;
        }

        @media screen and (max-width: $mobile-width) {
            margin: 0px;
            width: 100%;
            height: fit-content;
        }

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin: 75px auto;

        width: 8.5in;
        height: 11in;

        font-family: 'Roboto';
        font-weight: 300;
        box-shadow: 0px 4px 8px rgba($color: black, $alpha: 0.25);
        background-color: white;

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

        #main-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;

            a {
                text-decoration: none;
                color: inherit;

                &:hover {
                    color: red;
                }
            }

            .subsection {
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
                    margin-top: 16px;

                    h3 {
                        margin-bottom: 8px;
                    }

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
    }
</style>

<div id="resume">
    <div id="header">
        <h1><b>CHRISTOPHER</b> LACHANCE</h1>
    </div>

    <div id="main-content">
        <!-- <p style="margin:auto 0 0; padding: 0 32px;">Nisi esse velit cillum eiusmod do adipisicing ad.</p> -->

        <div id="experience" class="subsection">
            <h2>Experience</h2>
            <div class="experience-subsection">
                <h3>Software Engineer</h3>
                <h4>AGS, LLC    |    January 2018  -  Present</h4>
                <p>I work alongside an incredibly talented team of artists, musicians, and mathemeticians to design, build, test, and deploy video slot games in the US, Australia, Mexico, and Brazil.</p>
                <ul>
                    <li>Front End Engineering for 10+ video slot games using Lua, C#, and Unity3D</li>
                    <li>Designed, implemented, and tested paytable source code in XML</li>
                    <li>Effectively handled a litany of DevOps issues involving proprietary toolchains and hardware</li>
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
                <h3>Freelance Software Engineer</h3>
                <h4>Algebra Readiness Educators, LLC    |    <a href="https://algebrareadinesseducators.com">https://algebrareadinesseducators.com</a></h4>
                <ul>
                    <li>Designed and developed the last 3 versions of the ARE website</li>
                    <li>Designed 12+ mathematic workbooks and various other advertising media</li>
                    <li>Served as an advisor for technical discussions and problems</li>
                </ul>
                <br>
                <h4>NASA Trick Simulation Environment    |    <a href="https://github.com/nasa/trick">https://github.com/nasa/trick</a></h4>
                <ul>
                    <li>Contributed features, bugfixes, and documentation to the open source GitHub repository</li>
                    <li>Designed a way to visualize simulation objects by sending updates over TCP to Unity3D</li>
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
</div>