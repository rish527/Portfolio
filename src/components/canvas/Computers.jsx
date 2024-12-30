import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader"

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
  {/* Hemisphere Light */}
  <hemisphereLight intensity={0.5} groundColor="black" />

  {/* Spot Light */}
  <spotLight 
    position={[-20, 50, 10]} 
    angle={0.12} 
    penumbra={1} 
    intensity={1} 
    castShadow 
    shadow-mapSize={1024} 
  />

  {/* Point Light */}
  <pointLight intensity={1} />

  {/* Additional Ambient Light for Overall Scene Lighting */}
  <ambientLight intensity={0.3} />

  {/* Directional Light for Stronger Shadow Casting */}
  <directionalLight 
    position={[10, 10, 5]} 
    intensity={0.8} 
    castShadow 
    shadow-mapSize={1024} 
  />

  {/* Additional Spot Light for Highlighting Specific Areas */}
  <spotLight 
    position={[20, 30, 20]} 
    angle={0.3} 
    penumbra={0.5} 
    intensity={0.6} 
    castShadow 
    
  />

  {/* Primitive Object */}
  <primitive
    object={computer.scene}
    scale={isMobile ? 0.65 : 0.8}
    position={isMobile ? [0, -3, -2.2] : [-1, -3.25, -1.5]}
    rotation={[-0.01, -0.2, -0.1]}
  />
</mesh>
  )
}

const ComputersCanvas=()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery=window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener("change",handleMediaQueryChange);
    return ()=>{
      mediaQuery.removeEventListener("change",handleMediaQueryChange);
    };
  },[]);

  return(
    <Canvas 
      frameloop="demand" 
      shadows 
      dpr={[1, 2]} 
      camera={{ position: [20, 3, 5], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense > */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile} />

      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;