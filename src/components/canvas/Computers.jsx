import { Suspense, useEffect, useState } from "react";

// empty canvas allows us to play something on it
import { Canvas } from "@react-three/fiber";

// help us draw on the canvas, import 3d models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  const sanrio = useGLTF("./cinnamoroll/scene.gltf");

  return (
    // use mesh instead of div for 3d models
    <mesh>
      <hemisphereLight intensity={3.8} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* the actual 3d comupter model */}
      <primitive
        object={sanrio.scene}
        //set location of the model
        scale={isMobile ? 0.7 : 0.95}
        position={isMobile ? [0, -2.8, -1] : [0, -2.8, -1.5]}
        rotation={[-0.1, 1, -0.1]} // updated rotation degree for cinnamoroll
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // check if we've already mobile device & change the isMobile var
  useEffect(() => {
    // add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // are we on the device lower than 500px? set the init value of 'isMobile'
    setIsMobile(mediaQuery.matches);

    // define a cb fx as a listener for changes to the media query
    const handelMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //add the cb fx as an event listener for changes to the media query
    mediaQuery.addEventListener("change", handelMediaQueryChange);

    // remove the listener when the comp is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handelMediaQueryChange);
    };
  }, []);


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
          maxPolarAngle={Math.PI / 2} // only rotate around a specific angle
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
