import { useEffect, useRef } from "react";

/**
 * Custom hook to get the dimensions (width and height) of a referenced DOM element.
 *
 * @param {Object} ref - The reference to the DOM element.
 * @returns {Object} An object containing the width and height of the referenced element.
 */
const useDimensions = (ref) => {
	const dimensions = useRef({ width: 0, height: 0 });

	useEffect(() => {
		if (ref.current) {
			dimensions.current.width = ref.current.offsetWidth;
			dimensions.current.height = ref.current.offsetHeight;
		}
	}, [ref]);

	return dimensions.current;
};
export default useDimensions;