import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import pumpkins from './assets/pumpkins.glb';
import { DoubleSide } from 'three';

const Pumpkins = () => {
  const { nodes } = useGLTF(pumpkins, true);
  
  return (
    <group dispose={null}>
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
        side={DoubleSide}
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
        side={DoubleSide}
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
        side={DoubleSide}
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
        side={DoubleSide}
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
        side={DoubleSide}
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
        side={DoubleSide}
      />
    </group>
  )
}

export default Pumpkins;



