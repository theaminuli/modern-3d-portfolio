import { SquareArrowOutUpRight } from "lucide-react";
import { projects } from "../../data";

const Projects = () => {
	return (
		<section className="c-space my-20" id="projects">
			<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<div
						key={project.id}
						className="rounded-md border border-gray-800 bg-gray-900 overflow-hidden shadow-lg hover:shadow-xl transition-all"
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-70 object-cover hover:scale-105 transition-transform"
						/>
						<div className="flex flex-col justify-between p-4 flex-grow">
							<div className="p-4">
								<h3 className="font-semibold text-lg">{project.title }</h3>
								<p className="text-gray-600">
									{project.tags.map((tag) => (
										<span key={tag} className="text-sm text-gray-400">
											{tag}
										</span>
									))}
								</p>
							</div>
							<div className="p-4 flex justify-end">
								<a
									href={project.source}
									className="p-2 bg-black text-white hover:bg-gray-800 transition"
								>
									<SquareArrowOutUpRight />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default Projects;
