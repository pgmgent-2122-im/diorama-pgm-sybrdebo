import { Canvas } from "@react-three/fiber";
import Content from "./Content";

const App = () => {
  return (
    <Canvas shadows={true}>
      <Content />
    </Canvas>
  );
};

export default App;