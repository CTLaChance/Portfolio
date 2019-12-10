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

            // Particle System
            let particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
            // particleSystem.emitter = particleSystem.createPointEmitter(BABYLON.Vector3.Zero(), BABYLON.Vector3.Zero());
            particleSystem.emitter = BABYLON.Vector3.Zero();
            particleSystem.particleTexture = new BABYLON.Texture('/assets/pixel.png', scene);
            
            particleSystem.minSize = 0.01;
            particleSystem.maxSize = 0.02;
            
            particleSystem.minLifeTime = 3.5;
            particleSystem.maxLifeTime = 5;

            particleSystem.color1 = particleSystem.color2 = new BABYLON.Color4(0.929, 0.122, 0.012, 1);
            
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
        return <canvas className="visualizer" ref={(element : HTMLCanvasElement) => this.canvas = element}/>;
        // return <canvas id="visualizer"/>;
    }
}

export default Visualizer;