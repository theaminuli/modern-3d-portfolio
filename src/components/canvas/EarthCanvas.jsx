import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../common/Loader";
import Earth from "./Earth";

/**
 * EarthCanvas component renders a 3D canvas with an Earth model.
 * 
 * @component
 * @returns {JSX.Element} The rendered EarthCanvas component.
 * 
 * @see https://threejs.org/ for more information on Three.js
 */
const EarthCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6],
			}}
		>
			<Suspense fallback={<Loader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default EarthCanvas;
