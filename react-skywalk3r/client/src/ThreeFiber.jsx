import React, { useRef, useEffect } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  extend,
} from "@react-three/fiber";
import { Stars, FirstPersonControls } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
} from "three";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
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
      autoRotate={false}
      enableZoom={true}
      // maxAzimuthAngle={Math.PI / 4}
      // maxPolarAngle={Math.PI}
      // minAzimuthAngle={-Math.PI / 4}
      // minPolarAngle={0}
    />
  );
};

const Camera = () => {
  const camera = useRef()
  const { aspect, size, setDefaultCamera } = useThree()
  const pixelToThreeUnitRatio = 1
  const planeDistance = 0
  const cameraDistance = 500
  const distance = cameraDistance - planeDistance
  const height = size.height / pixelToThreeUnitRatio
  const halfFovRadians = Math.atan((height / 2) / distance)
  const fov = 2 * halfFovRadians * (180/Math.PI)
  useEffect(() => void setDefaultCamera(camera.current), [])
  return <perspectiveCamera
    ref={camera}
    aspect={aspect}
    fov={fov}
    position={[0, 0, cameraDistance]}
    onUpdate={self => self.updateProjectionMatrix()}
  />
}


function SpaceEnv() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_960_720.jpg",
  ]);
  scene.background = texture;
  return null;
}

// function KeyControls() {
//   const controls = new FlyControls( camera, renderer.domElement );
//   controls.movementSpeed = 1000;
// 				controls.domElement = renderer.domElement;
// 				controls.rollSpeed = Math.PI / 24;
// 				controls.autoForward = false;
// 				controls.dragToLook = false;
// }

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
  const cubeRenderTarget = new WebGLCubeRenderTarget(255, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);
  useFrame(() => cubeCamera.update(gl, scene));
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereBufferGeometry attach="geometry" args={[109, 30, 30]} />
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

function Mercury() {
  const mercDisplay = useRef();
  useFrame(() => (mercDisplay.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      position={[140, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={mercDisplay}
    >
      <sphereBufferGeometry attach="geometry" args={[0.38, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        wireframe
        color="crimson"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function Venus() {
  const venusDisplay = useRef();
  useFrame(() => (venusDisplay.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      position={[160, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={venusDisplay}
    >
      <sphereBufferGeometry attach="geometry" args={[0.95, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        wireframe
        color="tan"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function Earth() {
  const earthDisplay = useRef();
  useFrame(() => (earthDisplay.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      position={[180, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={earthDisplay}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        wireframe
        color="green"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function Mars() {
  const marsDisplay = useRef();
  useFrame(() => (marsDisplay.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      position={[200, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={marsDisplay}
    >
      <sphereBufferGeometry attach="geometry" args={[0.53, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        wireframe
        color="#C2452D"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function Jupiter() {
  const jupDisplay = useRef();
  useFrame(() => (jupDisplay.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      position={[250, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={jupDisplay}
    >
      <sphereBufferGeometry attach="geometry" args={[11.19, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        wireframe
        color="#e36e4b"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function Saturn() {
  const satDisplay = useRef();
  useFrame(() => (satDisplay.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      position={[300, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={satDisplay}
    >
      <sphereBufferGeometry attach="geometry" args={[9.4, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        wireframe
        color="yellow"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function RingOne() {
  const ringOneDisplay = useRef();
  useFrame(() => (ringOneDisplay.current.rotation.x += 0.00));
  return (
    <mesh
      visible
      position={[300, 0, 0]}
      rotation={[30, 10, 0]}
      castShadow
      ref={ringOneDisplay}
    >
      <ringBufferGeometry attach="geometry" args={[11, 13, 30, 30, 6, 6.3]} />
      <meshBasicMaterial attach="material" color="yellow" wireframe />
    </mesh>
  );
}
function RingTwo() {
  const ringTwoDisplay = useRef();
  useFrame(() => (ringTwoDisplay.current.rotation.y += 0.0));
  return (
    <mesh
      visible
      position={[300, 0, 0]}
      rotation={[30, 10, 0]}
      castShadow
      ref={ringTwoDisplay}
    >
      <ringBufferGeometry attach="geometry" args={[12.5, 15, 30, 30, 6, 6.3]} />
      <meshBasicMaterial attach="material" color="brown" wireframe />
    </mesh>
  );
}
function RingThree() {
  const ringThreeDisplay = useRef();
  useFrame(() => (ringThreeDisplay.current.rotation.y += 0.0));
  return (
    <mesh
      visible
      position={[300, 0, 0]}
      rotation={[30, 10, 0]}
      castShadow
      ref={ringThreeDisplay}
    >
      <ringBufferGeometry attach="geometry" args={[15, 17, 30, 30, 6, 6.3]} />
      <meshBasicMaterial attach="material" color="yellow" wireframe />
    </mesh>
  );
}

function Neptune() {
  const neptDisplay = useRef();
  useFrame(() => (neptDisplay.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      position={[350, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={neptDisplay}
    >
      <sphereBufferGeometry attach="geometry" args={[4.04, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        wireframe
        color="navy"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function Uranus() {
  const uranusDisplay = useRef();
  useFrame(() => (uranusDisplay.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      position={[385, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={uranusDisplay}
    >
      <sphereBufferGeometry attach="geometry" args={[3.88, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        wireframe
        color="#4fd0e7"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function Pluto() {
  const pluDisplay = useRef();
  useFrame(() => (pluDisplay.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      position={[420, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={pluDisplay}
    >
      <sphereBufferGeometry attach="geometry" args={[0.18, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        wireframe
        color="violet"
        roughness={0.1}
        metalness={1}
        transparent
      />
    </mesh>
  );
}

function App() {
  const width = window.innerWidth; // canvas width
  const height = window.innerHeight; // canvas heig

  return (
    <>
      <Canvas
        // camera={{ position: [0, 0, 20], fov: 50, near: 15, far: 40 }}
        // orthographic camera={{ zoom: 50, position: [0,0,100] }}

      >
        {/* <Camera /> */}
        {/* <KeyControls /> */}
        {/* <Navigate /> */}
        <FirstPersonControls
         activeLook={true}
        //  autoForward={false}
        //  constrainVertical={false}
         enabled={true}
         heightCoef={1}
         heightMax={1}
         heightMin={0}
        //  heightSpeed={true}
         lookVertical={true}
         lookSpeed={0.1}
         movementSpeed={75}
         verticalMax={Math.PI}
         verticalMin={0}
         />
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <RingOne />
        <RingTwo />
        <RingThree />
        <Neptune />
        <Uranus />
        <Pluto />
        <SpaceEnv />
        <Stars
          radius={225}
          depth={50}
          count={25000}
          factor={7}
          saturation={0}
          fade
        />
      </Canvas>
    </>
  );
}

export default App;
