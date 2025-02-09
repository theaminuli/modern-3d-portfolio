/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Vector3 } from "three";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

/**
 * Computers component renders a 3D computer model with dynamic lighting effects.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isMobile - Determines if the view is on a mobile device.
 *
 * @returns {JSX.Element} The rendered 3D computer model with lighting.
 */
const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");
	const depthBuffer = useDepthBuffer({ frames: 1 });

	return (
		<mesh>
			<hemisphereLight intensity={0.3} groundColor="black" />
			<DynamicSpot depthBuffer={depthBuffer} color="#ffcc00" position={[-5, 10, 5]} />
			<DynamicSpot depthBuffer={depthBuffer} color="#0077ff" position={[5, 10, -5]} />
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

function DynamicSpot({ vec = new Vector3(), ...props }) {
	const light = useRef();
	const viewport = useThree((state) => state.viewport);

	useFrame((state) => {
		light.current.target.position.lerp(
			vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0),
			0.1
		);
		light.current.target.updateMatrixWorld();
	});

	return (
		<SpotLight
			castShadow
			ref={light}
			penumbra={0.8}
			distance={10}
			angle={0.4}
			attenuation={6}
			anglePower={5}
			intensity={4}
			{...props}
		/>
	);
}

export default Computers;
