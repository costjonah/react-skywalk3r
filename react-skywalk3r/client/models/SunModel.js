import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function SunModel({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.001));
  const { nodes, materials } = useGLTF("./../public/sun/SunModel.gltf");
  return (
    <group
      onClick={(e) => props.targetClick("soleil")}
      scale={[0.2, 0.2, 0.2]}
      ref={group}
      {...props}
      dispose={null}
      visible
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
      castShadow
    >
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1000}
      />
    </group>
  );
}

useGLTF.preload("./../public/sun/SunModel.gltf");
