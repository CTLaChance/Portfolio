<script>
    import Profile from './Profile.svelte';
    import Details from './Details.svelte';
    import data from '../data.json';

    let folderIndex = null;
    let projectIndex = null;

    function openFolder(index) {
        folderIndex = index;
    }

    function openProject(index) {
        projectIndex = index;
    }

    function leaveFolder() {
        folderIndex = null;
    }

    function leaveProject() {
        projectIndex = null;
    }
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
        grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
        grid-gap: 16px 16px;

        width: 98%;
        margin: 0 auto;
        padding: 16px;

        .grid-card {
            background-size: cover;
            background-position: center;
            transition: transform .2s ease-in-out;
            
            &:before {
                content: "";
                display: block;
                height: 0;
                width: 0;
                padding-bottom: calc(9/16 * 100%);
            }

            &:hover {
                cursor: pointer;
                transform: scale(1.05, 1.05);
            }
        }

        .media-card {
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            transition: transform .2s ease-in-out;
            
            &:before {
                content: "";
                display: block;
                height: 0;
                width: 0;
                padding-bottom: 100%;
            }

            &:hover {
                cursor: pointer;
                transform: scale(1.05, 1.05);
            }
        }
    }
</style>

<div id="projects">
    <div id="header">
        <Profile />
        <Details />
    </div>
    <div id="project-array">
        {#if folderIndex == null}
            {#each data as element, i}
                <div id={element.name} class="grid-card" style="background-image: url({element.card})" on:click={() => openFolder(i)}></div>
            {/each}
        {:else if projectIndex == null}
            {#each data[folderIndex].projects as element, i}
                <div id={element.name} class="grid-card" style="background-image: url({element.card})" on:click={() => openProject(i)}></div>
            {/each}
        {:else}
            {#each data[folderIndex].projects[projectIndex].media as element}
                <div id={element.name} class="media-card" style="background-image: url({element})"></div>
            {/each}
        {/if}
    </div>
</div>