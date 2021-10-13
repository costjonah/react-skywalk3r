import React, { useRef } from "react";
import * as THREE from "three/build/three.module.js";

export default function Ellipse({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  const orbitRad = 10;
  let date = Date.now() * 0.01;
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }
  points.push(points[0]);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={7.5} />
    </line>
  );
}
