import { useGLTF } from '@react-three/drei';
import coffin from './assets/coffin.glb';

const Coffin = () => {
  const { nodes, materials } = useGLTF(coffin);

  return (
    <group dispose={null}>
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
        geometry={nodes.crose_coffin.geometry}
        material={materials.cross}
        position={[4.26, 0.32, 3.6]}
        scale={[0.18, 0.05, 0.18]}
      />
    </group>
  )
}

export default Coffin;
