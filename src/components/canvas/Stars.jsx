/* eslint-disable react/no-unknown-property */
import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { randomSpherePoints } from "../../utils";

/**
 * Stars component renders a group of points in a 3D space that rotate over time.
 * 
 * @component
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered Stars component.
 * 
 * @description
 * This component uses the `useRef` hook to create a reference to the points group,
 * and the `useState` hook to generate random points on a sphere. The `useFrame` hook
 * is used to update the rotation of the points group on each frame, creating an animation effect.
 * 
 * The `Points` component is used to render the points, with the `PointMaterial` component
 * defining the appearance of each point.
 */
const Stars = (props) => {
	const ref = useRef();
	const [sphere] = useState(() => randomSpherePoints(5000, 1.2));

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

export default Stars;
