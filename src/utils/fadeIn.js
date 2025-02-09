/**
 * Generates an animation configuration object for a fade-in effect.
 *
 * @param {string} direction - The direction from which the element should fade in. 
 *                             Possible values are "left", "right", "up", and "down".
 * @param {string} type - The type of transition to use (e.g., "spring", "tween").
 * @param {number} delay - The delay before the animation starts, in seconds.
 * @param {number} duration - The duration of the animation, in seconds.
 * @returns {Object} An object containing the initial hidden state and the final show state with transition details.
 */
const fadeIn = (direction = "up", type = "tween", delay = 0.1, duration = 1) => ({
	hidden: {
		x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
		y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type,
			delay,
			duration,
			ease: "easeOut",
		},
	},
});

export default fadeIn;

