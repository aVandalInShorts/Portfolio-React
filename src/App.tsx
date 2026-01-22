import { useEffect, useState } from "react";
import { Footer } from "./modules/Footer/Footer";
import { Header } from "./modules/Header/Header";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import { Loading } from "./modules/Loading/Loading";
// import { getPage } from "./api/strapi";

function App() {
	const [homePageData, setHomePageData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const params = new URLSearchParams();
		params.append("populate[Content][on][blocks.about][populate]", "*");
		params.append("populate[Content][on][blocks.contact][populate]", "*");
		params.append(
			"populate[Content][on][blocks.features-projects][populate]",
			"*",
		);
		params.append("populate[Content][on][blocks.hero][populate]", "*");
		params.append(
			"populate[Content][on][blocks.technical-skills][populate]",
			"*",
		);

		fetch(
			`${import.meta.env.VITE_STRAPI_API_URL}api/homepage?${params.toString()}`,
		)
			.then((response) => response.json())
			.then((data) => {
				setHomePageData(data);
				setLoading(false);
			})
			.catch(console.error);
	}, []);

	useEffect(() => {
		console.log("homePageData updated:", homePageData);
	}, [homePageData]);

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<>
					<Header />
					<Hero />
					<About />
					<Skills />
					<Projects />
					<Contact />
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
