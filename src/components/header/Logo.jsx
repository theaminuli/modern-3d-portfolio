import { logo } from "../../assets";

const Logo = () => {
	return (
		<a
			href="/"
			className="flex items-center gap-2 p-6"
		>
			<img src={logo} alt="logo" className="w-9 h-9 object-contain" />
			<span className="text-white text-[18px] font-bold cursor-pointer flex ">Aminul </span>
		</a>
	);
};
export default Logo;