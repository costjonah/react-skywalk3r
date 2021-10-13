import React, { useRef } from "react";
import Ellipse from "./Ellipse.js";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function SaturnModel({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.01));
  const { nodes, materials } = useGLTF("./../public/saturn/SaturnModel.gltf");
  return (
    <>
      <group
        onClick={(e) => props.targetClick('saturne')}
        scale={[0.0225, 0.0225, 0.0225]}
        ref={group}
        {...props}
        dispose={null}
        visible
        rotation={[0.5, 0, 0]}
        position={[300, 0, 0]}
        castShadow
      >
        <mesh geometry={nodes.Saturn001.geometry} material={materials.None} />
        <mesh
          geometry={nodes.RingsTop.geometry}
          material={nodes.RingsTop.material}
        />
        <mesh
          geometry={nodes.RingsBottom.geometry}
          material={nodes.RingsBottom.material}
        />
      </group>
      <Ellipse xRadius={300} zRadius={300} />
    </>
  );
}

useGLTF.preload("./../public/saturn/SaturnModel.gltf");
