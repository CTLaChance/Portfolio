<script>
    import {onMount} from 'svelte';
    import {Link} from 'svelte-routing';

    let name, links, picture, profile;

    onMount(async() => {
        let profileElements = [...name.children[0].children,...name.children[1].children, ...links.children];

        let keyframes = [
            { opacity: 0 },
            { opacity: 0, offset: 0.24 },
            { opacity: 1, offset: 0.25 },
            { opacity: 0, offset: 0.26 },
            { opacity: 0, offset: 0.49 },
            { opacity: 1, offset: 0.50 },
            { opacity: 0, offset: 0.51 },
            { opacity: 0, offset: 0.74 },
            { opacity: 1, offset: 0.75 },
            { opacity: 0, offset: 0.76 },
            { opacity: 0, offset: 0.99 },
            { opacity: 1 }
        ];

        profile.animate(keyframes, {
            delay: 250,
            duration: 500,
            iterations: 1,
            fill: "both",
        });

        picture.animate(keyframes, {
            delay: 500,
            duration: 500,
            iterations: 1,
            fill: "both",
        });

        for (let element of profileElements){
            element.animate(keyframes, {
                delay: 500 + (Math.random() * 500),
                duration: 500,
                iterations: 1,
                fill: "both",
            });
        }
    });
</script>

<style lang="scss">
    #profile {
        @keyframes pageload {
            0% {
                background-position: 5%;
            }

            100% {
                background-position: 62%;
            }
        }

        animation: pageload 2s cubic-bezier(.9, 0, .10, 1) both;

        background: linear-gradient(135deg, white 60%, black 60%);
        background-size: 200% 100%;
        border: 1px solid black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        justify-content: flex-end;

        padding: 16px;
        margin: 0 auto;

        img {
            width: 256px;
            height: 256px;
            flex-basis: 256px;
            flex-shrink: 0;
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        #profile-info {
            user-select: none;

            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 16px;

            #name {
                margin: 0;
                
                //Font
                font-family: 'Nunito Sans', sans-serif;
                color: black;
                font-weight: 100;
                letter-spacing: 5px;
                text-align: center;
                word-wrap: break-word;

                display: inline-flex;
                justify-content: center;
                flex-wrap: wrap;


                .span-wrapper {
                    margin-left: 8px;
                    margin-right: 8px;
                    display: inline-flex;

                    color: white;
                    mix-blend-mode: difference;

                    span {
                        font-size: 36pt;
                        font-weight: 100;
                        margin: 0px 2px;
                    }
                    .bold-letter {
                        font-weight: 700;
                    }
                }
            }
            
            #links {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                text-align: center;
                margin: 16px 8px 0 16px;

                .link-button {
                    font-family: 'Roboto', sans-serif;
                    text-decoration: none;
                    color: black;
                    border: 1px solid black;
                    background: linear-gradient(135deg, white 50%, black 50%);
                    background-size: 250% 100%;
                    background-position: left bottom;
                    padding: 8px 16px;

                    transition: all 0.2s ease-in-out;

                    &:hover {
                        cursor: pointer;
                        color: white;
                        border: 1px solid white;
                        background-position: right bottom;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 750px) {
        #profile {
            width: calc(100vw - 32px);
            height: calc(100vh - 34px);
            flex-direction: column;
            justify-content: center;
        }

        #profile #profile-info {
            margin: 0;
        }

        #profile #profile-info #name .span-wrapper span {
            font-size: 8vw;
        }
            
        #profile img {
            margin: 0 auto;
        }

        #profile #profile-info #links {
            flex-direction: column;
            margin: 16px;
        }
    }
</style>

<div id="profile" bind:this={profile}>
    <img bind:this={picture} src="profile.jpg" alt="Christopher LaChance">
    <div id="profile-info">
        <h1 bind:this={name} id="name" aria-label="Christopher LaChance">
            <div class="span-wrapper">
                <span aria-hidden="true" class="bold-letter">C</span>
                <span aria-hidden="true" class="bold-letter">H</span>
                <span aria-hidden="true" class="bold-letter">R</span>
                <span aria-hidden="true" class="bold-letter">I</span>
                <span aria-hidden="true" class="bold-letter">S</span>
                <span aria-hidden="true" class="bold-letter">T</span>
                <span aria-hidden="true" class="bold-letter">O</span>
                <span aria-hidden="true" class="bold-letter">P</span>
                <span aria-hidden="true" class="bold-letter">H</span>
                <span aria-hidden="true" class="bold-letter">E</span>
                <span aria-hidden="true" class="bold-letter">R</span>
            </div>
            <div class="span-wrapper">
                <span aria-hidden="true">L</span>
                <span aria-hidden="true">A</span>
                <span aria-hidden="true">C</span>
                <span aria-hidden="true">H</span>
                <span aria-hidden="true">A</span>
                <span aria-hidden="true">N</span>
                <span aria-hidden="true">C</span>
                <span aria-hidden="true">E</span>
            </div>
        </h1>
        <div bind:this={links} id="links">
            <a class="link-button" href="https://github.com/CTLaChance">GitHub</a>
            <a class="link-button" href="https://linkedin.com/in/ctlachance">LinkedIn</a>
            <a class="link-button" href="mailto:christopher.t.lachance@gmail.com">Email</a>
            <Link to="resume"><div class="link-button">Résumé</div></Link>
        </div>
    </div>
</div>