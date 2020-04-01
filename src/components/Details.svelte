<script>
    export let projectName = "Portfolio";
    export let projectDate = "01-JAN-2020";
    export let projectAbout = "This site is the second revision of my portfolio and contains projects both personal and professional. The current revision was made using Svelte, SCSS, and Javascript. The source code can be found at the repository below.";
    export let projectLinks = ['https://github.com/CTLaChance/Portfolio'];
</script>

<style lang="scss">
    #details {
        width: 50vw;
        height: 362px;
        font-family: 'Tomorrow', sans-serif;

        background: rgba($color: black, $alpha: 0.05);
        border-left: solid 1px black;
        padding: 16px;
        margin: 0 auto;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        #details-name {
            grid-area: name;
            margin: 0px;
            font-weight: 300;
            font-size: 48px;
        }

        #details-date {
            grid-area: date;
            margin: 0;
            font-weight: 300;
            font-size: 24px;
        }

        #details-about {
            grid-area: about;
            margin: 0;
            margin-top: 16px;
            width: 70%;
            font-size: 20px;
            font-family: 'Roboto';
        }

        #details-links {
            grid-area: links;
            display: flex;
            flex-direction: column;
            margin-top: auto; //Keeps the links at the end of the flexbox.
            
            font-family: 'Roboto';

            a {
                text-decoration: none;
                color: black;
            }

            a:hover {
                color: red;
            }
        }
    }
</style>

<div id="details">
    <h1 id="details-name">{projectName}</h1>
    <h2 id="details-date">{projectDate}</h2>
    <p id="details-about">{projectAbout}</p>
    <div id="details-links">
        {#each projectLinks as link}
            <a href="{link}">{link}</a>
        {/each}
    </div>
</div>