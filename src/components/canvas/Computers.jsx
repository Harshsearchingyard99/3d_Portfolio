"use client";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Load Model Hook
const ComputerModel = () => {
  const { viewport } = useThree(); // 📌 Viewport width detect karega
  const [scale, setScale] = useState(0.75);
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  useEffect(() => {
    if (viewport.width < 10) {
      setScale(0.5);  // Mobile ke liye chhota karein

    } else {
      setScale(0.75); // Default scale for larger screens

    }
  }, [viewport.width]);
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={3} />
      <primitive
        object={scene}
        scale={scale}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Canvas Component
const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <ComputerModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// Dynamic Import with SSR Disabled
export default dynamic(() => Promise.resolve(ComputerCanvas), { ssr: false });

