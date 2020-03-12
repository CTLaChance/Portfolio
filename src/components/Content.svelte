<script>
    import {onMount} from 'svelte';

    let name;

    onMount(async() => {
        let nameChars = name.children;
        for (let element of nameChars){
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
    #content {
        height: 100vh;
        width: 1000px;
        min-width: 50vw;
        max-width: 100vw;
        position: relative;

        background-color: rgba(#ffffff, 0.75);
        backdrop-filter: blur(5px);

        #name {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            margin: 0;
            
            //Font
            font-family: 'Tomorrow', sans-serif;
            color: black;
            font-weight: 100;
            font-size: 70px;
            letter-spacing: -5px;
            text-align: center;
        }

        #chevron-down {
            position: fixed;
            left: 50%;
            bottom: 0;
            transform: translate(-50%, -50%);
        }
    }
</style>

<div id="content">
    <h1 bind:this={name} id="name">
        <span>C</span>
        <span>H</span>
        <span>R</span>
        <span>I</span>
        <span>S</span>
        <span>T</span>
        <span>O</span>
        <span>P</span>
        <span>H</span>
        <span>E</span>
        <span>R</span>
        <span>&nbsp;</span>
        <span>L</span>
        <span>A</span>
        <span>C</span>
        <span>H</span>
        <span>A</span>
        <span>N</span>
        <span>C</span>
        <span>E</span>
    </h1>
    <svg id="chevron-down" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
</div>