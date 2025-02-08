import { motion } from "motion/react"
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