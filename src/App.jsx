import { Footer } from "./components/footer";
import Header from "./components/header/Header";
import About from "./components/section/About";
import Clients from "./components/section/Clients";
import Contact from "./components/section/Contact";
import Experience from "./components/section/Experience";
import Hero from "./components/section/Hero";
import Projects from "./components/section/Projects";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Projects />
			<Clients />
			<Experience />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
