/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { navVariants } from "../../utils";
import MenuItem from "./MenuItem";

const Navigation = ({ navLinks }) => (
	<motion.ul className="absolute top-20 w-48 space-y-4" variants={navVariants}>
		{navLinks.map((link, index) => (
			<MenuItem key={link.id} id={link.id} index={index} title={link.title} />
		))}
	</motion.ul>
);
export default Navigation;
