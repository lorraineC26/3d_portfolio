import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader'

const Earth = () => {
  // const earth = useGLTF('./planet/scene.gltf')
  const rocket = useGLTF("./rocket/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3.8} groundColor="black" />
      <pointLight intensity={1} />

      <primitive
        object={rocket.scene}
        // scale={2.5} // originally for earth
        scale={0.2}
        position-y={0.9} // ensur we can rotate horizontally
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov:45, //make earth larger
        near:0.1,
        far:200,
        position:[-4, 3, 6]
      }}
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
