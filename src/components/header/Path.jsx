import { motion } from "motion/react"
/**
 * Path component renders an SVG path element with motion capabilities.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.fill - The fill color of the path. Default is "transparent".
 * @param {number} props.strokeWidth - The width of the stroke. Default is 3.
 * @param {string} props.stroke - The color of the stroke. Default is "#ffff".
 * @param {string} props.strokeLinecap - The shape to be used at the end of open subpaths when they are stroked. Default is "round".
 * @returns {JSX.Element} The rendered motion.path element.
 */
const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="#ffff"
		strokeLinecap="round"
		{...props}
	/>
);
export default Path;