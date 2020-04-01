<script>
    import {onMount, onDestroy} from 'svelte';
    import * as SimpleLightbox from 'simple-lightbox';
    import data from '../data.json';

    import Profile from './Profile.svelte';
    import Details from './Details.svelte';

    let lightbox;
    let folderIndex = null;
    let projectIndex = null;

    function openFolder(index) {
        folderIndex = index;
    }

    function openProject(index) {
        projectIndex = index;
        setTimeout(function() {
            lightbox = new SimpleLightbox({elements: document.querySelectorAll('.media-card')});
        }, 1);
    }

    function closeFolder() {
        folderIndex = null;
    }

    function closeProject() {
        projectIndex = null;
    }
</script>

<style lang="scss">
    #projects {
        min-height: 100vh;
    }

    #header {
        display: flex;

        #return-button {
            position: absolute;
            right: 0;
            width: 64px;
            height: 64px;
            cursor: pointer;

            transition: transform 0.25s ease-in-out;

            &:hover {
                transform: translate(-10px, 0px);
            }
        }
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
            background-repeat: no-repeat;
            transition: transform .2s ease-in-out;
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
            
            &:before {
                content: "";
                display: block;
                height: 0;
                width: 0;
                padding-bottom: calc(9/16 * 100%);
            }

            &:hover {
                cursor: pointer;
                transform: translate(0px, -5px);
            }
        }

        .media-card {
            &:before {
                padding-bottom: 112.5%;
            }
        }
    }
</style>

<div id="projects">
    <div id="header">
        <Profile />
        {#if folderIndex == null}
            <Details />
        {:else if projectIndex == null}
            <Details projectName={data[folderIndex].name} projectDate={data[folderIndex].date} projectAbout={data[folderIndex].about} projectLinks={data[folderIndex].links}/>
            <div id="return-button" on:click={() => closeFolder()}><span class="iconify" data-icon="mdi-light:arrow-left" data-inline="false" data-width="64" data-height="64"></span></div>
        {:else}
            <Details projectName={data[folderIndex].projects[projectIndex].name} projectDate={data[folderIndex].projects[projectIndex].date} projectAbout={data[folderIndex].projects[projectIndex].about} projectLinks={data[folderIndex].projects[projectIndex].links}/>
            <div id="return-button" on:click={() => closeProject()}><span class="iconify" data-icon="mdi-light:arrow-left" data-inline="false" data-width="64" data-height="64"></span></div>
        {/if}        
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
            {#each data[folderIndex].projects[projectIndex].media as element, i}
                <a class="grid-card media-card" href="{element}" style="background-image: url({element})" on:click={() => lightbox.show()}></a>
            {/each}
        {/if}
    </div>
</div>