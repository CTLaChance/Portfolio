/// <reference path="../babylon.module.d.ts" />

import React from 'react';
import * as BABYLON from 'babylonjs';
import './Visualizer.scss';

class Visualizer extends React.Component {
    private engine: BABYLON.Engine;
    private canvas: HTMLCanvasElement;
    private music: BABYLON.Sound;

    componentDidMount() {
        const canvas = this.canvas;
        this.engine = new BABYLON.Engine(canvas, true);
        BABYLON.Engine.audioEngine.useCustomUnlockedButton = true;

        let createScene = () => {
            // Scene Properties //
            let scene = new BABYLON.Scene(this.engine);
            scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

            // Camera Properties //
            // let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -10), scene);
            // camera.setTarget(BABYLON.Vector3.Zero());
            let camera = new BABYLON.ArcRotateCamera('camera', 0, Math.PI / 2, 15, new BABYLON.Vector3(0, 0, 0), scene);
            camera.attachControl(this.canvas, true);
            camera.panningSensibility = 0;  // Disable panning.
            // camera.inputs.remove(camera.inputs.attached.mousewheel); // Disable zooming.
            camera.useAutoRotationBehavior = true;
            camera.autoRotationBehavior.idleRotationSpeed = 0.1;
            camera.autoRotationBehavior.idleRotationWaitTime = 5000;
            camera.autoRotationBehavior.idleRotationSpinupTime = 2500;
            camera.minZ = 0;

            // Light Properties //
            // let light = new BABYLON.DirectionalLight("Omni", new BABYLON.Vector3(0, 0, 1), scene);
            let light = new BABYLON.HemisphericLight("Omni", new BABYLON.Vector3(0, 0, 0), scene);
            light.intensity = 2;

            // Audio Properties //
            this.music = new BABYLON.Sound("music", "/assets/jh-openeyesignallive.mp3", scene, null, { loop: true, autoplay: false, streaming: true });
            let analyser = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyser);
            analyser.FFT_SIZE = 32;
            analyser.SMOOTHING = 0.85;

            let bassFreqMin = 200;
            let bassFreqMax = 255;
            let midFreqMin = 150;
            let midFreqMax = 240;
            let highFreqMin = 60;
            let highFreqMax = 130;
            let bassValue: number = 0;
            let midValue: number = 0;
            let highValue: number = 0;
            let bassValueScaled, midValueScaled, highValueScaled = 0;
            let scaleMin = 0, scaleMax = 1; // Value range we're converting the above ranges to.
            let frequencyArray;

            // Mesh Properties //
            let mesh = BABYLON.MeshBuilder.CreateIcoSphere("mesh", { radius: 5, subdivisions: 10 }, scene);
            mesh.material = new BABYLON.StandardMaterial("mat", scene);
            mesh.position = new BABYLON.Vector3(0, 0, 0);
            // mesh.material.pointsCloud = true;
            mesh.material.wireframe = true;
            mesh.material.pointSize = 5;

            let torus = BABYLON.MeshBuilder.CreateTorus("torus", { diameter: 15, thickness: 1, tessellation: 32 }, scene);
            torus.material = new BABYLON.StandardMaterial("torus_mat", scene);
            torus.material.pointsCloud = true;
            torus.material.pointSize = 5;
            torus.rotate(BABYLON.Vector3.Right(), Math.PI / 6, BABYLON.Space.WORLD);

            let torus2 = BABYLON.MeshBuilder.CreateTorus("torus2", { diameter: 15, thickness: 1, tessellation: 32 }, scene);
            torus2.material = torus.material;
            torus2.rotate(BABYLON.Vector3.Right(), -Math.PI / 6, BABYLON.Space.WORLD);

            let torus3 = BABYLON.MeshBuilder.CreateTorus("torus2", { diameter: 15, thickness: 1, tessellation: 32 }, scene);
            torus3.material = torus.material;
            torus3.rotate(BABYLON.Vector3.Right(), Math.PI / 2, BABYLON.Space.WORLD);

            scene.registerBeforeRender(() => {
                frequencyArray = analyser.getByteFrequencyData();

                for (let i = 0; i < analyser.getFrequencyBinCount(); i++) {
                    if (i < Math.floor(analyser.getFrequencyBinCount() / 3)) {
                        bassValue += frequencyArray[i];
                    }
                    else if (i > (analyser.getFrequencyBinCount() - Math.floor(analyser.getFrequencyBinCount() / 3))) {
                        highValue += frequencyArray[i];
                    }
                    else {
                        midValue += frequencyArray[i];
                    }
                }
                bassValue /= Math.floor((analyser.getFrequencyBinCount() / 3));
                midValue /= Math.floor((analyser.getFrequencyBinCount() / 3) + (analyser.getFrequencyBinCount() % 3));
                highValue /= Math.floor((analyser.getFrequencyBinCount() / 3));

                // console.log(`Bass Value: ${bassValue}, Mid Value: ${midValue}, High Value: ${highValue}`);

                if (this.music.isPlaying && !this.music.isPaused) {
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
                    torus.rotate(BABYLON.Vector3.Up(), 0.0001 + (0.01 * highValueScaled), BABYLON.Space.LOCAL);

                    // torus2.scaling.x = torus2.scaling.y = torus2.scaling.z = highValueScaled;
                    torus2.rotate(BABYLON.Vector3.Up(), -0.0001 + (0.01 * midValueScaled), BABYLON.Space.LOCAL);

                    // torus3.scaling.x = torus3.scaling.y = torus3.scaling.z = midValueScaled + highValueScaled;
                    torus3.rotate(BABYLON.Vector3.Up(), -0.0001 + (0.01 * bassValueScaled), BABYLON.Space.LOCAL);
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
                }
            });

            return scene;
        }

        let scene = createScene();

        this.engine.runRenderLoop(function () {
            scene.render();
        });

        window.addEventListener("resize", this.onResizeWindow);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResizeWindow);
    }

    onResizeWindow = () => {
        if (this.engine) {
            this.engine.resize();
        }
    }

    private toggleMusic = () => {
        if (this.music.isPlaying && !this.music.isPaused) {
            this.music.pause();

            document.getElementById("play-button")?.setAttribute("style", "opacity: 1");
            document.getElementById("pause-button")?.setAttribute("style", "opacity: 0");
        }
        else {
            BABYLON.Engine.audioEngine.unlock();
            this.music.play();

            document.getElementById("play-button")?.setAttribute("style", "opacity: 0");
            document.getElementById("pause-button")?.setAttribute("style", "opacity: 1");
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* Group together the visualizer and media buttons so they appear together. */}
                <div id="visualizer-wrapper">
                    <canvas id="visualizer" ref={(element: HTMLCanvasElement) => this.canvas = element} />
                    <div id="media-buttons">
                        <div id="info">Jon Hopkins - Open Eye Signal (Villain Live Edit) - Immunity</div>
                        <svg id="toggle-music" onClick={this.toggleMusic} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g id="play-button">
                                <path fill="none" d="M0 0h24v24H0V0z" />
                                <path d="M8 5v14l11-7L8 5z" />
                            </g>

                            <g id="pause-button" style={{ opacity: 0 }}>
                                <path fill="none" d="M0 0h24v24H0V0z" />
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Visualizer;