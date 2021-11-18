import { useGLTF } from '@react-three/drei';
import arms from './assets/arms.glb';
import { animated, useSpring } from '@react-spring/three';

import * as easings from "d3-ease";
// import React from 'react';
// import { useFrame } from '@react-three/fiber'

// const AnimateFrame = (props) => {
//   useFrame(({ clock }) => {
//     props.meshRef.current.rotation.x += 0.01;
//   })
// }

const Arms = () => {
  const { nodes } = useGLTF(arms);
  // const arm1 = React.useRef();

  const { position1 } = useSpring({
    config: {
      duration: 1200,
      easing: easings.easeCubic
    },
    from: {
      position1: [-3.58, 0.18, 3.55],
    },
    to: {
      position1: [-3.58, -0.5, 3.55],
    },
    loop: {
      reverse: true
    }
  })

  const { position2 } = useSpring({
    config: {
      duration: 900,
      easing: easings.easeCubic
    },
    from: {
      position2: [-6.21, -0.03, 3.27],
    },
    to: {
      position2: [-6.21, -0.4, 3.27],
    },
    loop: {
      reverse: true
    }
  })

  const { position3 } = useSpring({
    config: {
      duration: 1100,
      easing: easings.easeCubic
    },
    from: {
      position3: [-0.95, 0.05, 3.66],
    },
    to: {
      position3: [-0.95, -0.5 , 3.66],
    },
    loop: {
      reverse: true
    }
  })

  const { position4 } = useSpring({
    config: {
      duration: 1000,
      easing: easings.easeCubic
    },
    from: {
      position4: [-8.45, 0.06, 4.27],
    },
    to: {
      position4: [-8.45, -0.6, 4.27],
    },
    loop: {
      reverse: true
    }
  })


  return (
    <group dispose={null}>
      <animated.mesh
        // ref={arm1}
        castShadow={true}
        receiveShadow
        geometry={nodes.two_arms.geometry}
        material={nodes.two_arms.material}
        // position={[-3.58, 0.18, 3.55]}
        position= {position1}
        rotation={[-1.44, 0.03, -1.14]}
        scale={[0.13, 0.13, 0.13]}
      />
      {/* <AnimateFrame meshRef={arm1} /> */}
      <animated.mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.arm_1.geometry}
        material={nodes.arm_1.material}
        // position={[-6.21, -0.03, 3.27]}
        position= {position2}
        rotation={[-1.72, -0.03, -0.21]}
        scale={[0.13, 0.13, 0.13]}
      />
      <animated.mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.arm_2.geometry}
        material={nodes.arm_2.material}
        // position={[-0.95, 0.05, 3.66]}
        position= {position3}
        rotation={[-1.26, 0.01, 0.03]}
        scale={[0.13, 0.13, 0.13]}
      />
      <animated.mesh
        castShadow={true}
        receiveShadow
        geometry={nodes.arm_3.geometry}
        material={nodes.arm_3.material}
        // position={[-8.45, 0.06, 4.27]}
        position= {position4}
        rotation={[-1.44, 0, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
    </group>
  )
}

export default Arms;
