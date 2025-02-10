import { logo } from "../../assets";

const Logo = () => {
	return (
		<a
			href="/"
			className="flex items-center gap-2 p-6"
		>
			<img src={logo} alt="logo" className="w-9 h-9 object-contain" />
			<span className="text-neutral-400 font-bold text-xl hover:text-white transition-colors ">Aminul </span>
		</a>
	);
};
export default Logo;