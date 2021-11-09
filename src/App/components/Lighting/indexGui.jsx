import { useRef } from "react";
import {
  DirectionalLightHelper,
  MathUtils,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
  // RectAreaLightHelper
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
      value: 0.1,
    },
    directionalLightPosition: { label: "Position XYZ", value: { x: 0, y:17, z: -29 } },
  });
  const { pointLightColor, pointLightIntensity, pointLightPosition } =
    useControls("Lighting - Point Light", {
      pointLightColor: { label: "Color", value: "#FFA30A" },
      pointLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.1 },
      pointLightPosition: { label: "Position XYZ", value: { x: 5.8, y: 2.7, z: -2 } },
    });

    const { pointLight2Color, pointLight2Intensity, pointLight2Position } =
    useControls("Lighting - Point Light2", {
      pointLight2Color: { label: "Color", value: "#FFA30A" },
      pointLight2Intensity: { label: "Intensity", max: 20, min: 0, value: 0.1 },
      pointLight2Position: { label: "Position XYZ", value: { x: 1.5, y: 2.5, z: -6.7 } },
    });

    const { pointLight3Color, pointLight3Intensity, pointLight3Position } =
    useControls("Lighting - Point Light3", {
      pointLight3Color: { label: "Color", value: "#FFA30A" },
      pointLight3Intensity: { label: "Intensity", max: 20, min: 0, value: 0.1 },
      pointLight3Position: { label: "Position XYZ", value: { x: -5.8, y: 2.5, z: -3 } },
    });

    const { pointLight4Color, pointLight4Intensity, pointLight4Position } =
    useControls("Lighting - Point Light4", {
      pointLight4Color: { label: "Color", value: "#FFA30A" },
      pointLight4Intensity: { label: "Intensity", max: 20, min: 0, value: 0.1 },
      pointLight4Position: { label: "Position XYZ", value: { x: -4.2, y: 2.5, z: -4.9 } },
    });

    const { pointLight5Color, pointLight5Intensity, pointLight5Position } =
    useControls("Lighting - Point Light5", {
      pointLight5Color: { label: "Color", value: "#FFA30A" },
      pointLight5Intensity: { label: "Intensity", max: 20, min: 0, value: 0.1 },
      pointLight5Position: { label: "Position XYZ", value: { x: -8.7, y: 2.5, z: -8.3 } },
    });

    const { pointLight6Color, pointLight6Intensity, pointLight6Position } =
    useControls("Lighting - Point Light6", {
      pointLight6Color: { label: "Color", value: "#FFA30A" },
      pointLight6Intensity: { label: "Intensity", max: 20, min: 0, value: 0.1 },
      pointLight6Position: { label: "Position XYZ", value: { x: 8.5, y: 2.5, z: -8.3 } },
    });

  const {
    spotLightColor,
    spotLightIntensity,
    spotLightPenumbra,
    spotLightPosition,
    spotLightTarget,
  } = useControls("Lighting - Spotlight", {
    spotLightColor: { label: "Color", value: "#0077ff" },
    spotLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.1 },
    spotLightPenumbra: { label: "Penumbra", value: 0.5 },
    spotLightPosition: { label: "Position XZ", value: { x: 0, y: 18, z: -40 } },
    spotLightTarget: { label: "Target XZ", value: { x: 0, y: 0, z: 0 } },
  });

  // const { rectAreaLightColor, rectAreaLightIntensity, rectAreaLightPosition, rectAreaLightWidth, rectAreaLightHeight, rectAreaLightLookAt } =
  //   useControls("Lighting - Point Light", {
  //     rectAreaLightColor: { label: "Color", value: "#FFA30A" },
  //     rectAreaLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.1 },
  //     rectAreaLightPosition: { label: "Position XYZ", value: { x: 5.8, y: 2.7, z: -2 } },
  //     rectAreaLightWidth: { label: "Width", value: 10, min: 0, max: 20 },
  //     rectAreaLightHeight: { label: "Height", value: 10, min: 0, max: 20 },
  //     rectAreaLightLookAt: { label: "Look At", value: { x: 5.8, y: 2.7, z: -2 } },
  //   });




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
  const spotLightRef = useRef();
  // const rectAreaLightRef = useRef();
  const helperSize = 0.5;

  useHelper(
    directionalLightRef,
    DirectionalLightHelper,
    helperSize,
    directionalLightColor,
  );
  useHelper(pointLightRef, PointLightHelper, helperSize, pointLightColor);
  useHelper(pointLight2Ref, PointLightHelper, helperSize, pointLight2Color);
  useHelper(pointLight3Ref, PointLightHelper, helperSize, pointLight3Color);
  useHelper(pointLight4Ref, PointLightHelper, helperSize, pointLight4Color);
  useHelper(pointLight5Ref, PointLightHelper, helperSize, pointLight5Color);
  useHelper(pointLight6Ref, PointLightHelper, helperSize, pointLight6Color);

  useHelper(spotLightRef, SpotLightHelper, spotLightColor);
  // useHelper(rectAreaLightRef, RectAreaLightHelper, helperSize, rectAreaLightColor);

  useFrame(() => {
    target.translateX(spotLightTarget.x);
    target.translateY(spotLightTarget.y);
    target.translateZ(spotLightTarget.z);
  });

  return (
    <>
      <ambientLight color={0xffffff} intensity={0.1} />
      <directionalLight
        castShadow={true}
        color={directionalLightColor}
        intensity={directionalLightIntensity}
        position={[directionalLightPosition.x, directionalLightPosition.y, directionalLightPosition.z]}
        ref={directionalLightRef}
      />
      <pointLight
        
        castShadow={true}
        color={pointLightColor}
        intensity={pointLightIntensity}
        position={[pointLightPosition.x, pointLightPosition.y , pointLightPosition.z]}
        ref={pointLightRef}
      />
      <pointLight
        
        castShadow={true}
        color={pointLight2Color}
        intensity={pointLight2Intensity}
        position={[pointLight2Position.x, pointLight2Position.y , pointLight2Position.z]}
        ref={pointLight2Ref}
      />
      <pointLight
        
        castShadow={true}
        color={pointLight3Color}
        intensity={pointLight3Intensity}
        position={[pointLight3Position.x, pointLight3Position.y , pointLight3Position.z]}
        ref={pointLight3Ref}
      />
      <pointLight
        
        castShadow={true}
        color={pointLight4Color}
        intensity={pointLight4Intensity}
        position={[pointLight4Position.x, pointLight4Position.y , pointLight4Position.z]}
        ref={pointLight4Ref}
      />
      <pointLight
        
        castShadow={true}
        color={pointLight5Color}
        intensity={pointLight5Intensity}
        position={[pointLight5Position.x, pointLight5Position.y , pointLight5Position.z]}
        ref={pointLight5Ref}
      />
      <pointLight
        
        castShadow={true}
        color={pointLight6Color}
        intensity={pointLight6Intensity}
        position={[pointLight6Position.x, pointLight6Position.y , pointLight6Position.z]}
        ref={pointLight6Ref}
      />
      <spotLight
        angle={MathUtils.degToRad(15)}
        castShadow={true}
        color={spotLightColor}
        intensity={spotLightIntensity}
        penumbra={spotLightPenumbra}
        position={[spotLightPosition.x, spotLightPosition.y , spotLightPosition.z]}
        ref={spotLightRef}
        target={target}
      />

      {/* <rectAreaLight
        color={rectAreaLightColor}
        intensity={rectAreaLightIntensity}
        position={[rectAreaLightPosition.x, rectAreaLightPosition.y , rectAreaLightPosition.z]}
        width = {rectAreaLightWidth}
        height = {rectAreaLightHeight}
        lookAt={[rectAreaLightPosition.x, rectAreaLightPosition.y , rectAreaLightPosition.z]}
        ref={rectAreaLightRef}
      /> */}
    </>
  );
};

export default LightingGui;
