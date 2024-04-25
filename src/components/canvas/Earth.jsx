import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      {/* Suspense is going to ensure while our model is loading, we have sth to show */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitContrl allow our mouse to move around the model */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* the earth model */}
        <Earth />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas;
