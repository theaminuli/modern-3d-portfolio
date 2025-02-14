import { motion } from "motion/react";
import { star } from "../../assets";
import { clientReviews } from "../../data";
import { fadeIn } from "../../utils";
/**
 * Clients component renders a section displaying client reviews.
 *
 * @component
 * @returns {JSX.Element} A section containing client reviews.
 */
const Clients = () => {
	return (
		<section className="c-space my-20">
			<div className="container">
				<h3 className="head-text">Hear from My Clients</h3>

				<div className="client-container">
					{clientReviews.map((item, index) => (
						<motion.div
							key={item.id}
							variants={fadeIn("up", "spring", index * 0.5, 0.75)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, amount: 0.3 }}
							className="client-review"
						>
							<div>
								<p className="text-white-800 font-light">{item.review}</p>

								<div className="client-content">
									<div className="flex gap-3">
										<img
											src={item.img}
											alt="reviewer"
											className="w-12 h-12 rounded-full"
										/>
										<div className="flex flex-col">
											<p className="font-semibold text-white-800">
												{item.name}
											</p>
											<p className="text-white-500 md:text-base text-sm font-light">
												{item.position}
											</p>
										</div>
									</div>

									<div className="flex self-end items-center gap-2">
										{Array.from({ length: 5 }).map((_, index) => (
											<img
												key={index}
												src={star}
												alt="star"
												className="w-5 h-5"
											/>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Clients;
