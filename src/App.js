import "./App.css";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Sun from "./components/Sun/Sun";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <pointLight position={[-10, -10, -10]} />
          <Sun position={[0, 0, 0]} />
          <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
