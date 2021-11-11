import { DoubleSide } from "three";
import { Text} from "@react-three/drei";

import FontFamily from "../../lib/FontFamily";

const Title = () => {

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
