import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Stars, FirstPersonControls } from "@react-three/drei";
import * as THREE from "three/build/three.module.js";
import { CubeTextureLoader } from "three";

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

function App({ targetClick }) {
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
          <SunModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <MercuryModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <VenusModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <EarthModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <MoonModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <MarsModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <JupiterModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <SaturnModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <UranusModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <NeptuneModel targetClick={targetClick} />
        </Suspense>
        <Suspense fallback={null}>
          <PlutoModel targetClick={targetClick} />
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
