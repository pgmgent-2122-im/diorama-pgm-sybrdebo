import { useGLTF } from '@react-three/drei';
import coffin from './assets/coffin.glb';
import { useState } from 'react';
import * as easings from "d3-ease";
import { animated, useSpring } from "@react-spring/three";
import { MathUtils } from 'three';


const Coffin = () => {
  const { nodes, materials } = useGLTF(coffin);

  const [clicked, setClicked] = useState(false);

  const { position1, position2, position3, rotation1, rotation2, rotation3 } = useSpring({
    config: {
      duration: 800,
      easing: easings.easeCubic,
    },
    position1: clicked ? [4.91, 6, 3.65] : [4.91, -0.29, 3.65],
    rotation1: clicked ? [0, 0, MathUtils.degToRad(45)] : [0, 0, 0],
    position2: clicked ? [4.91, 6, 3.65] : [4.91, 0.23, 3.65],
    rotation2: clicked ? [0, 0, MathUtils.degToRad(45)] : [0, 0, 0],
    position3: clicked ? [4.26, 6, 3.6] : [4.26, 0.32, 3.6], 
    rotation3: clicked ? [0, 0, MathUtils.degToRad(45)] : [0, 0, 0],

  })

  return (
    <group dispose={null}>
      <animated.mesh
        onClick={(event) => setClicked(!clicked)}
        castShadow
        receiveShadow
        geometry={nodes.coffin.geometry}
        material={nodes.coffin.material}
        position={position1}
        rotation={rotation1}
        scale={[0.6, 0.46, 0.6]}
      />
      <animated.mesh
        onClick={(event) => setClicked(!clicked)}
        castShadow
        receiveShadow
        geometry={nodes.coffin_top.geometry}
        material={nodes.coffin_top.material}
        position= {position2}
        rotation={rotation2}
        scale={[0.6, 0.07, 0.6]}
      />
      <animated.mesh
        onClick={(event) => setClicked(!clicked)}
        castShadow
        receiveShadow
        geometry={nodes.crose_coffin.geometry}
        material={materials.cross}
        position={position3}
        rotation={rotation3}
        scale={[0.18, 0.05, 0.18]}
      />
    </group>

  )
}

export default Coffin;
