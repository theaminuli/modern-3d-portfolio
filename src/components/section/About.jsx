/* eslint-disable react-refresh/only-export-components */
import { motion } from "motion/react";
import { services } from "../../data";
import withMotion from "../../HOC/withMotion";
import { fadeIn, textVariant } from "../../utils";
import ServiceCard from "../common/ServiceCard";

const About = () => {
	return (
		<>
			<motion.div variants={textVariant} initial="hidden" animate="show">
				<p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">
					Introduction
				</p>
				<h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Overview.
				</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("up", "tween", 0.2, 1)}
				initial="hidden"
				animate="show"
				className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
			>
				Full Stack Developer | Expert in TypeScript, JavaScript, React, Node.js,
				MongoDB, Express.js & WordPress. I build scalable, user-friendly
				solutions that solve real-world problems. Let’s bring your ideas to
				life!
			</motion.p>

			<div className="mt-20 flex flex-wrap justify-center gap-10 md:gap-8 lg:gap-6 xl:gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
						className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
					/>
				))}
			</div>
		</>
	);
};
export default withMotion(About);
