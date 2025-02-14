import { Footer } from "./components/footer";
import Header from "./components/header/Header";
import HomePage from "./components/section";

/**
 * The main App component that serves as the root of the application.
 * It includes the Header, HomePage, and Footer components.
 *
 * @component
 */
function App() {
	return (
		<>
			<Header />
			<HomePage />
			<Footer />
		</>
	);
}

export default App;
