import { useGLTF } from '@react-three/drei';
import tombstones from './assets/tombstones.glb';


const Tombstones = () => {
  const { nodes, materials } = useGLTF(tombstones)

  return (
    <group dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.Cube.geometry}
        material={materials['Grave stone light']}
        position={[-8.65, 0.71, 1.47]}
        scale={[0.4, 0.2, 0.4]}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.grave_stone_1.geometry}
        material={nodes.grave_stone_1.material}
        position={[-6.34, 0.62, 1.48]}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.grave_stone_2.geometry}
        material={nodes.grave_stone_2.material}
        position={[-3.77, 0.69, 1.5]}
        rotation={[-0.25, 0, 0]}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.grave_stone_3.geometry}
        material={nodes.grave_stone_3.material}
        position={[-1.25, 0.69, 1.5]}
        rotation={[-0.17, -0.33, -0.06]}
        scale={[1, 1.28, 1.01]}
      />
    </group>
  )
}

export default Tombstones;
