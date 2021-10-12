import React, { useRef } from "react";
import {
  Canvas, useFrame, useLoader, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CubeTextureLoader, CubeCamera, WebGLCubeRenderTarget, RGBFormat, LinearMipmapLinearFilter } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "/Users/JonahC/HR/SEI/Senior/react-skywalk3r/react-skywalk3r/client/dist/styles.css";

extend({ OrbitControls });

const Navigate = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />
  );
};

function SpaceEnv() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([

  ]);
  scene.background = texture;
  return null;
}

// function BackDrop() {
//   return (
//     <mesh receiveShadow position={[0, -1, -5]}>
//       <planeBufferGeometry attach="geometry" args={[500, 500]} />
//       <meshStandardMaterial attach="material" color="tan" />
//     </mesh>
//   );
// }

function Sun() {
  const { scene, gl } = useThree();
  // const display = useRef();
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 100, 0);
  scene.add(cubeCamera);
  // useFrame(() => (display.current.rotation.y += 0.001));
  useFrame(() => cubeCamera.update(gl, scene));
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereBufferGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        // envMap={cubeCamera.renderTarget.texture}
        wireframe
        color="#f28500"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function App() {
  return (
    <>
    <Canvas
    camera={{ position: [0, 0, 20], fov: 50, near: 15, far: 40 }}
    className="canvas">
      <Navigate />
      <Sun />
      <SpaceEnv />
    </Canvas>
    </>
  );
}

export default App;