import { MathUtils } from "three";

const Lighting = () => {
  return (
    <>
      <ambientLight color={0xffffff} intensity={0.07} />

      <directionalLight
        castShadow={true}
        color="hsl(212, 100%, 50%)"
        intensity={0.2}
        position={[0, 17, 29]}
      />

      <pointLight
        distance={8}
        decay={6}
        castShadow={true}
        color={0xffa30a}
        intensity={1.5}
        position={[5.8, 2.9, -2.0]}
      />

      <pointLight
        distance={8}
        decay={6}
        castShadow={true}
        color={0xffa30a}
        intensity={1.5}
        position={[1.5, 2.9, -6,6]}
      />

      <pointLight
        distance={8}
        decay={6}
        castShadow={true}
        color={0xffa30a}
        intensity={1.5}
        position={[-5.8, 3.0, -2.8]}
      />

      <pointLight
        distance={8}
        decay={6}
        castShadow={true}
        color={0xffa30a}
        intensity={1.5}
        position={[-4.2, 3.0, -4.9]}
      />

      <pointLight
        distance={8}
        decay={6}
        castShadow={true}
        color={0xffa30a}
        intensity={1.5}
        position={[-8.7, 3.0, -8.3]}
      />

      <pointLight
        distance={8}
        decay={6}
        castShadow={true}
        color={0xffa30a}
        intensity={1.5}
        position={[8.5, 2.9, -8.3]}
      />

      <pointLight
        distance={8}
        decay={1}
        castShadow={true}
        color={0xffa30a}
        intensity={1.5}
        position={[-6.2, 0.5, 5.7]}
      />

      <pointLight
        distance={8}
        decay={1}
        castShadow={true}
        color={0xffa30a}
        intensity={1.5}
        position={[-2.9, 0.5, 5.4]}
      />

      <spotLight
        angle={MathUtils.degToRad(15)}
        castShadow={true}
        color={0x0077ff}
        intensity={0.3}
        penumbra={0.5}
        position={[0, 18, -40]}
      />
    </>
  );
};

export default Lighting;