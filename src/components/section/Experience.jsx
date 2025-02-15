/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { motion } from "motion/react";
import { workExperiences } from "../../data";
import fadeIn from "../../utils/fadeIn.js";
import { Developer } from "../canvas";
import Loader from "../common/Loader.jsx";
/**
 * Experience component renders a section displaying work experiences with interactive 3D animations.
 *
 * @component
 * @example
 * @returns {JSX.Element} A section element containing work experiences and a 3D canvas.
 *
 * @description
 * The Experience component uses React Three Fiber to render a 3D canvas with lighting and controls.
 * It displays a list of work experiences, each of which can trigger different animations on hover or click.
 *
 * @function
 * @name Experience
 *
 * @property {string} animationName - State to manage the current animation name for the 3D model.
 * @property {function} setAnimationName - Function to update the animation name state.
 *
 * @property {Array} workExperiences - Array of work experience objects, each containing:
 */
const Experience = () => {
	const [animationName, setAnimationName] = useState("idle");

	return (
		<section className="c-space my-20" id="work">
			<div className="container w-full text-white-600">
				<p className="head-text">My Work Experience</p>

				<div className="work-container">
					<div className="work-canvas">
						<Canvas>
							<ambientLight intensity={7} />
							<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
							<directionalLight position={[10, 10, 10]} intensity={1} />
							<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

							<Suspense fallback={<Loader />}>
								<Developer
									position-y={-3}
									scale={3}
									animationName={animationName}
								/>
							</Suspense>
						</Canvas>
					</div>

					<div className="work-content">
						<div className="sm:py-10 py-5 sm:px-5 px-2.5">
							{workExperiences.map((item, index) => (
								<motion.div
									variants={fadeIn("up", "spring", index * 0.5, 0.75)}
									initial="hidden"
									whileInView="show"
									viewport={{ once: true, amount: 0.3 }}
									key={index}
									onClick={() => setAnimationName(item.animation.toLowerCase())}
									onPointerOver={() =>
										setAnimationName(item.animation.toLowerCase())
									}
									onPointerOut={() => setAnimationName("idle")}
									className="work-content_container group"
								>
									<div className="flex flex-col h-full justify-start items-center py-2">
										<div className="work-content_logo">
											<img className="w-full h-full" src={item.icon} alt="" />
										</div>

										<div className="work-content_bar" />
									</div>

									<div className="sm:p-5 px-2.5 py-5">
										<p className="font-bold text-white-800">{item.name}</p>
										<p className="text-sm mb-5">
											{item.pos} -- <span>{item.duration}</span>
										</p>
										<p className="group-hover:text-white transition-all ease-in-out duration-500">
											{item.title}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
