import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import fence from './assets/fence.glb';

const Fence = () => {

  const { nodes } = useGLTF(fence);
  // const {
  //   color,
  //   emissive,
  //   emissiveIntensity,
  //   metalness,
  //   refractionRatio,
  //   roughness,
  //   wireframe,
  // } = useControls("StandardMaterial", {
  //   color: { label: "Color", value: "#ffffff" },
  //   emissive: { label: "Emissive", value: "#656262" },
  //   emissiveIntensity: {
  //     label: "Emissive Intensity",
  //     max: 5,
  //     min: 0,
  //     value: 0.5,
  //   },
  //   metalness: { label: "Metalness", max: 1, min: 0, value: 1 },
  //   refractionRatio: {
  //     label: "Refraction Ratio",
  //     max: 2,
  //     min: 0,
  //     value: 0.56,
  //   },
  //   roughness: { label: "Roughness", max: 1, min: 0, value: 0.4 },
  //   wireframe: { label: "Wireframe", value: false },
  // });

  // const { dithering, opacity, transparent } = useControls("Material", {
  //   dithering: { label: "Dithering", value: false },
  //   opacity: { label: "Opacity", max: 1, min: 0, value: 1 },
  //   transparent: { label: "Transparent", value: false },
  // });
  
  return (
    <group dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.fence_bars.geometry}
        position={[-8.8, 4.51, -9.4]}
        scale={[0.05, 1.68, 0.05]}
      >
        <meshStandardMaterial
          color={0xffffff}
          emissive={0x656262}
          emissiveIntensity={0.5}
          dithering={false}
          metalness={1}
          opacity={1}
          refractionRatio={0.56}
          roughness={0.4}
          transparent={false}
          wireframe={false}
        />
      </mesh>
      <mesh
        castShadow={true}
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
          color={0xffffff}
          emissive={0x656262}
          emissiveIntensity={0.5}
          dithering={false}
          metalness={1}
          opacity={1}
          refractionRatio={0.56}
          roughness={0.4}
          transparent={false}
          wireframe={false}
        />
      </mesh>
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.fence_horizontal_bar_top.geometry}
        position={[-0.01, 5.99, -9.4]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.04, -9.1, -0.04]}
      >
        <meshStandardMaterial
          color={0xffffff}
          emissive={0x656262}
          emissiveIntensity={0.5}
          dithering={false}
          metalness={1}
          opacity={1}
          refractionRatio={0.56}
          roughness={0.4}
          transparent={false}
          wireframe={false}
        />
      </mesh>
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.fence_tower.geometry}
        material={nodes.fence_tower.material}
        position={[-9.36, 2.88, -9.39]}
        scale={[0.4, 0.15, 0.4]}
      />
      <mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.fence_tower_2.geometry}
        material={nodes.fence_tower_2.material}
        position={[9.41, 2.88, -9.39]}
        scale={[0.4, 0.15, 0.4]}
      />
    </group>
  )
}

export default Fence;
