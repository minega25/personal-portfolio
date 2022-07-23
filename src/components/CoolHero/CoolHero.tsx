import * as THREE from 'three';
import React, { Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { LayerMaterial, Depth, Noise } from 'lamina';
import Noodles from '@/components/Noodles';

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05,
    );
  });
}

const Bg = () => (
  <mesh scale={100}>
    <boxGeometry args={[1, 1, 1]} />
    <LayerMaterial side={THREE.BackSide}>
      <Depth
        colorB="red"
        colorA="skyblue"
        alpha={1}
        mode="normal"
        near={130}
        far={200}
        origin={[100, 100, -100]}
      />
      <Noise
        mapping="local"
        type="white"
        scale={1000}
        colorA="white"
        colorB="black"
        mode="subtract"
        alpha={0.2}
      />
    </LayerMaterial>
  </mesh>
);

const CoolHero = () => (
  <div
    style={{
      position: `absolute`,
      width: `100%`,
      height: `90vh`,
      top: `0`,
      bottom: `0`,
      zIndex: `-100`,
    }}
  >
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      {/* <Bg /> */}
      <Suspense fallback={null}>
        <Rig />
        <Noodles />
      </Suspense>
    </Canvas>
  </div>
);

export default CoolHero;
