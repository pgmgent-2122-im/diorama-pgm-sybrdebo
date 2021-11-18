import { useRef } from "react";
import {
  DirectionalLightHelper,
  MathUtils,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useControls } from "leva";
import { useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";


const LightingGui = () => {
  const {
    directionalLightColor,
    directionalLightIntensity,
    directionalLightPosition,
  } = useControls("Lighting - Directional Light", {
    directionalLightColor: { label: "Color", value: "#0077ff" },
    directionalLightIntensity: {
      label: "Intensity",
      max: 20,
      min: 0,
      value: 0.2,
    },
    directionalLightPosition: { label: "Position XYZ", value: { x: 0, y:17, z: -29 } },
  });
  const { pointLightColor, pointLightIntensity, pointLightPosition, pointLightDistance, pointLightdecay } =
    useControls("Lighting - Point Light", {
      pointLightColor: { label: "Color", value: "#FFA30A" },
      pointLightIntensity: { label: "Intensity", max: 20, min: 0, value: 1.5 },
      pointLightPosition: { label: "Position XYZ", value: { x: 5.8, y: 2.9, z: -2 } },
      pointLightDistance: {label: "Distance", value: 8},
      pointLightdecay: {label: "Decay", value: 6}
    });

    const { pointLight2Color, pointLight2Intensity, pointLight2Position,pointLight2Distance, pointLight2decay } =
    useControls("Lighting - Point Light2", {
      pointLight2Color: { label: "Color", value: "#FFA30A" },
      pointLight2Intensity: { label: "Intensity", max: 20, min: 0, value: 1.5 },
      pointLight2Position: { label: "Position XYZ", value: { x: 1.5, y: 2.9, z: -6.6 } },
      pointLight2Distance: {label: "Distance", value: 8},
      pointLight2decay: {label: "Decay", value: 6}
    });

    const { pointLight3Color, pointLight3Intensity, pointLight3Position,pointLight3Distance, pointLight3decay } =
    useControls("Lighting - Point Light3", {
      pointLight3Color: { label: "Color", value: "#FFA30A" },
      pointLight3Intensity: { label: "Intensity", max: 20, min: 0, value: 1.5 },
      pointLight3Position: { label: "Position XYZ", value: { x: -5.8, y: 3.0, z: -2.8 } },
      pointLight3Distance: {label: "Distance", value: 8},
      pointLight3decay: {label: "Decay", value: 6}
    });

    const { pointLight4Color, pointLight4Intensity, pointLight4Position, pointLight4Distance, pointLight4decay } =
    useControls("Lighting - Point Light4", {
      pointLight4Color: { label: "Color", value: "#FFA30A" },
      pointLight4Intensity: { label: "Intensity", max: 20, min: 0, value: 1.5 },
      pointLight4Position: { label: "Position XYZ", value: { x: -4.2, y: 3.0, z: -4.9 } },
      pointLight4Distance: {label: "Distance", value: 8},
      pointLight4decay: {label: "Decay", value: 6}
    });

    const { pointLight5Color, pointLight5Intensity, pointLight5Position, pointLight5Distance, pointLight5decay } =
    useControls("Lighting - Point Light5", {
      pointLight5Color: { label: "Color", value: "#FFA30A" },
      pointLight5Intensity: { label: "Intensity", max: 20, min: 0, value: 1.5 },
      pointLight5Position: { label: "Position XYZ", value: { x: -8.7, y: 3.0, z: -8.3 } },
      pointLight5Distance: {label: "Distance", value: 8},
      pointLight5decay: {label: "Decay", value: 6}
    });

    const { pointLight6Color, pointLight6Intensity, pointLight6Position, pointLight6Distance, pointLight6decay } =
    useControls("Lighting - Point Light6", {
      pointLight6Color: { label: "Color", value: "#FFA30A" },
      pointLight6Intensity: { label: "Intensity", max: 20, min: 0, value: 1.5 },
      pointLight6Position: { label: "Position XYZ", value: { x: 8.5, y: 2.9, z: -8.3 } },
      pointLight6Distance: {label: "Distance", value: 8},
      pointLight6decay: {label: "Decay", value: 6}
    });

    const { pointLight7Color, pointLight7Intensity, pointLight7Position, pointLight7Distance, pointLight7decay } =
    useControls("Lighting - Point Light7", {
      pointLight7Color: { label: "Color", value: "#FFA30A" },
      pointLight7Intensity: { label: "Intensity", max: 20, min: 0, value: 1.5 },
      pointLight7Position: { label: "Position XYZ", value: { x: -6.2, y: 0.4, z: 5.7 } },
      pointLight7Distance: {label: "Distance", value: 0},
      pointLight7decay: {label: "Decay", value: 0}
    });

  const {
    spotLightColor,
    spotLightIntensity,
    spotLightPenumbra,
    spotLightPosition,
    spotLightTarget,
  } = useControls("Lighting - Spotlight", {
    spotLightColor: { label: "Color", value: "#0077ff" },
    spotLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.3 },
    spotLightPenumbra: { label: "Penumbra", value: 0.5 },
    spotLightPosition: { label: "Position XZ", value: { x: 0, y: 18, z: -40 } },
    spotLightTarget: { label: "Target XZ", value: { x: 0, y: 0, z: 0 } },
  });

  const { scene } = useThree();
  const target = new Object3D();
  scene.add(target);

  const directionalLightRef = useRef();
  const pointLightRef = useRef();
  const pointLight2Ref = useRef();
  const pointLight3Ref = useRef();
  const pointLight4Ref = useRef();
  const pointLight5Ref = useRef();
  const pointLight6Ref = useRef();
  const pointLight7Ref = useRef();
  const spotLightRef = useRef();
  const helperSize = 0.5;

  useHelper(
    directionalLightRef,
    DirectionalLightHelper,
    helperSize,
    directionalLightColor,
  );
  useHelper(pointLightRef, PointLightHelper, helperSize, pointLightColor, pointLightDistance, pointLightdecay);
  useHelper(pointLight2Ref, PointLightHelper, helperSize, pointLight2Color);
  useHelper(pointLight3Ref, PointLightHelper, helperSize, pointLight3Color);
  useHelper(pointLight4Ref, PointLightHelper, helperSize, pointLight4Color);
  useHelper(pointLight5Ref, PointLightHelper, helperSize, pointLight5Color);
  useHelper(pointLight6Ref, PointLightHelper, helperSize, pointLight6Color);
  useHelper(pointLight7Ref, PointLightHelper, helperSize, pointLight7Color);

  useHelper(spotLightRef, SpotLightHelper, spotLightColor);

  useFrame(() => {
    target.translateX(spotLightTarget.x);
    target.translateY(spotLightTarget.y);
    target.translateZ(spotLightTarget.z);
  });

  return (
    <>
      <ambientLight color={0x014f94} intensity={0.08} />
      <directionalLight
        castShadow={true}
        color={directionalLightColor}
        intensity={directionalLightIntensity}
        position={[directionalLightPosition.x, directionalLightPosition.y, directionalLightPosition.z]}
        ref={directionalLightRef}
      />
      <pointLight
        distance={pointLightDistance}
        decay={pointLightdecay}
        castShadow={true}
        color={pointLightColor}
        intensity={pointLightIntensity}
        position={[pointLightPosition.x, pointLightPosition.y , pointLightPosition.z]}
        ref={pointLightRef}
      />
      <pointLight
        distance={pointLight2Distance}
        decay={pointLight2decay}
        castShadow={true}
        color={pointLight2Color}
        intensity={pointLight2Intensity}
        position={[pointLight2Position.x, pointLight2Position.y , pointLight2Position.z]}
        ref={pointLight2Ref}
      />
      <pointLight
        distance={pointLight3Distance}
        decay={pointLight3decay}
        castShadow={true}
        color={pointLight3Color}
        intensity={pointLight3Intensity}
        position={[pointLight3Position.x, pointLight3Position.y , pointLight3Position.z]}
        ref={pointLight3Ref}
      />
      <pointLight
        distance={pointLight4Distance}
        decay={pointLight4decay}
        castShadow={true}
        color={pointLight4Color}
        intensity={pointLight4Intensity}
        position={[pointLight4Position.x, pointLight4Position.y , pointLight4Position.z]}
        ref={pointLight4Ref}
      />
      <pointLight
        distance={pointLight5Distance}
        decay={pointLight5decay}
        castShadow={true}
        color={pointLight5Color}
        intensity={pointLight5Intensity}
        position={[pointLight5Position.x, pointLight5Position.y , pointLight5Position.z]}
        ref={pointLight5Ref}
      />
      <pointLight
        distance={pointLight6Distance}
        decay={pointLight6decay}
        castShadow={true}
        color={pointLight6Color}
        intensity={pointLight6Intensity}
        position={[pointLight6Position.x, pointLight6Position.y , pointLight6Position.z]}
        ref={pointLight6Ref}
      />
      <pointLight
        distance={pointLight7Distance}
        decay={pointLight7decay}
        castShadow={true}
        color={pointLight7Color}
        intensity={pointLight7Intensity}
        position={[pointLight7Position.x, pointLight7Position.y , pointLight7Position.z]}
        ref={pointLight7Ref}
      />
      <spotLight
        angle={MathUtils.degToRad(25)}
        castShadow={true}
        color={spotLightColor}
        intensity={spotLightIntensity}
        penumbra={spotLightPenumbra}
        position={[spotLightPosition.x, spotLightPosition.y , spotLightPosition.z]}
        ref={spotLightRef}
        target={target}
      />
    </>
  );
};

export default LightingGui;
