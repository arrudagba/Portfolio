'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff'
    }}>
      Carregando...
    </div>
  ),
});

export default function Home() {
  return (
    <main style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#1C1C22',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Suspense fallback={
        <div style={{ 
          width: '100vw', 
          height: '100vh', 
          backgroundColor: '#1C1C22',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff'
        }}>
          Carregando modelo 3D...
        </div>
      }>
        <Scene3D />
      </Suspense>
    </main>
  );
}
