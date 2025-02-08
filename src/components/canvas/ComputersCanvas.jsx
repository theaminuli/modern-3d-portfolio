import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "../../hooks";
import Loader from "../common/Loader";
import Computers from "./Computers";

/**
 * ComputersCanvas component renders a 3D canvas using the react-three-fiber library.
 * It sets up the canvas with specific properties and includes orbit controls and a Computers component.
 * The canvas adjusts based on the screen size using a media query.
 *
 * @component
 * @returns {JSX.Element} The rendered 3D canvas component.
 */
const ComputersCanvas = () => {
	const isMobile = useMediaQuery("(max-width: 500px)");

	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<Loader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
