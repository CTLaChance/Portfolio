/// <reference path="../babylon.module.d.ts" />

import React from 'react';
import * as BABYLON from 'babylonjs';
import './Visualizer.scss';

class Visualizer extends React.Component {
    private canvas : HTMLCanvasElement;
    private music : BABYLON.Sound;

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
            this.music = new BABYLON.Sound("music", "/assets/noisia-thehole.mp3", scene, null, { loop: false, autoplay: false, streaming: true });
            let analyser = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyser);
            analyser.FFT_SIZE = 32;
            analyser.SMOOTHING = 0.95;

            // Add mesh.
            let mesh = BABYLON.MeshBuilder.CreateIcoSphere("mesh", { radius: 5, subdivisions: 15 }, scene);
            mesh.material = new BABYLON.StandardMaterial("mat", scene);
            mesh.position = new BABYLON.Vector3(0, 0, 0);
            mesh.material.pointsCloud = true;
            mesh.material.pointSize = 5;

            scene.registerBeforeRender(() => {
                let frequencyArray = analyser.getByteFrequencyData();
                let freqMin = 180;
                let freqMax = 235;

                // Affine transformation of frequency range to scale range.
                // (Math.min(Math.max(frequencyArray[1], freqMin), freqMax) - freqMin) * ((maxRotation - minRotation) / (freqMax - freqMin)) + minRotation;
                if (this.music.isPlaying && !this.music.isPaused) {
                    mesh.scaling.x = mesh.scaling.y = mesh.scaling.z = (Math.min(Math.max(frequencyArray[1], freqMin), freqMax) - freqMin) * ((1 - 0) / (freqMax - freqMin)) + 0;
                    mesh.rotation.x += frequencyArray[6] > 140 ? 0.005 : 0;
                    mesh.rotation.y += frequencyArray[8] > 140 ? 0.005 : 0;
                    mesh.rotation.z += frequencyArray[10] > 130 ? 0.005 : 0;
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

    private playMusic = () => {
        BABYLON.Engine.audioEngine.unlock();
        this.music.play();
    }

    private pauseMusic = () => {
        this.music.pause();
    }

    render() {
        return (
            <React.Fragment>
            <canvas id="visualizer" ref={(element: HTMLCanvasElement) => this.canvas = element} />
            <div id="media-buttons">
                <button id="play" onClick={this.playMusic}>PLAY</button>
                <button id="pause" onClick={this.pauseMusic}>PAUSE</button>
            </div>
            </React.Fragment>
        );
    }
}

export default Visualizer;