'use client';

import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';
import { useLoading } from '../../context/LoadingContext';

export default function Model3D() {
  const { scene } = useGLTF('/boneco_compressed.glb');
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (scene) {
      // Ajustar a escala ou posição do modelo se necessário
      scene.position.set(0, 0, 0);
      scene.rotation.set(0, 0, 0);

      // Notify that loading is complete with a small delay for smooth reveal
      setTimeout(() => setIsLoading(false), 500);

      // Centralizar o modelo
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      scene.position.sub(center);

      // AJUSTE DE TAMANHO: Mude o valor abaixo para controlar o tamanho do modelo
      // Valores menores = modelo menor | Valores maiores = modelo maior
      // Exemplo: 1.5 (pequeno), 2.0 (médio), 3.0 (grande), 4.0 (muito grande)
      const tamanhoDesejado = 3.0; // <-- ALTERE ESTE VALOR PARA AJUSTAR O TAMANHO

      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = tamanhoDesejado / maxDim;
      scene.scale.multiplyScalar(scale);
    }
  }, [scene]);

  return scene ? <primitive object={scene} /> : null;
}

// Preload do modelo para melhor performance
// Preload do modelo para melhor performance
useGLTF.preload('/boneco_compressed.glb');
