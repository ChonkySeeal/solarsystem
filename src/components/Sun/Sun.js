import React, { useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useFrame, useLoader } from "@react-three/fiber";

function Sun(props) {
  const materials = useLoader(MTLLoader, "./resource/sol/sun.mtl");
  const obj = useLoader(OBJLoader, "./resource/sol/sun.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const texture = useLoader(
    TextureLoader,
    "./resource/sol/textures/8k_sun.jpg"
  );
  const mesh = useRef();
  const fact = {
    "Mass (1024 kg)": "1,988,500",
    "GM (x 106 km3/s2)": "132,712",
    "Volume (1012 km3)": "1,412,000",
    "Volumetric mean radius (km)": "695,700",
  };

  return (
    <primitive object={obj} scale={1}>
      <meshStandardMaterial map={texture} />
    </primitive>
  );
}

export default Sun;
