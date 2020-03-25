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
    #name {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 55%;
        margin: 0;
        
        //Font
        font-family: 'Tomorrow', sans-serif;
        color: black;
        font-weight: 100;
        font-size: 70px;
        letter-spacing: -5px;
        text-align: center;
        word-wrap: break-word;

        background-color: rgba(#ffffff, 0.75);
        backdrop-filter: blur(5px);
    }
</style>

<h1 bind:this={name} id="name" aria-label="Christopher LaChance">
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
    <span aria-hidden="true">&nbsp;</span>
    <span aria-hidden="true">L</span>
    <span aria-hidden="true">A</span>
    <span aria-hidden="true">C</span>
    <span aria-hidden="true">H</span>
    <span aria-hidden="true">A</span>
    <span aria-hidden="true">N</span>
    <span aria-hidden="true">C</span>
    <span aria-hidden="true">E</span>
</h1>