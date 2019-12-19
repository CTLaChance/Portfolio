/// <reference path="../babylon.module.d.ts" />

import React, { forwardRef } from 'react';
import * as BABYLON from 'babylonjs';
import './Visualizer.scss';
import { MeshBuilder } from 'babylonjs';

class Visualizer extends React.Component {
    private canvas : HTMLCanvasElement;

    componentDidMount() {
        // const canvas = document.getElementById("visualizer") as HTMLCanvasElement;
        const canvas = this.canvas;
        const engine = new BABYLON.Engine(canvas, true);
        
        // createScene function that creates and return the scene
        let createScene = function () {
            // Scene Properties
            let scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color4(0,0,0,1);
            
            // Camera Properties
            let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.minZ = 0;

            // Lights
            let light = new BABYLON.HemisphericLight("Omni", new BABYLON.Vector3(0, 0, 0), scene);
            light.intensity = 2;
            
            // Audio
            // https://youtu.be/3RWpLWEetYg
            let music = new BABYLON.Sound("music", "/assets/fp-lesalpx.mp3", scene, null, {loop: false, autoplay: true});
            let analyser = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyser);
            analyser.FFT_SIZE = 32;
            analyser.SMOOTHING = 0.95;

            // Add mesh.
            let mesh = MeshBuilder.CreateIcoSphere("mesh", { radius: 5, subdivisions: 10 }, scene);
            mesh.material = new BABYLON.StandardMaterial("mat", scene);
            mesh.position = new BABYLON.Vector3(0, 0, 0);
            mesh.material.pointsCloud = true;
            mesh.material.pointSize = 5;

            scene.registerBeforeRender(function () {
                let frequencyArray = analyser.getByteFrequencyData();
                let freqMin = 150;
                let freqMax = 230;

                // Affine transformation of frequency range to scale range.
                // (Math.min(Math.max(frequencyArray[1], freqMin), freqMax) - freqMin) * ((maxRotation - minRotation) / (freqMax - freqMin)) + minRotation;
                mesh.scaling.x = mesh.scaling.y = mesh.scaling.z = (Math.min(Math.max(frequencyArray[1], freqMin), freqMax) - freqMin) * ((1 - 0) / (freqMax - freqMin)) + 0;
                mesh.rotation.x += frequencyArray[6] / 50000;
                mesh.rotation.y += frequencyArray[8] / 50000;
                mesh.rotation.z += frequencyArray[10] / 50000;
            });

            // Return the created scene.
            return scene;
        }
        
        // call the createScene function
        let scene = createScene();
        // scene.debugLayer.show();

        // run the render loop
        engine.runRenderLoop(function () {
            scene.render();
        });

        window.addEventListener("resize", function() {
            engine.resize();
        });
    }

    render () {
        return <canvas id="visualizer" ref={(element : HTMLCanvasElement) => this.canvas = element}/>;
    }
}

export default Visualizer;