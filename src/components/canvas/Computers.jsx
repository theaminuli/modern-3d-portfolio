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
			<hemisphereLight intensity={0.3} groundColor="black" />
			<spotLight
				position={[-10, 30, 5]} // Lowered the spotlight closer to the object
				angle={0.5} // Wider beam
				penumbra={0.6} // Slightly soft edges
				intensity={5} // Increased brightness significantly
				castShadow
				shadow-mapSize={4096} // Higher resolution shadows for sharpness
			/>
			<pointLight intensity={2} position={[0, 5, 0]} /> {/* Stronger point light from above */}
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
