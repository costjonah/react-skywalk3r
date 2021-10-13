import React, { useRef } from "react";
import Ellipse from "./Ellipse.js";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function MercuryModel({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.01));
  const { nodes, materials } = useGLTF("./../public/mercury/MercuryModel.gltf");
  return (
    <>
      <group
        onClick={(e) => props.targetClick('mercure')}
        scale={[0.001, 0.001, 0.001]}
        ref={group}
        {...props}
        dispose={null}
        visible
        rotation={[0, 0, 0]}
        position={[140, 0, 0]}
        castShadow
      >
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials["Default OBJ.005"]}
        />
      </group>
      <Ellipse xRadius={140} zRadius={140} />
    </>
  );
}

useGLTF.preload("./../public/mercury/MercuryModel.gltf");
