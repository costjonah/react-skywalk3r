import React, { useRef } from "react";
import Ellipse from "./Ellipse.js";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function NeptuneModel({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.01));
  const { nodes, materials } = useGLTF("./../public/neptune/NeptuneModel.gltf");
  return (
    <>
      <group
        onClick={(e) => props.targetClick('neptune')}
        scale={[0.009, 0.009, 0.009]}
        ref={group}
        {...props}
        dispose={null}
        visible
        rotation={[0.5, 0, 0]}
        position={[350, 0, 0]}
        castShadow
      >
        <mesh
          geometry={nodes.Neptune.geometry}
          material={materials["Default OBJ.001"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <Ellipse xRadius={350} zRadius={350} />
    </>
  );
}

useGLTF.preload("./../public/neptune/NeptuneModel.gltf");
