import {Suspense, useEffect, useState} from 'react';

// empty canvas allows us to play something on it
import { Canvas } from '@react-three/fiber';

// help us draw on the canvas, import 3d models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    // use mesh instead of div for 3d models
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
    </mesh>
  )
}

export default Computers