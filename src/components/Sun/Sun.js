import React, { useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useFrame, useLoader } from "@react-three/fiber";

function Sun(props) {
  const obj = useLoader(OBJLoader, "./resource/sol/sol.obj");
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
}

export default Sun;
