/* eslint-disable react/display-name */
import { motion } from "motion/react";

/**
 * Higher-Order Component (HOC) that wraps a given component with a motion effect.
 *
 * This HOC uses Framer Motion to animate the wrapped component's opacity from 0 to 1
 * when it comes into view. The animation is triggered once and only when 25% of the
 * component is visible in the viewport.
 *
 * @param {React.ComponentType} OriginalComponent - The component to be wrapped with motion effects.
 * @returns {React.FC} A functional component that renders the OriginalComponent with motion effects.
 */
const withMotion = (OriginalComponent) => {
	return (props) => {
		return (
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.25 }}
				className={'sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0'}
			>
				<OriginalComponent {...props} />
			</motion.section>
		);
	};
};
export default withMotion;
