'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import Model3D from './Model3D';
import * as THREE from 'three';

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#444444" wireframe />
    </mesh>
  );
}

// Componente que rotaciona o modelo automaticamente
function RotatingModel() {
  const groupRef = useRef<THREE.Group>(null);
  const startTimeRef = useRef<number>(0);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Inicializa o tempo de início
      if (startTimeRef.current === 0) {
        startTimeRef.current = state.clock.elapsedTime;
        // Define a rotação inicial (de lado - 90 graus = Math.PI / 2)
        groupRef.current.rotation.y = Math.PI * 2;
      }
      
      // Espera 2 segundos antes de começar a girar
      const delayInSeconds = 1;
      const elapsedTime = state.clock.elapsedTime - startTimeRef.current;
      
      if (elapsedTime > delayInSeconds) {
        // Rotação automática no eixo Y (horizontal) em sentido anti-horário
        groupRef.current.rotation.y -= 0.003; // Ajuste a velocidade aqui (valores maiores = mais rápido)
      }
    }
  });
  
  return (
    <group ref={groupRef}>
      <Model3D />
    </group>
  );
}

import { useTheme } from "@/app/context/ThemeContext";

export default function Scene3D() {
  const { theme } = useTheme();
  const grad = theme === 'light'
    ? 'linear-gradient(to top, hsl(var(--primary)) 0%, rgba(131,197,216,0) 70%, hsl(var(--background)) 30%)'
    : 'linear-gradient(to top, hsl(var(--primary)) 0%, rgba(14,165,208,0) 70%, hsl(var(--background)) 30%)';
  const mainLight = 'hsl(var(--primary))';
  return (
    <div style={{
      width: '350px',
      height: '350px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto',
      position: 'relative',
      background: grad
    }}>
      <Canvas
        camera={{ position: [0, 5, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        {/* Luz principal adaptada ao tema */}
        <directionalLight position={[-10, 0, 0]} intensity={4.5} color={mainLight} />
        {/* Luzes complementares */}
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <Suspense fallback={<Loader />}>
          <RotatingModel />
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
          minPolarAngle={Math.PI / 2 - 0.1}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minDistance={5}
          maxDistance={5}
        />
      </Canvas>
    </div>
  );
}
