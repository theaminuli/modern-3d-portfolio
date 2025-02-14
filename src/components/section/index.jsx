import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";

const HomePage = () => {
	return (
		<>
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Clients />
			<Contact />
		</>
	);
};
export default HomePage;
