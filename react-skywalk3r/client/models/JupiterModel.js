import React, { useRef } from "react";
import Ellipse from "./Ellipse.js";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function JupiterModel({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.01));
  const { nodes, materials } = useGLTF("./../public/jupiter/JupiterModel.gltf");
  return (
    <>
      <group
        onClick={(e) => props.targetClick("jupiter")}
        scale={[0.0275, 0.0275, 0.0275]}
        ref={group}
        {...props}
        dispose={null}
        visible
        rotation={[0.5, 0, 0]}
        position={[240, 0, 0]}
        castShadow
      >
        <mesh geometry={nodes.cubemap.geometry} material={materials.None} />
      </group>
      <Ellipse xRadius={240} zRadius={240} />
    </>
  );
}

useGLTF.preload("./../public/jupiter/JupiterModel.gltf");
