import React, { useRef } from "react";
import Ellipse from "./Ellipse.js";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function UranusModel({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.01));
  const { nodes, materials } = useGLTF("./../public/uranus/UranusModel.gltf");
  return (
    <>
      <group
        onClick={(e) => props.targetClick("uranus")}
        scale={[0.01, 0.01, 0.01]}
        ref={group}
        {...props}
        dispose={null}
        visible
        rotation={[0.5, 0, 0]}
        position={[385, 0, 0]}
        castShadow
      >
        <mesh
          geometry={nodes.Uranus.geometry}
          material={materials["Default OBJ.001"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <Ellipse xRadius={385} zRadius={385} />
    </>
  );
}

useGLTF.preload("./../public/uranus/UranusModel.gltf");
