import { CopyRight } from "./components/footer";
import Header from "./components/header/Header";
import Hero from "./components/section/Hero";

function App() {
	return (
		<>
			<div className="bg-hero-pattern">
				<Header />
				<Hero />
			</div>
			<CopyRight />
		</>
	);
}

export default App;
