/* eslint-disable react-refresh/only-export-components */
import { motion } from "motion/react";
import { services } from "../../data";
import { fadeIn, textVariant } from "../../utils";
import ServiceCard from "../common/ServiceCard";
import withMotion from "../../HOC/withMotion";

const About = () => {
	return (
		<>
			<motion.div variants={textVariant}>
				<p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Introduction</p>
				<h2 className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Full Stack Developer | Expert in TypeScript, JavaScript, React, Node.js,
				MongoDB, Express.js & WordPress. I build scalable, user-friendly
				solutions that solve real-world problems. Let’s bring your ideas to
				life!
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};
export default withMotion(About);
