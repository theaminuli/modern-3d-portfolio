/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Vector3 } from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";

const Computers = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
    >
      <color attach="background" args={["#1a1a1a"]} />
      <fog attach="fog" args={["#1a1a1a", 5, 20]} />
      <ambientLight intensity={0.3} />
      <Scene />
    </Canvas>
  );
};

function Scene() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
      {/* Moving Spotlights for dynamic lighting */}
      <MovingSpot depthBuffer={depthBuffer} color="#00aaff" position={[3, 3, 2]} />
      <MovingSpot depthBuffer={depthBuffer} color="#ff5500" position={[-3, 3, 2]} />

      {/* 3D Computer Model */}
      <mesh>
        <primitive
          object={computer.scene}
          scale={0.75}
          position={[0, -3, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>

      {/* Floor Plane for shadows */}
      <mesh receiveShadow position={[0, -3, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </>
  );
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);

  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });

  return <SpotLight castShadow ref={light} penumbra={1} distance={10} angle={0.4} intensity={4} attenuation={5} anglePower={4} {...props} />;
}

export default Computers;
