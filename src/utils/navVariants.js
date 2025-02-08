/**
 * An object containing animation variants for a navigation menu.
 * 
 * @property {Object} open - The animation variant for the open state.=
 * 
 * @property {Object} closed - The animation variant for the closed state.=
 */
const navVariants = {
	open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
	closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

export default navVariants;