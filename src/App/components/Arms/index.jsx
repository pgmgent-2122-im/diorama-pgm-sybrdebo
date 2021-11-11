import { useGLTF } from '@react-three/drei';
import arms from './assets/arms.glb';

const Arms = () => {
  
  const { nodes } = useGLTF(arms);
  return (
    <group dispose={null}>
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
    </group>
  )
}

export default Arms;
