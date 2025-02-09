/**
 * An object representing the animation variants for text elements.
 * 
 * @property {Object} hidden - The initial hidden state of the text element.
 *
 * @property {Object} show - The visible state of the text element.
 */
const textVariant = {
	hidden: { y: -50, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", duration: 1.25 },
	},
};
export default textVariant;