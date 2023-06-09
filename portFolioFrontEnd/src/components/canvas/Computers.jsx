import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./workspace/scene.gltf");

  return (
   <mesh>
   {/* creating the light so that we can see objects */}
  <hemisphereLight intensity={0.1} 
  groundColor="black"/>
  <spotLight
    position={[-20,50,10]}
    angle={0.12}
    penumbra={1}
    intensity={0.5}
    castShadow
    shadow-mapSize={1024}
  />

   


  <pointLight intensity={0.6}/>
  <primitive object={computer.scene}
    scale={isMobile? 0.05: 0.1}
    position={isMobile? [0,-1.70,-0.30]:[0,-3.05,-0.55]}
    rotation ={[-0.01,-0.2,-0.1]}
  />

   </mesh>
  
  );
};

const ComputersCanvas = () => {

  const[isMobile,setIsMobile]=useState(false)

   useEffect(()=>{
    const mediaQuery =window.matchMedia('(max-width:500PX)')
    setIsMobile(mediaQuery.matches);
   
    const handelMediaChamge=(e)=>{
      setIsMobile(e.matches)
    }
 mediaQuery.addEventListener('change',handelMediaChamge)
 return ()=>{
  mediaQuery.removeEventListener('change',handelMediaChamge)
 }
   

   },[])




  
  return (
    <Canvas
     frameloop="demand"
     shadows
     camera={{position:[20,3,5],fov:25}}
    
     gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
        </Suspense>
      <Preload all/>
    </Canvas>
  );
};

export default ComputersCanvas;