import React, { useRef } from "react";
import Ellipse from "./Ellipse.js";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function PlutoModel({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.01));
  const { nodes, materials } = useGLTF("./../public/pluto/PlutoModel.gltf");
  return (
    <>
      <group
        onClick={(e) => props.targetClick('pluton')}
        scale={[0.0006, 0.0006, 0.0006]}
        ref={group}
        {...props}
        dispose={null}
        visible
        rotation={[0.5, 0, 0]}
        position={[420, 0, 0]}
        castShadow
      >
        <mesh
          geometry={nodes.cylindrically_mapped_sphere.geometry}
          material={materials["Default OBJ.001"]}
        />
      </group>
      <Ellipse xRadius={420} zRadius={420} />
    </>
  );
}

useGLTF.preload("./../public/pluto/PlutoModel.gltf");
