/* eslint-disable react/prop-types */
/**
 * Button component renders a button element with optional ping effect.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The text to display inside the button.
 * @param {boolean} [props.isBeam=false] - If true, displays a ping effect.
 * @param {string} props.containerClass - Additional classes for the button element.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({ name, isBeam = false, containerClass }) => {
	return (
		<button className={`btn ${containerClass}`}>
			{isBeam && (
				<span className="relative flex h-3 w-3">
					<span className="btn-ping"></span>
					<span className="relative inline-flex w-[.75rem] h-[.75rem] rounded-full bg-green-500"></span>
				</span>
			)}
			{name}
		</button>
	);
};

export default Button;
