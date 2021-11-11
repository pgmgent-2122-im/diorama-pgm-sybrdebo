import { useGLTF } from '@react-three/drei';
import lamps from './assets/lamps.glb';

const Lamps = () => {
  const { nodes, materials } = useGLTF(lamps);
  return (
    <group dispose={null}>
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
      <group
        position={[1.99, 0.91, 0.29]}
        rotation={[2.52, 1.37, -1.12]}
        scale={[0.26, 0.26, 0.26]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube130.geometry}
          material={materials.wood}
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
    </group>
  )
}

export default Lamps;
