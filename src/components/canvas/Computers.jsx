/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

/**
 * Computers component renders a 3D computer model with enhanced lighting.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isMobile - Determines if the view is on a mobile device.
 *
 * @returns {JSX.Element} The rendered 3D computer model with better lighting.
 */
const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			{/* Soft ambient lighting for better visibility */}
			<ambientLight intensity={0.6} />

			{/* Hemisphere light for a more natural feel */}
			<hemisphereLight intensity={0.5} groundColor="black" />

			{/* Stronger spotlight for dramatic effect */}
			<spotLight
				position={[-20, 50, 10]}
				angle={0.3}
				penumbra={0.8}
				intensity={2.5}
				castShadow
				shadow-mapSize={2048}
			/>

			{/* Additional point lights for general brightness */}
			<pointLight position={[5, 10, 5]} intensity={1.8} />
			<pointLight position={[-5, 10, -5]} intensity={1.5} />
			<pointLight position={[0, 5, 0]} intensity={1.2} />

			{/* Computer model */}
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
