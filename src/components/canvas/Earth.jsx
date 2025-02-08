/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
/**
 * Earth component that loads and renders a 3D model of a planet using GLTF.
 *
 * This component uses the `useGLTF` hook to load the GLTF model from the specified path
 * and renders it as a primitive object with specified scale, position, and rotation.
 *
 * @component
 */
const Earth = () => {
	const earth = useGLTF("./planet/scene.gltf");

	return (
		<primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
	);
};
export default Earth;
