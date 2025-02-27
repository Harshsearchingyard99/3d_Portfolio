import { useState , Suspense , useRef } from "react"
import { Canvas , useFrame } from "@react-three/fiber"
import { Points , PointMaterial , Preload } from "@react-three/drei"
import { random } from "maath/random";
import { inSphere } from "maath/random";
import dynamic from "next/dynamic";
const Stars = () => {
  const ref = useRef()
  const sphere = inSphere(new Float32Array (5000) , {radius : 1.2})
  useFrame((state,delta)=>{
    ref.current.rotation.x -= delta/10; 
    ref.current.rotation.y -= delta/15; 
  })
  return (
    <group rotation={[0,0,Math.PI / 4]}>
<Points ref={ref} positions={sphere} stride={3} frustumCulled>
  <PointMaterial transparent 
  color="#f272c8"
  size={0.002}
  sizeAttenuation = {true}
  depthWrite = {false}
  />
</Points>
    </group>
  )
}
const StarCanvas = ()=>{
  return(
   <div className="w-full h-full absolute inset-0  z-[-1]">
  <Canvas camera={{position : [0,0,1]}}>
<Suspense fallback = {null}>
 <Stars/>
</Suspense>
<Preload all/>
  </Canvas>
   </div>
  )
}

export default  dynamic(() => Promise.resolve(StarCanvas), { ssr: false });
