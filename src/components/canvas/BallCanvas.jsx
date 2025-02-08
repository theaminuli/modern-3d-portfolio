/* eslint-disable react/prop-types */
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../common/Loader";
import Ball from "./Ball";

/**
 * BallCanvas component renders a 3D canvas with a ball and orbit controls.
 *
 * @param {Object} props - The component props.
 * @param {string} props.icon - The URL of the icon image to be displayed on the ball.
 * @returns {JSX.Element} The rendered BallCanvas component.
 */
const BallCanvas = ({ icon }) => {
	return (
		<Canvas
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<Loader />}>
				<OrbitControls enableZoom={false} />
				<Ball icon={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
