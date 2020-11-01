<script>
    import {onMount, onDestroy} from 'svelte';
    import * as BABYLON from 'babylonjs';

    // BabylonJS //
    let canvas;
    let engine;
    
    onMount(async () => {
        engine = new BABYLON.Engine(canvas, true);

        let scene = (() => {
            // Scene Properties //
            let scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);

            // Camera Properties //
            let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -15), scene);

            // Mesh Properties //
            let torus = BABYLON.MeshBuilder.CreateTorus("torus", { diameter: 15, thickness: 1, tessellation: 32 }, scene);
            torus.material = new BABYLON.StandardMaterial("torus_mat", scene);
            torus.material.pointsCloud = true;
            torus.material.pointSize = 2.5;
            torus.rotate(BABYLON.Vector3.Right(), Math.PI / 2, BABYLON.Space.WORLD);
            torus.rotate(BABYLON.Vector3.Forward(), -Math.PI / 3, BABYLON.Space.WORLD);

            let torus2 = BABYLON.MeshBuilder.CreateTorus("torus2", { diameter: 15, thickness: 1, tessellation: 32 }, scene);
            torus2.material = torus.material;
            torus2.rotate(BABYLON.Vector3.Right(), Math.PI / 2, BABYLON.Space.WORLD);
            torus2.rotate(BABYLON.Vector3.Forward(), Math.PI / 3, BABYLON.Space.WORLD);

            let torus3 = BABYLON.MeshBuilder.CreateTorus("torus2", { diameter: 15, thickness: 1, tessellation: 32 }, scene);
            torus3.material = torus.material;
            torus3.rotate(BABYLON.Vector3.Right(), Math.PI / 2, BABYLON.Space.WORLD);

            let canRotate = false;
            let rotateAmount = 0;
            setTimeout(() => {canRotate = true}, 4000);

            scene.registerBeforeRender(() => {
                if (canRotate && rotateAmount < 0.002) {
                    rotateAmount += 0.000005;
                }

                torus.scaling.x = torus.scaling.y = torus.scaling.z = 1;
                torus2.scaling.x = torus2.scaling.y = torus2.scaling.z = 0.75;
                torus3.scaling.x = torus3.scaling.y = torus3.scaling.z = 0.5;

                torus.rotate(BABYLON.Vector3.Up(),  -0.001, BABYLON.Space.LOCAL);
                torus2.rotate(BABYLON.Vector3.Up(), 0.001, BABYLON.Space.LOCAL);
                torus3.rotate(BABYLON.Vector3.Up(), -0.001, BABYLON.Space.LOCAL);

                torus.rotate(BABYLON.Vector3.Right(),  rotateAmount, BABYLON.Space.LOCAL);
                torus2.rotate(BABYLON.Vector3.Right(), rotateAmount, BABYLON.Space.LOCAL);
                torus3.rotate(BABYLON.Vector3.Right(), rotateAmount, BABYLON.Space.LOCAL);

                torus.rotate(BABYLON.Vector3.Forward(),  rotateAmount, BABYLON.Space.LOCAL);
                torus2.rotate(BABYLON.Vector3.Forward(), rotateAmount, BABYLON.Space.LOCAL);
                torus3.rotate(BABYLON.Vector3.Forward(), rotateAmount, BABYLON.Space.LOCAL);
            });

            return scene;
        })();

        engine.runRenderLoop(function () {
            scene.render();
        });

        window.addEventListener("resize", onResizeWindow);
    });

    onDestroy(async () => {
        window.removeEventListener("resize", onResizeWindow);
    });

    let onResizeWindow = () => {
        if (engine) {
            engine.resize();
        }
    }
</script>

<style lang="scss">
    #visualizer {
        height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        pointer-events: none;
        opacity: 0;

        position: fixed;
        z-index: -1000;

        @media print {
            display: none;
        }

        @keyframes pageload {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        animation: pageload 3s 2s ease-in-out both;
    }
</style>

<canvas id="visualizer" bind:this={canvas}/>