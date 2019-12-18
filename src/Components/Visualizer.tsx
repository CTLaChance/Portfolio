/// <reference path="../babylon.module.d.ts" />

import React from 'react';
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
            var light0 = new BABYLON.DirectionalLight("Omni", new BABYLON.Vector3(-2, -5, 2), scene);
            
            // Audio
            let music = new BABYLON.Sound("ADriftingUp", "/assets/jh-adriftingup.mp3", scene, null, {loop: false, autoplay: true});
            let analyser = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyser);
            analyser.FFT_SIZE = 32;
            analyser.SMOOTHING = 0.9;

            var spatialBoxArray: { scaling: { y: number; }; }[] = [];
            var spatialBox;
            var color;

            for (var index = 0; index < analyser.FFT_SIZE / 2; index++) {
                spatialBox = BABYLON.Mesh.CreateBox("sb" + index, 2, scene);
                spatialBox.position = new BABYLON.Vector3(index * 2, 0, 10);
                spatialBox.material = new BABYLON.StandardMaterial("sbm" + index, scene);
                color = new BABYLON.Color4(0.929, 0.122, 0.012, 0);
                spatialBox.material.diffuseColor = new BABYLON.Color3(color.r, color.g, color.b);
                spatialBoxArray.push(spatialBox);
            }

            scene.registerBeforeRender(function () {
                var workingArray = analyser.getByteFrequencyData();

                for (var i = 0; i < analyser.getFrequencyBinCount(); i++) {
                    spatialBoxArray[i].scaling.y = workingArray[i] / 32;
                }
            });


            // Star System Particle System //
            let particleSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
            particleSystem.emitter = new BABYLON.Vector3(0,0, -11);
            particleSystem.particleTexture = new BABYLON.Texture('/assets/pixel.png', scene);
            particleSystem.particleEmitterType = particleSystem.createBoxEmitter(new BABYLON.Vector3(0, 2, 10),
                                                                                 new BABYLON.Vector3(0, 2, 10),
                                                                                 new BABYLON.Vector3(-3, -3, -1),
                                                                                 new BABYLON.Vector3(3, 3, 1));
            
            particleSystem.emitRate = 200;

            particleSystem.minSize = 0.005;
            particleSystem.maxSize = 0.01;
            
            particleSystem.preWarmCycles = 100;
            particleSystem.preWarmStepOffset = 10;

            particleSystem.minLifeTime = 3.5;
            particleSystem.maxLifeTime = 5;

            particleSystem.color1 = new BABYLON.Color4(0.929, 0.122, 0.012, 0);
            particleSystem.color2 = new BABYLON.Color4(0.929, 0.122, 0.012, 1);
            
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