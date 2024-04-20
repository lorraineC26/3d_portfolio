import React, { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, OrbitControls, Float, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props, imgUrl]);

  return (
    <div>Ball</div>
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