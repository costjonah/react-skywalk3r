import React, { useRef, useEffect, Suspense } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  extend,
} from "@react-three/fiber";
import {
  Stars,
  FirstPersonControls,
  CurveModifier,
  CurveModifierRef,
} from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three/build/three.module.js";
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

import SunModel from "../models/SunModel.js";
import MercuryModel from "../models/MercuryModel.js";
import VenusModel from "../models/VenusModel.js";
import EarthModel from "../models/EarthModel.js";
import MoonModel from "../models/MoonModel.js";
import MarsModel from "../models/MarsModel.js";
import JupiterModel from "../models/JupiterModel.js";
import SaturnModel from "../models/SaturnModel.js";
import UranusModel from "../models/UranusModel.js";
import NeptuneModel from "../models/NeptuneModel.js";
import PlutoModel from "../models/PlutoModel.js";
import HubbleModel from "../models/HubbleModel.js";

extend({ OrbitControls });

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

function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <>
      <Canvas
        className="canvasAfter"
        camera={{
          position: [100, 200, 500],
          fov: 50,
          aspect: width / height,
          near: 1,
          far: 9000,
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <FirstPersonControls
          activeLook={true}
          enabled={true}
          heightCoef={1}
          heightMax={1}
          heightMin={0}
          lookVertical={true}
          lookSpeed={0.1}
          movementSpeed={50}
          verticalMax={Math.PI}
          verticalMin={0}
        />
        <Suspense fallback={null}>
          <SunModel />
        </Suspense>
        <Suspense fallback={null}>
          <MercuryModel />
        </Suspense>
        <Suspense fallback={null}>
          <VenusModel />
        </Suspense>
        <Suspense fallback={null}>
          <EarthModel />
        </Suspense>
        <Suspense fallback={null}>
          <MoonModel />
        </Suspense>
        <Suspense fallback={null}>
          <MarsModel />
        </Suspense>
        <Suspense fallback={null}>
          <JupiterModel />
        </Suspense>
        <Suspense fallback={null}>
          <SaturnModel />
        </Suspense>
        <Suspense fallback={null}>
          <UranusModel />
        </Suspense>
        <Suspense fallback={null}>
          <NeptuneModel />
        </Suspense>
        <Suspense fallback={null}>
          <PlutoModel />
        </Suspense>
        <Suspense fallback={null}>
          <HubbleModel />
        </Suspense>
        <SpaceEnv />
        <Stars
          radius={240}
          depth={65}
          count={35000}
          factor={7}
          saturation={0}
          fade
        />
        <Stars
          radius={225}
          depth={50}
          count={35000}
          factor={7}
          saturation={0}
          fade
        />
      </Canvas>
    </>
  );
}

export default App;
