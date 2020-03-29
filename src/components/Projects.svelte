<script>
    import Profile from './Profile.svelte';
    import Details from './Details.svelte';
    import data from '../data.json';
</script>

<style lang="scss">
    #header {
        display: flex;
    }

    #projects {
        min-height: 100vh;
    }

    #project-array {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-gap: 16px 16px;

        width: 98%;
        margin: 0 auto;
        padding: 16px;
        min-height: 1000px;
        
        // @for $i from 0 to 20 {
        //     :nth-child(#{$i}) {
        //         background: rgb(random(255), random(255), random(255));
        //     }
        // }

        .project-card {
            background-size: cover;
            background-position: center;
        }
    }
</style>

<div id="projects">
    <div id="header">
        <Profile />
        <Details />
    </div>
    <div id="project-array">
        {#each data as element}
            <div id={element.name} class="project-card" style="background-image: url({element.card})"></div>
        {/each}
    </div>
</div>