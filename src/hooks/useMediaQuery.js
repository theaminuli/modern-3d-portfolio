import { useEffect, useState } from "react";

/**
 * Custom hook to determine if a given media query matches the current viewport.
 *
 * @param {string} query - The media query string to evaluate.
 * @returns {boolean} - A boolean indicating whether the media query matches the current viewport.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * console.log(isMobile); // true or false based on the viewport width
 */
const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		setMatches(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setMatches(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, [query]);

	return matches;
};

export default useMediaQuery;