
import * as THREE from 'three';
import React, { useRef } from 'react'
import diorama from './assets/diorama.glb';
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

import groundColor from '../../lib/textures/Ground_Wet_Rocks_001_basecolor.jpg';
import groundNormal from '../../lib/textures/Ground_Wet_Rocks_001_normal.jpg';
import groundHeight from '../../lib/textures/Ground_Wet_Rocks_001_height.png';
import groundRoughness from '../../lib/textures/Ground_Wet_Rocks_001_roughness.jpg';
import groundAmbient from '../../lib/textures/Ground_Wet_Rocks_001_ambientOcclusion.jpg';
import { DoubleSide } from 'three';


const textureLoader = new THREE.TextureLoader();

const groundBaseColor = textureLoader.load(groundColor);
const groundNormalMap = textureLoader.load(groundNormal);
const groundHeightMap= textureLoader.load(groundHeight);
const groundRoughnessMap = textureLoader.load(groundRoughness);
const groundAmbientOcclusionMap = textureLoader.load(groundAmbient);


const Everything = () => {
  const { nodes, materials } = useGLTF(diorama, true);


  const { dithering, opacity, transparent } = useControls("Material", {
    dithering: { label: "Dithering", value: false },
    opacity: { label: "Opacity", max: 1, min: 0, value: 1 },
    transparent: { label: "Transparent", value: false },
  });

  const {
    color,
    emissive,
    emissiveIntensity,
    metalness,
    refractionRatio,
    roughness,
    wireframe,
  } = useControls("StandardMaterial", {
    color: { label: "Color", value: "#ffffff" },
    emissive: { label: "Emissive", value: "#656262" },
    emissiveIntensity: {
      label: "Emissive Intensity",
      max: 5,
      min: 0,
      value: 0.5,
    },
    metalness: { label: "Metalness", max: 1, min: 0, value: 1 },
    refractionRatio: {
      label: "Refraction Ratio",
      max: 2,
      min: 0,
      value: 0.56,
    },
    roughness: { label: "Roughness", max: 1, min: 0, value: 0.4 },
    wireframe: { label: "Wireframe", value: false },
  });








  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-8.65, 0.71, 1.47]}
        scale={[0.4, 0.2, 0.4]}
      />
      {/* <mesh castShadow receiveShadow geometry={nodes.ground.geometry} material={materials.ground} /> */}


      <mesh castShadow receiveShadow={true} geometry={nodes.ground.geometry} side={DoubleSide}>
        <meshStandardMaterial 
          map={groundBaseColor}
          roughness={groundRoughnessMap}
          roughness={0.05}
          side={DoubleSide}
          normalMap={groundNormalMap}
          displacementMap={groundHeightMap}
          displacementScale={0.2}
          aoMap= {groundAmbientOcclusionMap}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.house.geometry}
        
        material={materials.house}
        position={[4.48, 4.77, -5.16]}
        scale={[2, 2, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.door.geometry}
        material={materials.door}
        position={[4.48, 4.77, -5.16]}
        scale={[2, 2, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof.geometry}
        material={materials.roof}
        position={[4.48, 4.77, -5.16]}
        scale={[2, 2, 2.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roofbar.geometry}
        material={nodes.roofbar.material}
        position={[4.49, 9.62, -5.17]}
        scale={[-0.16, -0.16, -2.49]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window.geometry}
        material={nodes.window.material}
        position={[4.48, 4.77, -5.16]}
        scale={[2, 2, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window_glass.geometry}
        material={materials['window house']}
        position={[4.48, 4.77, -5.16]}
        scale={[2, 2, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cross.geometry}
        material={nodes.cross.material}
        position={[4.49, 7.73, -3.12]}
        scale={[-0.1, -0.1, -0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick.geometry}
        material={nodes.brick.material}
        position={[5.45, 6.2, -3.18]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick2.geometry}
        material={nodes.brick2.material}
        position={[5.65, 6.03, -3.2]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick3.geometry}
        material={nodes.brick3.material}
        position={[3.63, 7.48, -3.18]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick4.geometry}
        material={nodes.brick4.material}
        position={[3.84, 7.31, -3.2]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick5.geometry}
        material={nodes.brick5.material}
        position={[3.23, 6.2, -3.18]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick6.geometry}
        material={nodes.brick6.material}
        position={[3.43, 6.03, -3.2]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick7.geometry}
        material={nodes.brick7.material}
        position={[3.18, 5.84, -3.2]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick8.geometry}
        material={nodes.brick8.material}
        position={[3.19, 3.49, -3.07]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick9.geometry}
        material={nodes.brick9.material}
        position={[5.78, 3.49, -3.18]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick10.geometry}
        material={nodes.brick10.material}
        position={[5.35, 7.21, -3.18]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick11.geometry}
        material={nodes.brick11.material}
        position={[6.46, 3.61, -4]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick12.geometry}
        material={nodes.brick12.material}
        position={[6.44, 3.44, -4.2]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick13.geometry}
        material={nodes.brick13.material}
        position={[6.44, 3.26, -3.94]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick14.geometry}
        material={nodes.brick14.material}
        position={[6.46, 3.53, -6.26]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick15.geometry}
        material={nodes.brick15.material}
        position={[6.44, 3.36, -6.46]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick16.geometry}
        material={nodes.brick16.material}
        position={[6.46, 5.93, -4]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick17.geometry}
        material={nodes.brick17.material}
        position={[6.44, 5.76, -4.2]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick18.geometry}
        material={nodes.brick18.material}
        position={[6.44, 5.95, -6.26]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick19.geometry}
        material={nodes.brick19.material}
        position={[5.33, 3.61, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick20.geometry}
        material={nodes.brick20.material}
        position={[5.13, 3.44, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick21.geometry}
        material={nodes.brick21.material}
        position={[5.39, 3.26, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick22.geometry}
        material={nodes.brick22.material}
        position={[5.47, 7.29, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick23.geometry}
        material={nodes.brick23.material}
        position={[4.6, 8.45, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick24.geometry}
        material={nodes.brick24.material}
        position={[4.07, 7.54, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick25.geometry}
        material={nodes.brick25.material}
        position={[3.87, 7.37, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick26.geometry}
        material={nodes.brick26.material}
        position={[4.56, 6.22, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick27.geometry}
        material={nodes.brick27.material}
        position={[4.35, 6.05, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick30.geometry}
        material={nodes.brick30.material}
        position={[5.33, 5.56, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick31.geometry}
        material={nodes.brick31.material}
        position={[5.13, 5.39, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick32.geometry}
        material={nodes.brick32.material}
        position={[5.39, 5.2, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick33.geometry}
        material={nodes.brick33.material}
        position={[5.22, 5.73, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick34.geometry}
        material={nodes.brick34.material}
        position={[3.59, 3.58, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick35.geometry}
        material={nodes.brick35.material}
        position={[3.39, 3.41, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick36.geometry}
        material={nodes.brick36.material}
        position={[3.64, 3.23, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick37.geometry}
        material={nodes.brick37.material}
        position={[3.47, 3.76, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick38.geometry}
        material={nodes.brick38.material}
        position={[3.54, 5.37, -7.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick39.geometry}
        material={nodes.brick39.material}
        position={[3.34, 5.2, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick40.geometry}
        material={nodes.brick40.material}
        position={[3.59, 5.02, -7.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick41.geometry}
        material={nodes.brick41.material}
        position={[2.5, 5.91, -6.34]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick42.geometry}
        material={nodes.brick42.material}
        position={[2.52, 5.74, -6.14]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick43.geometry}
        material={nodes.brick43.material}
        position={[2.52, 5.56, -6.4]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick44.geometry}
        material={nodes.brick44.material}
        position={[2.5, 6.09, -6.23]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick45.geometry}
        material={nodes.brick45.material}
        position={[2.5, 3.6, -4.17]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick46.geometry}
        material={nodes.brick46.material}
        position={[2.52, 3.43, -3.96]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick47.geometry}
        material={nodes.brick47.material}
        position={[2.52, 3.25, -4.22]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick48.geometry}
        material={nodes.brick48.material}
        position={[2.5, 3.78, -4.05]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick49.geometry}
        material={nodes.brick49.material}
        position={[2.5, 4.3, -6.01]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick50.geometry}
        material={nodes.brick50.material}
        position={[2.52, 4.13, -5.81]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick51.geometry}
        material={nodes.brick51.material}
        position={[2.52, 3.95, -6.06]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick52.geometry}
        material={nodes.brick52.material}
        position={[2.5, 4.48, -5.89]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick53.geometry}
        material={nodes.brick53.material}
        position={[2.5, 5.67, -4.17]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick54.geometry}
        material={nodes.brick54.material}
        position={[2.52, 5.5, -3.96]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick55.geometry}
        material={nodes.brick55.material}
        position={[2.5, 5.84, -4.05]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick56.geometry}
        material={nodes.brick56.material}
        position={[2.5, 4.61, -4.66]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick57.geometry}
        material={nodes.brick57.material}
        position={[2.52, 4.44, -4.46]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick58.geometry}
        material={nodes.brick58.material}
        position={[2.5, 4.78, -4.54]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick59.geometry}
        material={nodes.brick59.material}
        position={[2.5, 3.27, -5.44]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick60.geometry}
        material={nodes.brick60.material}
        position={[2.5, 3.44, -5.32]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick61.geometry}
        material={nodes.brick61.material}
        position={[2.5, 5.21, -5.32]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brick62.geometry}
        material={nodes.brick62.material}
        position={[2.49, 3.33, -6.37]}
        rotation={[0, -1.57, 0]}
        scale={[0.93, 0.77, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.house_corner.geometry}
        material={nodes.house_corner.material}
        position={[6.35, 2.94, -7.08]}
        scale={[-0.18, -0.18, -0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.house_corner001.geometry}
        material={nodes.house_corner001.material}
        position={[2.61, 2.94, -7.06]}
        scale={[-0.19, -0.18, -0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.house_corner002.geometry}
        material={nodes.house_corner002.material}
        position={[2.61, 2.94, -3.18]}
        scale={[-0.19, -0.18, -0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.house_corner003.geometry}
        material={nodes.house_corner003.material}
        position={[6.35, 2.94, -3.16]}
        scale={[-0.18, -0.18, -0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.house_corner004.geometry}
        material={nodes.house_corner004.material}
        position={[2.94, 6.75, -3.16]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.18, -0.15, -0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.house_corner005.geometry}
        material={nodes.house_corner005.material}
        position={[2.94, 6.76, -7.07]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.18, -0.15, -0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window_bar.geometry}
        material={nodes.window_bar.material}
        position={[6.46, 4.77, -5.17]}
        scale={[0.03, 0.66, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window_bar2.geometry}
        material={nodes.window_bar2.material}
        position={[6.45, 4.77, -5.17]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 0.86, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1.geometry}
        material={nodes.rooftile1.material}
        position={[4.17, 9.46, -3.15]}
        rotation={[-0.05, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2.geometry}
        material={nodes.rooftile2.material}
        position={[4.1, 9.33, -2.93]}
        rotation={[0, 0, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1001.geometry}
        material={nodes.rooftile1001.material}
        position={[4.19, 9.52, -2.82]}
        rotation={[0.08, -0.04, -0.71]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1002.geometry}
        material={nodes.rooftile1002.material}
        position={[4.17, 9.46, -7.36]}
        rotation={[-0.05, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1003.geometry}
        material={nodes.rooftile1003.material}
        position={[4.21, 9.55, -7.03]}
        rotation={[0.08, -0.04, -0.71]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1004.geometry}
        material={nodes.rooftile1004.material}
        position={[4.17, 9.46, -5.25]}
        rotation={[-0.15, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2002.geometry}
        material={nodes.rooftile2002.material}
        position={[4.1, 9.33, -5.03]}
        rotation={[0, -0.19, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1005.geometry}
        material={nodes.rooftile1005.material}
        position={[4.21, 9.55, -4.92]}
        rotation={[0.08, 0.08, -0.72]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1006.geometry}
        material={nodes.rooftile1006.material}
        position={[2.77, 7.58, -5.25]}
        rotation={[-0.05, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2003.geometry}
        material={nodes.rooftile2003.material}
        position={[2.7, 7.44, -5.03]}
        rotation={[0, 0, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1007.geometry}
        material={nodes.rooftile1007.material}
        position={[2.81, 7.67, -4.92]}
        rotation={[0.08, -0.04, -0.71]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1008.geometry}
        material={nodes.rooftile1008.material}
        position={[3.62, 8.77, -6.24]}
        rotation={[-0.15, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2001.geometry}
        material={nodes.rooftile2001.material}
        position={[3.56, 8.63, -6.02]}
        rotation={[0, -0.19, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1009.geometry}
        material={nodes.rooftile1009.material}
        position={[3.67, 8.77, -4.21]}
        rotation={[-0.15, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2004.geometry}
        material={nodes.rooftile2004.material}
        position={[3.56, 8.63, -3.99]}
        rotation={[0, -0.19, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1010.geometry}
        material={nodes.rooftile1010.material}
        position={[3.57, 8.61, -4.21]}
        rotation={[-0.15, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1011.geometry}
        material={nodes.rooftile1011.material}
        position={[3.4, 8.35, -3.15]}
        rotation={[-0.15, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2005.geometry}
        material={nodes.rooftile2005.material}
        position={[3.34, 8.22, -2.93]}
        rotation={[0, -0.19, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1012.geometry}
        material={nodes.rooftile1012.material}
        position={[3.44, 8.44, -2.82]}
        rotation={[0.08, 0.08, -0.72]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1013.geometry}
        material={nodes.rooftile1013.material}
        position={[3.26, 8.23, -7.4]}
        rotation={[-0.15, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2006.geometry}
        material={nodes.rooftile2006.material}
        position={[3.2, 8.1, -7.18]}
        rotation={[0, -0.19, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1014.geometry}
        material={nodes.rooftile1014.material}
        position={[1.92, 6.3, -3.16]}
        rotation={[-0.05, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1015.geometry}
        material={nodes.rooftile1015.material}
        position={[1.97, 6.39, -2.83]}
        rotation={[0.08, -0.04, -0.71]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1016.geometry}
        material={nodes.rooftile1016.material}
        position={[1.98, 6.38, -7.54]}
        rotation={[-0.05, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2007.geometry}
        material={nodes.rooftile2007.material}
        position={[1.92, 6.24, -7.32]}
        rotation={[0, 0, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1017.geometry}
        material={nodes.rooftile1017.material}
        position={[2.02, 6.47, -7.21]}
        rotation={[0.08, -0.04, -0.71]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1018.geometry}
        material={nodes.rooftile1018.material}
        position={[2.58, 7.23, -3.72]}
        rotation={[-0.05, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1019.geometry}
        material={nodes.rooftile1019.material}
        position={[2.63, 7.32, -3.39]}
        rotation={[0.08, -0.04, -0.71]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1020.geometry}
        material={nodes.rooftile1020.material}
        position={[2.01, 6.46, -4.71]}
        rotation={[-0.15, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2008.geometry}
        material={nodes.rooftile2008.material}
        position={[1.94, 6.33, -4.49]}
        rotation={[0, -0.19, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1021.geometry}
        material={nodes.rooftile1021.material}
        position={[2.05, 6.55, -4.38]}
        rotation={[0.08, 0.08, -0.72]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1022.geometry}
        material={nodes.rooftile1022.material}
        position={[2.43, 7.06, -6.39]}
        rotation={[-0.15, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile2009.geometry}
        material={nodes.rooftile2009.material}
        position={[2.32, 6.93, -6.17]}
        rotation={[0, -0.19, -0.69]}
        scale={[0.02, 0.25, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftile1023.geometry}
        material={nodes.rooftile1023.material}
        position={[2.33, 6.9, -6.39]}
        rotation={[-0.15, 0.12, -0.7]}
        scale={[0.02, 0.25, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumkiin_part.geometry}
        material={nodes.pumkiin_part.material}
        position={[8.62, 3.72, -8.27]}
        rotation={[0, -0.12, 0]}
        scale={[-0.11, -0.11, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumpkin001.geometry}
        material={nodes.pumpkin001.material}
        position={[8.62, 3.27, -8.33]}
        rotation={[0, -0.12, 0]}
        scale={[0.75, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumkiin_part001.geometry}
        material={nodes.pumkiin_part001.material}
        position={[5.8, 3.71, -2.01]}
        rotation={[0, -0.28, 0]}
        scale={[-0.11, -0.11, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumpkin002.geometry}
        material={nodes.pumpkin002.material}
        position={[5.82, 3.26, -2.08]}
        rotation={[0, -0.28, 0]}
        scale={[0.75, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumkiin_part002.geometry}
        material={nodes.pumkiin_part002.material}
        position={[1.34, 3.71, -6.5]}
        rotation={[0, -0.54, 0]}
        scale={[-0.11, -0.11, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumpkin003.geometry}
        material={nodes.pumpkin003.material}
        position={[1.38, 3.26, -6.56]}
        rotation={[0, -0.54, 0]}
        scale={[0.75, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumkiin_part003.geometry}
        material={nodes.pumkiin_part003.material}
        position={[-4.2, 3.71, -4.7]}
        rotation={[0, 0.52, 0]}
        scale={[-0.11, -0.11, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumpkin004.geometry}
        material={nodes.pumpkin004.material}
        position={[-4.24, 3.26, -4.76]}
        rotation={[0, 0.52, 0]}
        scale={[0.75, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumkiin_part004.geometry}
        material={nodes.pumkiin_part004.material}
        position={[-8.75, 3.71, -8.13]}
        rotation={[0, 0.52, 0]}
        scale={[-0.11, -0.11, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumpkin005.geometry}
        material={nodes.pumpkin005.material}
        position={[-8.78, 3.26, -8.18]}
        rotation={[0, 0.52, 0]}
        scale={[0.75, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumkiin_part005.geometry}
        material={nodes.pumkiin_part005.material}
        position={[-5.81, 3.71, -2.76]}
        rotation={[0, -0.45, 0]}
        scale={[-0.11, -0.11, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pumpkin006.geometry}
        material={nodes.pumpkin006.material}
        position={[-5.78, 3.26, -2.82]}
        rotation={[0, -0.45, 0]}
        scale={[0.75, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coffin.geometry}
        material={nodes.coffin.material}
        position={[4.91, -0.29, 3.65]}
        scale={[0.6, 0.46, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coffin_top.geometry}
        material={nodes.coffin_top.material}
        position={[4.9, 0.23, 3.65]}
        scale={[0.6, 0.07, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_1.geometry}
        material={nodes.stone_1.material}
        position={[-9.02, 0.66, 6]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_2.geometry}
        material={nodes.stone_2.material}
        position={[-0.5, 2.79, -2.94]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_3.geometry}
        material={nodes.stone_3.material}
        position={[0.85, 0.32, 0.69]}
        rotation={[2.95, 0, 0]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_4.geometry}
        material={nodes.stone_4.material}
        position={[-4.06, 0.19, 5.36]}
        rotation={[2.95, 0, 0]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_5.geometry}
        material={nodes.stone_5.material}
        position={[-7.49, 1.43, -0.19]}
        rotation={[1.7, 1.38, 1.44]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_6.geometry}
        material={nodes.stone_6.material}
        position={[5.41, 1.43, -0.19]}
        rotation={[1.61, -0.94, 1.6]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_7.geometry}
        material={nodes.stone_7.material}
        position={[-0.49, 1.86, -0.19]}
        rotation={[2.95, 0, 0]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_8.geometry}
        material={nodes.stone_8.material}
        position={[6.14, 0.56, 6.21]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_9.geometry}
        material={nodes.stone_9.material}
        position={[-8.79, 2.77, -3.81]}
        rotation={[1.75, 0, 0]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_10.geometry}
        material={nodes.stone_10.material}
        position={[-4.64, 1.49, -0.19]}
        rotation={[1.78, -1.38, -1.36]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_11.geometry}
        material={nodes.stone_11.material}
        position={[-9.86, 1.43, -2]}
        rotation={[1.7, 1.38, 1.44]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_12.geometry}
        material={nodes.stone_12.material}
        position={[-9.86, 0.47, -7.42]}
        rotation={[-1.2, 0.76, -2.59]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_13.geometry}
        material={nodes.stone_13.material}
        position={[-9.71, -1.09, -4.13]}
        rotation={[-1.6, -0.59, -1.59]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_14.geometry}
        material={nodes.stone_14.material}
        position={[-9.86, -1.09, 4.89]}
        rotation={[-1.6, -0.56, -1.59]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_15.geometry}
        material={nodes.stone_15.material}
        position={[-7.85, 0.47, -9.76]}
        rotation={[-1.2, 0.76, -2.59]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_16.geometry}
        material={nodes.stone_16.material}
        position={[8.56, 1.29, -9.76]}
        rotation={[-1.24, 0.77, -2.54]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_17.geometry}
        material={nodes.stone_17.material}
        position={[5.41, -0.75, -9.76]}
        rotation={[2.34, 0.76, -2.59]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_18.geometry}
        material={nodes.stone_18.material}
        position={[-0.67, 0.13, -9.76]}
        rotation={[-1.59, 0.83, -2.05]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_19.geometry}
        material={nodes.stone_19.material}
        position={[2.42, 1.6, -9.76]}
        rotation={[-2.41, 0.93, -2.23]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_20.geometry}
        material={nodes.stone_20.material}
        position={[-4.75, 1.47, -9.76]}
        rotation={[-1.75, -0.81, 0.82]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_21.geometry}
        material={nodes.stone_21.material}
        position={[9.77, 1.29, -8.07]}
        rotation={[-1.24, 0.77, -2.54]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_22.geometry}
        material={nodes.stone_22.material}
        position={[9.77, -0.5, -6.12]}
        rotation={[-1.05, 1.33, -2.18]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_23.geometry}
        material={nodes.stone_23.material}
        position={[9.9, 1.27, -2.45]}
        rotation={[-1.24, 0.77, -2.54]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_24.geometry}
        material={nodes.stone_24.material}
        position={[9.9, -0.93, -0.99]}
        rotation={[0.06, 1.33, 2.35]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_25.geometry}
        material={nodes.stone_25.material}
        position={[9.9, -1.16, 4.5]}
        rotation={[0.32, 0.92, 3.1]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_26.geometry}
        material={nodes.stone_26.material}
        position={[8.41, -0.69, 6.96]}
        rotation={[0.32, 0.92, 3.1]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_27.geometry}
        material={nodes.stone_27.material}
        position={[3.81, -1.37, 6.89]}
        rotation={[0.6, 0.92, 3.1]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_28.geometry}
        material={nodes.stone_28.material}
        position={[1.22, -0.95, 6.75]}
        rotation={[0.32, 0.92, 3.1]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_29.geometry}
        material={nodes.stone_29.material}
        position={[-3.42, -0.95, 7.01]}
        rotation={[0.45, 1.12, 2.95]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_30.geometry}
        material={nodes.stone_30.material}
        position={[-8.34, -1.34, 6.76]}
        rotation={[0.32, 0.92, 3.1]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_31.geometry}
        material={nodes.stone_31.material}
        position={[-6.19, -0.55, 6.86]}
        rotation={[-2.98, 0.92, 3.1]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.two_arms.geometry}
        material={nodes.two_arms.material}
        position={[-3.58, 0.18, 3.55]}
        rotation={[-1.44, 0.03, -1.14]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.arm_1.geometry}
        material={nodes.arm_1.material}
        position={[-6.21, -0.03, 3.27]}
        rotation={[-1.72, -0.03, -0.21]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.arm_2.geometry}
        material={nodes.arm_2.material}
        position={[-0.95, 0.05, 3.66]}
        rotation={[-1.26, 0.01, 0.03]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.arm_3.geometry}
        material={nodes.arm_3.material}
        position={[-8.45, 0.06, 4.27]}
        rotation={[-1.44, 0, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.big_gthombstone.geometry}
        material={nodes.big_gthombstone.material}
        position={[7.7, 0.73, 3.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.crose_coffin.geometry}
        material={nodes.crose_coffin.material}
        position={[4.26, 0.32, 3.6]}
        scale={[0.18, 0.05, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_bars.geometry}
        position={[-8.8, 4.51, -9.4]}
        scale={[0.05, 1.68, 0.05]}>
          <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity}
            dithering={dithering}
            metalness={metalness}
            opacity={opacity}
            refractionRatio={refractionRatio}
            roughness={roughness}
            transparent={transparent}
            wireframe={wireframe}
          />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_bottom.geometry}
        material={nodes.fence_bottom.material}
        position={[-0.05, 3, -9.41]}
        scale={[9.5, 0.3, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_horizontal_bar_bottom.geometry}
        position={[-0.01, 3.88, -9.4]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.04, -9.1, -0.04]}
      >
        <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity}
            dithering={dithering}
            metalness={metalness}
            opacity={opacity}
            refractionRatio={refractionRatio}
            roughness={roughness}
            transparent={transparent}
            wireframe={wireframe}
          />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_horizontal_bar_top.geometry}
        position={[-0.01, 5.99, -9.4]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.04, -9.1, -0.04]}
        >
          <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity}
            dithering={dithering}
            metalness={metalness}
            opacity={opacity}
            refractionRatio={refractionRatio}
            roughness={roughness}
            transparent={transparent}
            wireframe={wireframe}
          />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_tower.geometry}
        material={nodes.fence_tower.material}
        position={[-9.36, 2.88, -9.39]}
        scale={[0.4, 0.15, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_tower_2.geometry}
        material={nodes.fence_tower_2.material}
        position={[9.41, 2.88, -9.39]}
        scale={[0.4, 0.15, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grave_stone_1.geometry}
        material={nodes.grave_stone_1.material}
        position={[-6.34, 0.62, 1.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grave_stone_2.geometry}
        material={nodes.grave_stone_2.material}
        position={[-3.77, 0.69, 1.5]}
        rotation={[-0.25, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grave_stone_3.geometry}
        material={nodes.grave_stone_3.material}
        position={[-1.25, 0.69, 1.5]}
        rotation={[-0.17, -0.33, -0.06]}
        scale={[1, 1.28, 1.01]}
      />
      <group position={[-6.21, 0.9, 5.61]} rotation={[0, 0.23, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube145.geometry}
          material={nodes.Cube145.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube145_1.geometry}
          material={nodes.Cube145_1.material}
        />
      </group>
      <group position={[-7.61, 0.9, 0.88]} rotation={[0, -0.05, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube146.geometry}
          material={nodes.Cube146.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube146_1.geometry}
          material={nodes.Cube146_1.material}
        />
      </group>
      <group position={[2.7, 0.9, 0.3]} rotation={[0, -0.05, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube147.geometry}
          material={nodes.Cube147.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube147_1.geometry}
          material={nodes.Cube147_1.material}
        />
      </group>
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.tree.geometry}
        material={nodes.tree.material}
        position={[-5.2, 2.77, -3.88]}
      />
      <group
        position={[1.99, 0.91, 0.29]}
        rotation={[2.52, 1.37, -1.12]}
        scale={[0.26, 0.26, 0.26]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube130.geometry}
          material={nodes.Cube130.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube130_1.geometry}
          material={materials.shofel}
        />
      </group>
      <group position={[-2.79, 0.9, 6.33]} rotation={[0, 0.23, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube118.geometry}
          material={nodes.Cube118.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube118_1.geometry}
          material={nodes.Cube118_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        position={[5.11, 4.36, -3.25]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.08, 0.08, 0.08]}
      >
        <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity}
            dithering={dithering}
            metalness={metalness}
            opacity={opacity}
            refractionRatio={refractionRatio}
            roughness={roughness}
            transparent={transparent}
            wireframe={wireframe}
          />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        position={[5.11, 4.37, -3.23]}
        scale={[-0.05, -0.05, -0.05]}
      >
        <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity}
            dithering={dithering}
            metalness={metalness}
            opacity={opacity}
            refractionRatio={refractionRatio}
            roughness={roughness}
            transparent={transparent}
            wireframe={wireframe}
          />
      </mesh>
    </group>
  )
}

export default Everything;
