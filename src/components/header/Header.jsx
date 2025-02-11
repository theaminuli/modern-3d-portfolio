import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "../../data";
import { useDimensions } from "../../hooks";
import { sidebarVariants } from "../../utils";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`w-full fixed top-0 z-50 ${
				scroll ? "opacity-90 bg-[#010103] border-b border-gray-700" : "bg-transparent"
			}`}
		>
			<div className="container flex items-center justify-between h-20 mx-auto">
				<Logo />
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`text-neutral-400 font-bold text-[18px] hover:text-white transition-colors cursor-pointer`}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>
				<div className="relative flex items-center w-[80px] h-full">
					<div className="absolute right-0 top-0 h-85">
						<motion.nav
							initial={false}
							animate={isOpen ? "open" : "closed"}
							custom={height}
							ref={containerRef}
							className="absolute right-0 top-0 w-64 h-full p-6 "
						>
							<motion.div
								className="absolute inset-0 bg-[#0e141d] rounded-sm"
								variants={sidebarVariants}
							/>
							<Navigation navLinks={navLinks} />
							<MenuToggle toggle={() => setIsOpen(!isOpen)} />
						</motion.nav>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
