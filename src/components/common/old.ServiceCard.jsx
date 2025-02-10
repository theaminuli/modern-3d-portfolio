/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeIn } from "../../utils";
const ServiceCard = ({ index, title, icon, className }) => (
	<div className={className}>
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.3 }}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className="text-white text-[20px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</div>
);

export default ServiceCard;
