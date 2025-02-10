/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { itemVariants } from "../../utils";

const MenuItem = ({ index, title }) => {
	const colors = ["#FF008C", "#D309E1", "#9C1AFF"];
	return (
		<motion.li
			className="relative"
			variants={itemVariants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<a
				href="#"
				className="flex items-center space-x-3 p-2 text-neutral-400 font-bold text-xl hover:text-white transition-colors"
			>
				<div
					className="w-10 h-10 rounded-full"
					style={{ backgroundColor: colors[index] }}
				/>
				<span className="text-white text-[18px] font-medium">{title}</span>
			</a>
		</motion.li>
	);
};
export default MenuItem;
