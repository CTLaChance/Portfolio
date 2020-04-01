<script>
    import {onMount, onDestroy} from 'svelte';
    import * as BABYLON from 'babylonjs';

    let canvas;
    let engine;
    let music;

    onMount(async () => {
        engine = new BABYLON.Engine(canvas, true);
        BABYLON.Engine.audioEngine.useCustomUnlockedButton = true;

        //Scene 1
        let createScene = () => {
            // Scene Properties //
            let scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);

            // Camera Properties //
            let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -15), scene);

            // Audio Properties //
            music = new BABYLON.Sound("music", "/music/jh-openeyesignallive.mp3", scene, null, { loop: false, autoplay: true, streaming: true });
            let analyser = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyser);
            analyser.FFT_SIZE = 32;
            analyser.SMOOTHING = 0.90;

            let bassFreqMin = 200;
            let bassFreqMax = 220;
            let midFreqMin = 150;
            let midFreqMax = 230;
            let highFreqMin = 60;
            let highFreqMax = 130;
            let bassValue = 0;
            let midValue = 0;
            let highValue = 0;
            let bassValueScaled, midValueScaled, highValueScaled = 0;
            let scaleMin = 0, scaleMax = 1; // Value range we're converting the above ranges to.
            let frequencyArray;

            // Mesh Properties //
            // let mesh = BABYLON.MeshBuilder.CreateIcoSphere("mesh", { radius: 5, subdivisions: 10 }, scene);
            let mesh = BABYLON.MeshBuilder.CreatePolyhedron("mesh", { type: 3, size: 5, flat: true}, scene);
            mesh.material = new BABYLON.StandardMaterial("mat", scene);
            mesh.position = new BABYLON.Vector3(0, 0, 0);
            // mesh.material.pointsCloud = true;
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
                frequencyArray = analyser.getByteFrequencyData();

                for (let i = 0; i < analyser.getFrequencyBinCount(); i++) {
                    // if (i < Math.floor(analyser.getFrequencyBinCount() / 3)) {
                    //     bassValue += frequencyArray[i];
                    // }
                    if (i > (analyser.getFrequencyBinCount() - Math.floor(analyser.getFrequencyBinCount() / 3))) {
                        highValue += frequencyArray[i];
                    }
                    else if (i >= 3) {
                        midValue += frequencyArray[i];
                    }
                }

                bassValue = (frequencyArray[0] + frequencyArray[1] + frequencyArray[2]) / 3;

                // bassValue /= Math.floor((analyser.getFrequencyBinCount() / 3));
                midValue /= Math.floor((analyser.getFrequencyBinCount() / 3) + (analyser.getFrequencyBinCount() % 3) + 2);
                highValue /= Math.floor((analyser.getFrequencyBinCount() / 3));

                // console.log(`Bass Value: ${bassValue}, Mid Value: ${midValue}, High Value: ${highValue}`);

                if (music.isPlaying && !music.isPaused) {
                    // Affine transformations of various frequency ranges to [0,1] scalar range.
                    bassValueScaled = (Math.min(Math.max(bassValue, bassFreqMin), bassFreqMax) - bassFreqMin) * ((scaleMax - scaleMin) / (bassFreqMax - bassFreqMin)) + scaleMin;
                    midValueScaled = (Math.min(Math.max(midValue, midFreqMin), midFreqMax) - midFreqMin) * ((scaleMax - scaleMin) / (midFreqMax - midFreqMin)) + scaleMin;
                    highValueScaled = (Math.min(Math.max(highValue, highFreqMin), highFreqMax) - highFreqMin) * ((scaleMax - scaleMin) / (highFreqMax - highFreqMin)) + scaleMin;

                    mesh.scaling.x = mesh.scaling.y = mesh.scaling.z = bassValueScaled;
                    mesh.rotation.x -= 0.005 * bassValueScaled;
                    mesh.rotation.y += 0.005 * midValueScaled;
                    mesh.rotation.z -= 0.005 * highValueScaled;

                    torus.scaling.x = torus.scaling.y = torus.scaling.z = 1;
                    torus2.scaling.x = torus2.scaling.y = torus2.scaling.z = 1;
                    torus3.scaling.x = torus3.scaling.y = torus3.scaling.z = 1;

                    // torus.scaling.x = torus.scaling.y = torus.scaling.z = midValueScaled;
                    torus.rotate(BABYLON.Vector3.Up(), -0.001 + (0.01 * highValueScaled), BABYLON.Space.LOCAL);

                    // torus2.scaling.x = torus2.scaling.y = torus2.scaling.z = highValueScaled;
                    torus2.rotate(BABYLON.Vector3.Up(), 0.001 + (-0.01 * midValueScaled), BABYLON.Space.LOCAL);

                    // torus3.scaling.x = torus3.scaling.y = torus3.scaling.z = midValueScaled + highValueScaled;
                    torus3.rotate(BABYLON.Vector3.Up(), -0.001 + (0.01 * bassValueScaled), BABYLON.Space.LOCAL);
                }
                else {
                    mesh.scaling.x = mesh.scaling.y = mesh.scaling.z =
                        torus.scaling.x = torus.scaling.y = torus.scaling.z =
                        torus2.scaling.x = torus2.scaling.y = torus2.scaling.z =
                        torus3.scaling.x = torus3.scaling.y = torus3.scaling.z = 1;

                    mesh.rotation.x -= 0.0001;
                    mesh.rotation.y -= 0.0001;
                    torus.rotate(BABYLON.Vector3.Up(), 0.0001, BABYLON.Space.LOCAL);
                    torus2.rotate(BABYLON.Vector3.Up(), -0.0001, BABYLON.Space.LOCAL);
                    torus3.rotate(BABYLON.Vector3.Up(), 0.0001, BABYLON.Space.LOCAL);
                }
            });

            return scene;
        }

        //Scene 2
        let createScene2 = () => {
            // Scene Properties //
            let scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);

            // Camera Properties //
            let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -15), scene);

            // Audio Properties //
            music = new BABYLON.Sound("music", "/music/jh-openeyesignallive.mp3", scene, null, { loop: false, autoplay: false, streaming: false });
            let analyser = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyser);
            analyser.FFT_SIZE = 32;
            analyser.SMOOTHING = 0.90;

            let bassFreqMin = 200;
            let bassFreqMax = 220;
            let midFreqMin = 150;
            let midFreqMax = 230;
            let highFreqMin = 60;
            let highFreqMax = 130;
            let bassValue = 0;
            let midValue = 0;
            let highValue = 0;
            let bassValueScaled, midValueScaled, highValueScaled = 0;
            let scaleMin = 0, scaleMax = 1; // Value range we're converting the above ranges to.
            let frequencyArray;

            scene.registerBeforeRender(() => {
                frequencyArray = analyser.getByteFrequencyData();

                for (let i = 0; i < analyser.getFrequencyBinCount(); i++) {
                    if (i > (analyser.getFrequencyBinCount() - Math.floor(analyser.getFrequencyBinCount() / 3))) {
                        highValue += frequencyArray[i];
                    }
                    else if (i >= 3) {
                        midValue += frequencyArray[i];
                    }
                }

                bassValue = (frequencyArray[0] + frequencyArray[1] + frequencyArray[2]) / 3;
                midValue /= Math.floor((analyser.getFrequencyBinCount() / 3) + (analyser.getFrequencyBinCount() % 3) + 2);
                highValue /= Math.floor((analyser.getFrequencyBinCount() / 3));
                
                // Affine transformations of various frequency ranges to [0,1] scalar range.
                bassValueScaled = (Math.min(Math.max(bassValue, bassFreqMin), bassFreqMax) - bassFreqMin) * ((scaleMax - scaleMin) / (bassFreqMax - bassFreqMin)) + scaleMin;
                midValueScaled = (Math.min(Math.max(midValue, midFreqMin), midFreqMax) - midFreqMin) * ((scaleMax - scaleMin) / (midFreqMax - midFreqMin)) + scaleMin;
                highValueScaled = (Math.min(Math.max(highValue, highFreqMin), highFreqMax) - highFreqMin) * ((scaleMax - scaleMin) / (highFreqMax - highFreqMin)) + scaleMin;

                if (music.isPlaying && !music.isPaused) {
                    // Do stuff.
                }
            });
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

    window.addEventListener('mousedown', () => {
        // BABYLON.Engine.audioEngine.unlock();
        // music.play();
    });
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
    }
</style>

<canvas id="visualizer" bind:this={canvas} on:/>