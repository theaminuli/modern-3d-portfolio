/**
 * An object containing animation variants for an item.
 * @type {Object}
 */
const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: { y: { stiffness: 1000, velocity: -100 } },
	},
	closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
};

export default itemVariants;