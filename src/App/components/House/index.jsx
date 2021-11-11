import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

import house from './assets/house.glb';

const House = () => {
  const { nodes, materials } = useGLTF(house);

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

  const { dithering, opacity, transparent } = useControls("Material", {
    dithering: { label: "Dithering", value: false },
    opacity: { label: "Opacity", max: 1, min: 0, value: 1 },
    transparent: { label: "Transparent", value: false },
  });

  return (
    <group dispose={null}>
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
        material={materials.cross}
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
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
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
        material={nodes.Sphere.material}
        position={[5.11, 4.37, -3.23]}
        scale={[-0.05, -0.05, -0.05]}>
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

export default House;
