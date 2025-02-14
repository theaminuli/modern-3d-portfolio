import { useState } from "react";
import Globe from "react-globe.gl";
import { copy, grid1, grid2, grid3, grid4, tick } from "../../assets";
import Button from "../common/Button";
import { motion } from "motion/react";
import { fadeIn } from "../../utils";
const About = () => {
	const [hasCopied, setHasCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(" hello@theaminul.com");
		setHasCopied(true);

		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	};

	return (
		<section className="c-space my-20" id="about">
			<div className="container grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
				<motion.div
					variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
					className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src={grid1}
							alt="grid-1"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>

						<div>
							<p className="grid-headtext">Hi, I’m Aminul Islam</p>
							<p className="grid-subtext">
								With 4 years of experience, I have honed my skills in both
								frontend and backend dev, creating dynamic and responsive
								websites.
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={fadeIn("up", "spring", 2 * 0.5, 0.75)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
					className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src={grid2}
							alt="grid-2"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>

						<div>
							<p className="grid-headtext">Tech Stack</p>
							<p className="grid-subtext">
								I specialize in a variety of languages, frameworks, and tools
								that allow me to build robust and scalable applications
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={fadeIn("up", "spring", 3 * 0.5, 0.75)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
					className="col-span-1 xl:row-span-4">
					<div className="grid-container">
						<div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
							<Globe
								height={326}
								width={326}
								backgroundColor="rgba(0, 0, 0, 0)"
								backgroundImageOpacity={0.5}
								showAtmosphere
								showGraticules
								globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
								bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
								labelsData={[
									{
										lat: 40,
										lng: -100,
										text: "Rjieka, Croatia",
										color: "white",
										size: 15,
									},
								]}
							/>
						</div>
						<div>
							<p className="grid-headtext">
								I’m very flexible with time zone communications & locations
							</p>
							<p className="grid-subtext">
								I&apos;m based in Rjieka, Croatia and open to remote work
								worldwide.
							</p>
							<Button name="Contact Me" isBeam containerClass="w-full mt-10" />
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
					className="xl:col-span-2 xl:row-span-3">
					<div className="grid-container">
						<img
							src={grid3}
							alt="grid-3"
							className="w-full sm:h-[266px] h-fit object-contain"
						/>

						<div>
							<p className="grid-headtext">My Passion for Coding</p>
							<p className="grid-subtext">
								I love solving problems and building things through code.
								Programming isn&apos;t just my profession—it&apos;s my passion.
								I enjoy exploring new technologies, and enhancing my skills.
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={fadeIn("up", "spring", 2 * 0.5, 0.75)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
					className="xl:col-span-1 xl:row-span-2">
					<div className="grid-container">
						<img
							src={grid4}
							alt="grid-4"
							className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
						/>

						<div className="space-y-2">
							<p className="grid-subtext text-center">Contact me</p>
							<div className="copy-container" onClick={handleCopy}>
								<img src={hasCopied ? tick : copy} alt="copy" />
								<p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
									hello@theaminul.com
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
