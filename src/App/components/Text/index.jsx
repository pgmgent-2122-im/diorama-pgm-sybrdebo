import { DoubleSide } from "three";
import { Text, useMatcapTexture } from "@react-three/drei";

import MatCap from "../../lib/Matcap";
import FontFamily from "../../lib/FontFamily";

const Title = () => {
  const [matcap] = useMatcapTexture(MatCap.id.GREEN, MatCap.size.XL);

  return (
    <> 
      <Text fontSize={1} font={FontFamily.Lukiest_Guy} position={[0, 12, -10]}>
        Be afraid ... be very afraid!
        <meshBasicMaterial color={0x00ff00}  side={DoubleSide}/>
      </Text>
    </>
  );
};

export default Title;
