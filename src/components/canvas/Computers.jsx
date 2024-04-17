import { Suspense, useEffect, useState } from "react";

// empty canvas allows us to play something on it
import { Canvas } from "@react-three/fiber";

// help us draw on the canvas, import 3d models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // use mesh instead of div for 3d models
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      //where we look the model from
      camera={{ position: [20, 3, 5], fov: 25 }} // fov: how wide of our field of view
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* react property; allow us to have a Loader when our model is loading*/}
      <Suspense fallback={<CanvasLoader />}>
        {/* allow us to move model left and right */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // only rotate arounf a specific angle
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
