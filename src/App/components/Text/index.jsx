import { DoubleSide, MathUtils } from "three";
import { Text} from "@react-three/drei";
import { useEffect } from "react";

import FontFamily from "../../lib/FontFamily";

const Title = () => {

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const name = params.get('name');

  let text = `Be  afraid ... Be  very  afraid  ${name ? name : ''} !`;

  const radians = MathUtils.degToRad((-90));
  return (
    <> 
      <Text fontSize={1} font={FontFamily.Butcherman} position={[0, 12, -10]}>
        {text}
        <meshBasicMaterial color={0xffa30a}  side={DoubleSide}/>
      </Text>
      <Text fontSize={1} font={FontFamily.Butcherman} position={[12, 8, 0]} rotation={[0,radians,0]}>
        Dare  to  click  on  my  coffin
        <meshBasicMaterial color={0xffa30a}  side={DoubleSide}/>
      </Text>
    </>
  );
};

export default Title;
