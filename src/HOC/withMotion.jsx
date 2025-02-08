/* eslint-disable react/display-name */
import { motion } from "motion/react";

const withMotion = (OriginalComponent) => {
	return (props) => {
		return (
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.25 }}
				className={'sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 bg-[#060816]'}
			>
				<OriginalComponent {...props} />
			</motion.section>
		);
	};
};
export default withMotion;
