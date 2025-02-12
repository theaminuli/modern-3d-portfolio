const Projects = () => {
	return (
		<section className="c-space my-20" id="projects">
			<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="border-2 border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
					<img
						src="https://via.placeholder.com/400"
						alt="Personal Portfolio"
						className="w-full h-52 object-cover hover:scale-105 transition-transform"
					/>
					<div className="p-4">
						<h3 className="font-semibold text-lg">Personal Portfolio</h3>
						<p className="text-gray-600">CSS/HTML/JavaScript</p>
					</div>
					<div className="p-4 flex justify-end">
						<a
							href="#"
							className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
						>
							↗
						</a>
					</div>
				</div>

				<div className="border-2 border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
					<img
						src="https://via.placeholder.com/400"
						alt="Apex"
						className="w-full h-52 object-cover hover:scale-105 transition-transform"
					/>
					<div className="p-4">
						<h3 className="font-semibold text-lg">Apex</h3>
						<p className="text-gray-600">CSS/HTML</p>
					</div>
					<div className="p-4 flex justify-end">
						<a
							href="#"
							className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
						>
							↗
						</a>
					</div>
				</div>

				<div className="border-2 border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
					<img
						src="https://via.placeholder.com/400"
						alt="ElementsKit"
						className="w-full h-52 object-cover hover:scale-105 transition-transform"
					/>
					<div className="p-4">
						<h3 className="font-semibold text-lg">ElementsKit</h3>
						<p className="text-gray-600">Elementor/WordPress</p>
					</div>
					<div className="p-4 flex justify-end">
						<a
							href="#"
							className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
						>
							↗
						</a>
					</div>
				</div>

				<div className="border-2 border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
					<img
						src="https://via.placeholder.com/400"
						alt="Conskip"
						className="w-full h-52 object-cover hover:scale-105 transition-transform"
					/>
					<div className="p-4">
						<h3 className="font-semibold text-lg">Conskip</h3>
						<p className="text-gray-600">Elementor/WordPress</p>
					</div>
					<div className="p-4 flex justify-end">
						<a
							href="#"
							className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
						>
							↗
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Projects;