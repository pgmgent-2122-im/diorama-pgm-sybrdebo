import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import ground from './assets/ground.glb';

const Ground = () => {

  const { nodes, materials } = useGLTF(ground, true);
  return (
    <group dispose={null}>
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
        geometry={nodes.stone_30.geometry}
        material={nodes.stone_30.material}
        position={[-8.34, -1.34, 6.76]}
        rotation={[0.32, 0.92, 3.1]}
        scale={[0.51, 0.55, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow={true}
        geometry={nodes.ground.geometry}
        material={materials.Material}
      />
    </group>
  )
}

export default Ground;