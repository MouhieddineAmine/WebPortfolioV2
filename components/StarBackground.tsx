"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

interface StarBackgroundProps {
  [key: string]: unknown;
}

const StarBackground = (props: StarBackgroundProps) => {
  const ref = useRef<React.ElementRef<typeof Points>>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1800), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if(ref.current){
    ref.current.rotation.x -= delta/20;
    ref.current.rotation.y -= delta/30;
    }
  })


  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="#fff"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-0">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;