import { Canvas } from "@react-three/fiber";
import Content from "./Content";

const App = () => {
  return (
    <>
      <Canvas shadows={true}>
        <Content />
      </Canvas>
      <form type="POST">
        <label>
          <input type="text" name="name" placeholder="Your name"  />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;