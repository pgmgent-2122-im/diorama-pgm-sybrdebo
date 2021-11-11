import { Suspense } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

import Lighting from "./components/Lighting";
import LightingGui from "./components/Lighting/indexGui";
import Everything from "./components/Everything";

import { useThree } from "@react-three/fiber";

const components = [
  "Everything", 
];

const lightings = [
  "Lighting",
  "LightingGui"
];


const Content = () => {
  const { showStats } = useControls("General", {
    showStats: {
      label: "Stats",
      value: false,
    },
  });

  useThree(({ camera }) => {
    camera.position.set(-2, 10, 20);
  });

  const { showAxesHelper, showGridHelper, useComponent, useLighting } =
    useControls("Helpers", {
      showAxesHelper: {
        label: "Axes Helper",
        value: false,
      },
      showGridHelper: {
        label: "Grid Helper",
        value: false,
      },
      useComponent: {
        label: "Component",
        options: components,
        value: "Everything",
      },
      useLighting: {
        label: "Lighting",
        options: lightings,
        value: "Lighting",
      },
    });

  function showComponent(name) {
    return useComponent === name;
  }

  function showLighting(name) {
    return useLighting === name;
  }

  return (
    <>
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      {showAxesHelper && <axesHelper />}
      {showGridHelper && <gridHelper />}
      {showStats && <Stats />}
      
      {showLighting("Lighting") && <Lighting />}
      {showLighting("LightingGui") && <LightingGui />}
      
      <Suspense fallback={null}>
        {showComponent("Everything") && <Everything />}
      </Suspense>
    </>
  );
};

export default Content;
