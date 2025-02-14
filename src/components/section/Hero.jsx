 
import { motion } from "motion/react";

import { ComputersCanvas } from "../canvas";

/**
 * Hero component renders the hero section of the portfolio.
 * It includes a greeting message, a brief description, and a canvas animation.
 *
 * @component
 * @returns {JSX.Element} The Hero component.
 */
const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto bg-hero-pattern">
			<div
				className="absolute inset-0 top-[40px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
				<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
					<p className="sm:text-3xl text-xl font-medium text-white text-center">Hi, I am Aminul <span className="waving-hand">👋</span></p>
					<p className="hero_tag text-6xl sm:text-4xl">Building Products &amp; Brands</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-10 bottom-15 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
