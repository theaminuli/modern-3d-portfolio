/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Decal, Float, useTexture } from "@react-three/drei";
/**
 * Ball component renders a 3D floating ball with a decal texture.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.icon - The URL of the icon to be used as a decal texture.
 * @returns {JSX.Element} A JSX element representing the 3D ball.
 */
const Ball = (props) => {
	const [decal] = useTexture([props.icon]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};
export default Ball;