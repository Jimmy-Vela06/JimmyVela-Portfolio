import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Box } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const PhoneModel = () => {
  const { scene } = useLoader(GLTFLoader, '../../../../public/iphone/applephone.glb');

  return (
    <mesh>
      <hemisphereLight intensity={0.6} />
      <directionalLight position={[5, 5, 10]} intensity={5} castShadow />
      <pointLight intensity={0.2} />
      <spotLight position={[-2, 2, 10]} color='#FDB813' />

      <primitive object={scene} scale={9} position={[0, -0, -0]} rotation={[-0.01, 20, -0.1]} receiveShadow castShadow />
    </mesh>
  );
};

const PhoneCanvas = () => {
  return (
    <Canvas frameloop='demand' shadows dpr={[3, 2]} camera={{ position: [0, 0, 5], fov: 25 }}>
      <fog attach='fog' args={['white', 6, 10]} />

      <Suspense fallback={null}>
        <OrbitControls autoRotate autoRotateSpeed={12} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <PhoneModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PhoneCanvas;
