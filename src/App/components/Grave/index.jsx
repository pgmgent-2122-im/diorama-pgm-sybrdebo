import { useGLTF } from '@react-three/drei';
import grave from './assets/grave.glb';

const Grave = () => {
  const { nodes, materials } = useGLTF(grave);
  return (
    <group dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.big_gthombstone.geometry}
        material={materials['grave stone']}
        position={[7.7, 0.73, 3.66]}
      />
    </group>
  )
}

export default Grave;
