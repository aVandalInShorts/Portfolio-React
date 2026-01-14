import { Footer } from "./modules/Footer/Footer";
import { Header } from "./modules/Header/Header";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Skills } from "./sections/Skills/Skills";

function App() {
	return (
		<>
			<Header />
			<About />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
