import React from 'react';
import { useGLTF } from '@react-three/drei';
import tree from './assets/tree.glb';

const Tree = () => {
  const { nodes, materials } = useGLTF(tree);
  return (
    <group dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.tree.geometry}
        material={materials.wood}
        position={[-5.2, 2.77, -3.88]}
      />
    </group>
  )
}

export default Tree;
