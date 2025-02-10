/* eslint-disable react/prop-types */
const Button = ({ name, isBeam = false, containerClass }) => {
	return (
		<button className={`btn ${containerClass}`}>
			{isBeam && (
				<span className="relative flex h-3 w-3">
					<span className="rounded-full bg-green-500 opacity-25 animate-ping"></span>
					<span className="relative inline-flex w-[.75rem] h-[.75rem] rounded-full bg-green-500"></span>
				</span>
			)}
			{name}
		</button>
	);
};

export default Button;
