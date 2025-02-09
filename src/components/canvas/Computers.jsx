/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

/**
 * Computers component renders a 3D computer model with lighting effects.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isMobile - Determines if the view is on a mobile device.
 *
 * @returns {JSX.Element} The rendered 3D computer model with lighting.
 */
const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.2} groundColor="black" />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.5} // Wider beam angle
				penumbra={1.5} // Slightly softer edges
				intensity={4.5} // Increased brightness
				castShadow
				shadow-mapSize={2048} // Higher resolution shadows
			/>
			<pointLight intensity={1.5} />
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

export default Computers;
