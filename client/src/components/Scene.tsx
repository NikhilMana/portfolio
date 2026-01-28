import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { random } from "maath"; // 'maath' is usually installed with drei, or you can implement random gen

function Stars(props: any) {
  const ref = useRef<any>();
  // Generate random positions for 5000 particles in a sphere
  const sphere = useMemo(() => {
    const data = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 1.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      data[i * 3] = x;
      data[i * 3 + 1] = y;
      data[i * 3 + 2] = z;
    }
    return data;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#39FF14"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
    const meshRef = useRef<THREE.Mesh>(null!);
    
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.sin(time / 2);
        meshRef.current.rotation.y = Math.cos(time / 2);
        meshRef.current.position.y = Math.sin(time) * 0.2;
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <dodecahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial 
                color="#00FFFF" 
                wireframe 
                emissive="#00FFFF"
                emissiveIntensity={0.5}
            />
        </mesh>
    );
}

export function Scene() {
  return (
    <div className="absolute inset-0 -z-10 bg-background">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Stars />
        {/* Subtle background fog to blend edges */}
        <color attach="background" args={['#050505']} /> 
        <fog attach="fog" args={['#050505', 0.8, 2.5]} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />
    </div>
  );
}
