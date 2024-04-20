import React, { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, OrbitControls, Float, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    // add float propertity to ball
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]} />

      {/* the actual model */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* provide the shape */}
        <icosahedronGeometry args={[1, 1]} />
        {/* provide the color and texture */}
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* provide more texture and material appearing on the balls */}
        <Decal 
          map={decal}
          position={[0, 0, 1]}
        />

      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    // similar to the Canvas in Computer.jsx
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* react property; allow us to have a Loader when our model is loading*/}
      <Suspense fallback={<CanvasLoader />}>
        {/* allow us to move model left and right */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default BallCanvas