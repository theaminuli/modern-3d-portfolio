/**
 * Variants for the sidebar animation.
 * 
 * @type {Object}
 * @property {Function} open - Function to define the open state of the sidebar.
 * @property {Object} closed - Object to define the closed state of the sidebar.
 */
const sidebarVariants = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
		transition: { type: "spring", stiffness: 20, restDelta: 2 },
	}),
	closed: {
		clipPath: "circle(20px at calc(100% - 40px) 40px)",
		transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 },
	},
};

export default sidebarVariants;