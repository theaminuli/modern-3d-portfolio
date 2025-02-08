import { Html, useProgress } from "@react-three/drei";

/**
 * Loader component displays a loading spinner and the loading progress percentage.
 * It uses the `useProgress` hook to get the current loading progress.
 *
 * @component
 *
 * @returns {JSX.Element} The Loader component.
 */
const Loader = () => {
	const { progress } = useProgress();
	return (
		<Html
			as="div"
			center
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<span className="canvas-loader"></span>
			<p
				style={{
					fontSize: 14,
					color: "#F1F1F1",
					fontWeight: 800,
					marginTop: 40,
				}}
			>
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
};

export default Loader;
