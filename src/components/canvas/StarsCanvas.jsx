import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Stars from "./Stars";

/**
 * StarsCanvas component renders a full-screen canvas with a starry background.
 * It uses the `Canvas` component from `@react-three/fiber` to create a 3D scene.
 * The `Stars` component is rendered inside a `Suspense` fallback to handle lazy loading.
 * The `Preload` component ensures all assets are preloaded before rendering.
 *
 * @component
 */
const StarsCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
