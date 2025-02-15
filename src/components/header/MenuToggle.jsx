/* eslint-disable react/prop-types */
import Path from "./Path";

/**
 * MenuToggle component renders a button that toggles the menu state.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.toggle - The function to call when the button is clicked.
 *
 * @returns {JSX.Element} The rendered MenuToggle component.
 */
const MenuToggle = ({ toggle }) => (
	<button
		className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-[#0e141d] rounded-full cursor-pointer"
		onClick={toggle}
	>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</button>
);
export default MenuToggle;
