import { MathUtils } from "three";

const Lighting = () => {
  return (
    <>
      <ambientLight color={0x0077ff} intensity={0.1} />
      <pointLight
        castShadow={true}
        color={0xffcc77}
        intensity={0.5}
        position={[-4, 1, -4]}
      />
      {/* <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={true}
        color={0xffcc77}
        intensity={0.5}
        penumbra={0.5}
        position={[0, 4, 0]}
      /> */}
      <pointLight
        castShadow={true}
        color={0xffcc77}
        intensity={0.5}
        position={[4, 8, -4]}
      />
    </>
  );
};

export default Lighting;