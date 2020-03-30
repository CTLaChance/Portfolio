<script>
    import Profile from './Profile.svelte';
    import Details from './Details.svelte';
    import data from '../data.json';

    let folderIndex = null;

    function openFolder(index) {
        folderIndex = index;
        console.log(`Opening folder: ${folderIndex}`);
    }

    function leaveFolder() {
        folderIndex = null;
        console.log("LEAVE FOLDER");
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
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-gap: 16px 16px;

        width: 98%;
        margin: 0 auto;
        padding: 16px;
        min-height: 50vh;

        .project-card {
            background-size: cover;
            background-position: center;
            transition: transform .2s ease-in-out;

            // Cyberpunk Flicker Animation //
            @keyframes opacity-flicker {
                0%,
                24%,
                26%,
                49%,
                51%,
                74%,
                76%,
                99%{
                    opacity: 0;
                }
                25%,
                50%,
                75%,
                100% {
                    opacity: 1;
                }
            }

            // Stagger grid item animations for a more organic feel.
            @for $i from 0 through 20 {
                &:nth-child(#{$i}) {
                    animation: .50s linear #{random(10) * .05}s 1 opacity-flicker;
                    animation-fill-mode: both;
                }
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
                <div id={element.name} class="project-card" style="background-image: url({element.card})" on:click={() => openFolder(i)}></div>
            {/each}
        {:else}
            {#each data[folderIndex].projects as element, i}
                <div id={element.name} class="project-card" style="background-image: url({element.card})" on:click={() => openFolder(i)}></div>
            {/each}
        {/if}
    </div>
</div>