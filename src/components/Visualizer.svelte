<script>
    import {onMount, onDestroy} from 'svelte';
    import * as BABYLON from 'babylonjs';

    // BabylonJS //
    let canvas;
    let engine;
    
    onMount(async () => {
        engine = new BABYLON.Engine(canvas, true);

        let createScene = () => {
            // Scene Properties //
            let scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);

            // Camera Properties //
            let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -15), scene);

            // Mesh Properties //
            let mesh = BABYLON.MeshBuilder.CreatePolyhedron("mesh", { type: 3, size: 5, flat: true}, scene);
            mesh.material = new BABYLON.StandardMaterial("mat", scene);
            mesh.position = new BABYLON.Vector3(0, 0, 0);
            mesh.material.wireframe = true;
            mesh.material.pointSize = 5;

            let torus = BABYLON.MeshBuilder.CreateTorus("torus", { diameter: 15, thickness: 1, tessellation: 32 }, scene);
            torus.material = new BABYLON.StandardMaterial("torus_mat", scene);
            torus.material.pointsCloud = true;
            torus.material.pointSize = 5;
            torus.rotate(BABYLON.Vector3.Forward(), Math.PI / 6, BABYLON.Space.WORLD);

            let torus2 = BABYLON.MeshBuilder.CreateTorus("torus2", { diameter: 15, thickness: 1, tessellation: 32 }, scene);
            torus2.material = torus.material;
            torus2.rotate(BABYLON.Vector3.Forward(), -Math.PI / 6, BABYLON.Space.WORLD);

            let torus3 = BABYLON.MeshBuilder.CreateTorus("torus2", { diameter: 15, thickness: 1, tessellation: 32 }, scene);
            torus3.material = torus.material;
            torus3.rotate(BABYLON.Vector3.Forward(), Math.PI / 2, BABYLON.Space.WORLD);

            scene.registerBeforeRender(() => {
                mesh.scaling.x = mesh.scaling.y = mesh.scaling.z =
                    torus.scaling.x = torus.scaling.y = torus.scaling.z =
                    torus2.scaling.x = torus2.scaling.y = torus2.scaling.z =
                    torus3.scaling.x = torus3.scaling.y = torus3.scaling.z = 1;

                mesh.rotation.x -= 0.0001;
                mesh.rotation.y -= 0.0001;
                torus.rotate(BABYLON.Vector3.Up(), 0.0001, BABYLON.Space.LOCAL);
                torus2.rotate(BABYLON.Vector3.Up(), -0.0001, BABYLON.Space.LOCAL);
                torus3.rotate(BABYLON.Vector3.Up(), 0.0001, BABYLON.Space.LOCAL);
            });

            return scene;
        }

        let scene = createScene();

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
        display: block;
        opacity: 0;

        @keyframes pageload {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        animation: pageload 1s 1.75s ease-in-out both;
    }
</style>

<canvas id="visualizer" bind:this={canvas}/>