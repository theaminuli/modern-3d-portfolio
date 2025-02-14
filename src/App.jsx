import { Footer } from "./components/footer";
import Header from "./components/header/Header";
import About from "./components/section/About";
import Clients from "./components/section/Clients";
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
			<Footer />
		</>
	);
}

export default App;
