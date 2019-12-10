import React from 'react';
import * as BABYLON from 'babylonjs';
import './Visualizer.scss';
import { Color4 } from 'babylonjs';

class Visualizer extends React.Component {
    componentDidMount() {
        const canvas = document.getElementById("visualizer") as HTMLCanvasElement;
        const engine = new BABYLON.Engine(canvas, true);
        
        // createScene function that creates and return the scene
        var createScene = function () {
            // Scene Properties
            var scene = new BABYLON.Scene(engine);
            scene.clearColor = new Color4(0,0,0,1);

            // Camera Properties
            var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, -10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());

            // Lighting Properties
            var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 0, 1), scene);
            light.diffuse = light.specular = light.groundColor = new BABYLON.Color3(0.929,0.122,0.012);

            var sphere = BABYLON.Mesh.CreateSphere('sphere1', 1, 1, scene);

            // return the created scene
            return scene;
        }

        // call the createScene function
        var scene = createScene();

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