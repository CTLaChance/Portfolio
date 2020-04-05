<script>
    import {onMount} from 'svelte';

    let profile, name, links, picture;

    onMount(async() => {

        let profileElements = [...name.children[0].children,...name.children[1].children, ...links.children, picture];

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
            fill: "both"
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
        background-color: white;
        box-shadow: 0px 0px 10px rgba($color: black, $alpha: 0.25);

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        justify-content: flex-end;

        padding: 16px;
        margin: 0 auto;
        box-sizing: border-box;

        img {
            width: 256px;
            height: 256px;
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
                font-family: 'Tomorrow', sans-serif;
                color: black;
                font-weight: 100;
                font-size: 70px;
                letter-spacing: -5px;
                text-align: center;
                word-wrap: break-word;

                display: inline-flex;
                justify-content: center;
                flex-wrap: wrap;

                .span-wrapper {
                    margin-left: 8px;
                    margin-right: 8px;
                    display: inline-flex;

                    span {
                        font-size: 36pt;
                        font-weight: 100;
                        margin: 0px 4px;
                    }
                }
            }
            
            #links {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                a {
                    font-family: 'Roboto', sans-serif;
                    text-decoration: none;
                    color: black;

                    &:hover {
                        color: red;
                    }
                }
            }
        }
    }
</style>

<div bind:this={profile} id="profile">
    <img bind:this={picture} src="profile.jpg" alt="Christopher LaChance - Profile Picture">
    <div id="profile-info">
        <h1 bind:this={name} id="name" aria-label="Christopher LaChance">
            <div class="span-wrapper">
                <span aria-hidden="true">C</span>
                <span aria-hidden="true">H</span>
                <span aria-hidden="true">R</span>
                <span aria-hidden="true">I</span>
                <span aria-hidden="true">S</span>
                <span aria-hidden="true">T</span>
                <span aria-hidden="true">O</span>
                <span aria-hidden="true">P</span>
                <span aria-hidden="true">H</span>
                <span aria-hidden="true">E</span>
                <span aria-hidden="true">R</span>
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
            <a href="https://github.com/CTLaChance">GitHub</a>          <span>-</span>
            <a href="https://linkedin.com/in/ctlachance">LinkedIn</a>   <span>-</span>
            <a href="mailto:christopher.t.lachance@gmail.com">Email</a> <span>-</span>
            <a href="./resume.pdf">Résumé</a>
        </div>
    </div>
</div>