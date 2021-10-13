import React, { useRef } from "react";
import Ellipse from "./Ellipse.js";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function EarthModel({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.01));
  const { nodes, materials } = useGLTF("./../public/earth/EarthModel.gltf");
  return (
    <>
      <group
        onClick={(e) => props.targetClick('terre')}
        scale={[0.0025, 0.0025, 0.0025]}
        ref={group}
        {...props}
        dispose={null}
        visible
        rotation={[0, 0, 0]}
        position={[180, 0, 0]}
        castShadow
      >
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Default OBJ"]}
        />
      </group>
      <Ellipse xRadius={180} zRadius={180} />
    </>
  );
}

useGLTF.preload("./../public/earth/EarthModel.gltf");
