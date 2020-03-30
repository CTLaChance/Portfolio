<script>
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
    <h1 id="details-name">Portfolio</h1>
    <h2 id="details-date">26-MAR-2020</h2>
    <p id="details-about">This site is the second revision of my portfolio and contains projects both personal and professional. The current revision was made using Svelte, SCSS, and Javascript. The source code can be found at the repository below.</p>
    <div id="details-links">
        <a href="https://github.com/CTLaChance/Portfolio">https://github.com/CTLaChance/Portfolio</a>
    </div>
</div>