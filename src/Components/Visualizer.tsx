/// <reference path="../babylon.module.d.ts" />

import React from 'react';
import * as BABYLON from 'babylonjs';
import './Visualizer.scss';
import { int } from 'babylonjs';

class Visualizer extends React.Component {
    private canvas: HTMLCanvasElement;
    private music: BABYLON.Sound;

    componentDidMount() {
        const canvas = this.canvas;
        const engine = new BABYLON.Engine(canvas, true);
        BABYLON.Engine.audioEngine.useCustomUnlockedButton = true;

        let createScene = () => {
            // Scene Properties //
            let scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

            // Camera Properties //
            let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.minZ = 0;

            // Light Properties //
            // let light = new BABYLON.HemisphericLight("Omni", new BABYLON.Vector3(0, 0, 0), scene);
            let light = new BABYLON.DirectionalLight("Omni", new BABYLON.Vector3(0, 0, 1), scene);
            light.intensity = 2;

            // Audio Properties //
            this.music = new BABYLON.Sound("music", "/assets/jh-breathethisair.mp3", scene, null, { loop: false, autoplay: false, streaming: true });
            let analyser = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyser);
            analyser.FFT_SIZE = 512;
            analyser.SMOOTHING = 0.85;
            // analyser.DEBUGCANVASPOS = { x: 0, y: 0 };
            // analyser.DEBUGCANVASSIZE = { width: 300, height: 600 };
            // analyser.drawDebugCanvas();

            // Add mesh.
            let mesh = BABYLON.MeshBuilder.CreateIcoSphere("mesh", { radius: 5, subdivisions: 15 }, scene);
            mesh.material = new BABYLON.StandardMaterial("mat", scene);
            mesh.position = new BABYLON.Vector3(0, 0, 0);
            mesh.material.pointsCloud = true;
            mesh.material.pointSize = 5;

            scene.registerBeforeRender(() => {
                let frequencyArray = analyser.getByteFrequencyData();
                let freqMin = 140, freqMax = 235;
                let scaleMin = 0, scaleMax = 1;

                let bassValue = Math.trunc((frequencyArray[0] + frequencyArray[1] + frequencyArray[2]) / 3);
                // console.log(bassValue);

                // Affine transformation of frequency range to scale range.
                if (this.music.isPlaying && !this.music.isPaused) {
                    mesh.scaling.x = mesh.scaling.y = mesh.scaling.z = (Math.min(Math.max(bassValue, freqMin), freqMax) - freqMin) * ((scaleMax - scaleMin) / (freqMax - freqMin)) + scaleMin;
                    // mesh.rotation.x += frequencyArray[6] > 150 ? 0.001 : 0;
                    // mesh.rotation.y += frequencyArray[8] > 150 ? 0.001 : 0;
                    // mesh.rotation.z += frequencyArray[10] > 150 ? 0.001 : 0;

                    mesh.rotation.x -= 0.0005;
                    mesh.rotation.y -= 0.0005;
                }
                else {
                    mesh.scaling.x = mesh.scaling.y = mesh.scaling.z = 1;
                    mesh.rotation.x -= 0.0001;
                    mesh.rotation.y -= 0.0001;
                }
            });

            // Return the created scene.
            return scene;
        }

        let scene = createScene();
        // scene.debugLayer.show();

        engine.runRenderLoop(function () {
            scene.render();
        });

        window.addEventListener("resize", function () {
            engine.resize();
        });
    }

    private toggleMusic = () => {
        if (this.music.isPlaying && !this.music.isPaused) {
            this.music.pause();
            
            document.getElementById("playButtonSVG")?.setAttribute("style", "opacity: 1");
            document.getElementById("pauseButtonSVG")?.setAttribute("style", "opacity: 0");
        }
        else {
            BABYLON.Engine.audioEngine.unlock();
            this.music.play();

            document.getElementById("playButtonSVG")?.setAttribute("style", "opacity: 0");
            document.getElementById("pauseButtonSVG")?.setAttribute("style", "opacity: 1");
        }
    }

    render() {
        return (
            <React.Fragment>
                <canvas id="visualizer" ref={(element: HTMLCanvasElement) => this.canvas = element} />
                <div id="media-buttons">
                    <div id="info">Jon Hopkins - Breathe This Air - Immunity</div>
                    <svg id="toggleMusic" onClick={this.toggleMusic} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {/* Play Button */}
                        <g id="playButtonSVG">
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M8 5v14l11-7L8 5z" />
                        </g>

                        {/* Pause Button */}
                        <g id="pauseButtonSVG" style={{opacity: 0}}>
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