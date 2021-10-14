import React, { useRef } from "react";
import Ellipse from "./Ellipse.js";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Model({ ...props }) {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.01));
  const { nodes, materials } = useGLTF("./../public/venus/VenusModel.gltf");
  return (
    <>
      <group
        onClick={(e) => props.targetClick("venus")}
        scale={[0.00215, 0.00215, 0.00215]}
        ref={group}
        {...props}
        dispose={null}
        visible
        rotation={[0, 0, 0]}
        position={[160, 0, 0]}
        castShadow
      >
        <mesh
          geometry={nodes.cylindrically_mapped_sphere.geometry}
          material={materials["Default OBJ.001"]}
        />
      </group>
      <Ellipse xRadius={160} zRadius={160} />
    </>
  );
}

useGLTF.preload("./../public/venus/VenusModel.gltf");
