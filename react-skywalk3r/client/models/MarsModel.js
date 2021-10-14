import React, { useRef } from "react";
import Ellipse from "./Ellipse.js";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function MarsModel({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.01));
  const { nodes, materials } = useGLTF("./../public/mars/MarsModel.gltf");
  return (
    <>
      <group
        onClick={(e) => props.targetClick("mars")}
        scale={[0.00125, 0.00125, 0.00125]}
        ref={group}
        {...props}
        dispose={null}
        visible
        rotation={[0, 0, 0]}
        position={[200, 0, 0]}
        castShadow
      >
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials["Default OBJ.005"]}
        />
      </group>
      <Ellipse xRadius={200} zRadius={200} />
    </>
  );
}

useGLTF.preload("./../public/mars/MarsModel.gltf");
