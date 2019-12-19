/// <reference path="../babylon.module.d.ts" />

import React, { forwardRef } from 'react';
import * as BABYLON from 'babylonjs';
import './Visualizer.scss';

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
            let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, -10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.minZ = 0;

            // Lights
            var light = new BABYLON.DirectionalLight("Omni", new BABYLON.Vector3(0, 0, 1), scene);
            
            // Audio
            let music = new BABYLON.Sound("ADriftingUp", "/assets/fp-lesalpx.mp3", scene, null, {loop: false, autoplay: true});
            let analyser = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyser);
            analyser.FFT_SIZE = 32;
            analyser.SMOOTHING = 0.9;

            var reactivePixelArray = [];
            var reactivePixel = BABYLON.Mesh.CreateBox("pixel", 0.05, scene);
            reactivePixel.position = new BABYLON.Vector3(0, 0, 0);
            reactivePixel.material = new BABYLON.StandardMaterial("sbm", scene);

            scene.registerBeforeRender(function () {
                let frequencyArray = analyser.getByteFrequencyData();
                let maxSize = 25;
                let minSize = 0;
                let freqMin = 200;
                let freqMax = 230;

                // Affine transformation of frequency range to scale range.
                reactivePixel.scaling.y = reactivePixel.scaling.x = (Math.min(Math.max(frequencyArray[1], freqMin), freqMax) - freqMin) * ((maxSize - minSize)/(freqMax - freqMin)) + minSize;
            });


            // Star System Particle System //
            let particleSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
            particleSystem.emitter = new BABYLON.Vector3(0,0, -11);
            particleSystem.particleTexture = new BABYLON.Texture('/assets/pixel.png', scene);
            particleSystem.particleEmitterType = particleSystem.createBoxEmitter(new BABYLON.Vector3(0, 0, 10),
                                                                                 new BABYLON.Vector3(0, 0, 10),
                                                                                 new BABYLON.Vector3(-3, -3, -1),
                                                                                 new BABYLON.Vector3(3, 3, 1));
            
            particleSystem.emitRate = 200;

            particleSystem.minSize = 0.005;
            particleSystem.maxSize = 0.01;
            
            particleSystem.preWarmCycles = 100;
            particleSystem.preWarmStepOffset = 10;

            particleSystem.minLifeTime = 3.5;
            particleSystem.maxLifeTime = 5;

            particleSystem.color1 = new BABYLON.Color4(1,1,1,1);
            particleSystem.color2 = new BABYLON.Color4(1,1,1,1);
            
            particleSystem.start();
            
            // return the created scene
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