import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function MoonModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./../public/moon/MoonModel.gltf");
  return (
    <group
      onClick={(e) => props.targetClick("lune")}
      scale={[0.00065, 0.00065, 0.00065]}
      ref={group}
      {...props}
      dispose={null}
      visible
      rotation={[0, 0, 0]}
      position={[182, 2, 0]}
      castShadow
    >
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
      />
    </group>
  );
}

useGLTF.preload("./../public/moon/MoonModel.gltf");
