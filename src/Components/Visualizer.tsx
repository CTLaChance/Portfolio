import React from 'react';
import * as BABYLON from 'babylonjs';
import './Visualizer.scss';

class Visualizer extends React.Component {
    componentDidMount() {
        const canvas = document.getElementById("visualizer") as HTMLCanvasElement;
        const engine = new BABYLON.Engine(canvas, true);
        
        // createScene function that creates and return the scene
        let createScene = function () {
            // Scene Properties
            let scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color4(0,0,0,1);

            // Camera Properties
            let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, -10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());

            // Lighting Properties
            let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 0, 1), scene);
            light.diffuse = light.specular = light.groundColor = new BABYLON.Color3(0.929,0.122,0.012);

            var sphere = BABYLON.Mesh.CreateSphere('sphere1', 1, 1, scene);
            // Particle System
            let particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
            particleSystem.emitter = sphere;
            particleSystem.particleTexture = new BABYLON.Texture('/assets/pixel.png', scene);
            
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
        return <canvas id="visualizer"/>;
    }
}

export default Visualizer;