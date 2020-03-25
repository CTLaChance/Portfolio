<script>
    import Profile from './Profile.svelte';
    import data from '../data.json';
</script>

<style lang="scss">
    #projects {
        min-height: 100vh;
    }

    #project-array {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-gap: 16px 16px;

        width: 98%;
        margin: 0 auto;
        min-height: 700px;
        
        @for $i from 0 to 20 {
            :nth-child(#{$i}) {
                background: rgb(random(255), random(255), random(255));
            }
        }
    }
</style>

<div id="projects">
    <Profile />
    <div id="project-array">
        {#each data as element}
            <div id={element.name} class="project-card"></div>
        {/each}
    </div>
</div>