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
            let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.minZ = 0;

            // Light Properties //
            let light = new BABYLON.DirectionalLight("Omni", new BABYLON.Vector3(0, 0, 1), scene);
            light.intensity = 2;

            // Audio Properties //
            this.music = new BABYLON.Sound("music", "/assets/jh-breathethisair.mp3", scene, null, { loop: true, autoplay: false, streaming: true });
            let analyser = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyser);
            analyser.FFT_SIZE = 512;
            analyser.SMOOTHING = 0.85;

            let freqMin = 140, freqMax = 235;
            let scaleMin = 0, scaleMax = 1;
            let bassValue = 0;
            let frequencyArray;

            // Mesh Properties //
            let mesh = BABYLON.MeshBuilder.CreateIcoSphere("mesh", { radius: 5, subdivisions: 17 }, scene);
            mesh.material = new BABYLON.StandardMaterial("mat", scene);
            mesh.position = new BABYLON.Vector3(0, 0, 0);
            mesh.material.pointsCloud = true;
            mesh.material.pointSize = 5;

            scene.registerBeforeRender(() => {
                frequencyArray = analyser.getByteFrequencyData();

                bassValue = Math.trunc((frequencyArray[0] + frequencyArray[1] + frequencyArray[2]) / 3);

                if (this.music.isPlaying && !this.music.isPaused) {
                    // Affine transformation of frequency range to scale range.
                    mesh.scaling.x = mesh.scaling.y = mesh.scaling.z = (Math.min(Math.max(bassValue, freqMin), freqMax) - freqMin) * ((scaleMax - scaleMin) / (freqMax - freqMin)) + scaleMin;
                    mesh.rotation.x -= 0.001;
                    mesh.rotation.y -= 0.001;
                }
                else {
                    mesh.scaling.x = mesh.scaling.y = mesh.scaling.z = 1;
                    mesh.rotation.x -= 0.0001;
                    mesh.rotation.y -= 0.0001;
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
                <canvas id="visualizer" ref={(element: HTMLCanvasElement) => this.canvas = element} />
                <div id="media-buttons">
                    <div id="info">Jon Hopkins - Breathe This Air - Immunity</div>
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
            </React.Fragment>
        );
    }
}

export default Visualizer;