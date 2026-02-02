import { useState } from "react";
import { Footer } from "./modules/Footer/Footer";
import { Header, type navProps } from "./modules/Header/Header";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import { Loading } from "./modules/Loading/Loading";
import type { appProps, contentBlock, locales } from "./strapiProps.interface";
import { SEO } from "./modules/SEO/SEO";
import { getHomepageData } from "./services/data/strapi.service";

type homePageDataLocale = {
	[curr in locales]?: appProps;
};

function App() {
	const homePageData: homePageDataLocale = getHomepageData();
	const [loading, setLoading] = useState(false);

	const detectDefaultLocale = () => {
		const language = navigator.language;
		if (language.includes("en")) {
			return "en" as locales;
		}
		return "fr-CA" as locales;
	};

	const toggleCurrLocale = () => {
		const newLocale = currLocale === "en" ? "fr-CA" : "en";
		setCurrLocale(newLocale);
		history.pushState(
			"",
			document.title,
			window.location.pathname + window.location.search,
		);

		if (!homePageData[newLocale]) {
			setLoading(true);
		}
	};

	const [currLocale, setCurrLocale] = useState<locales>(
		detectDefaultLocale(),
	);

	const navItems = (homePageData[currLocale]?.Content ?? []).map(
		(block: contentBlock) =>
			({
				label: block.MenuValue,
				hash: block.Hash,
			}) as navProps,
	);

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<>
					<SEO currLocale={currLocale} />
					<Header
						title={homePageData[currLocale]?.HeaderTitle}
						nav={navItems}
						currLocale={currLocale}
						toggleLocale={toggleCurrLocale}
					/>
					<main role="main">
						{homePageData[currLocale]?.Content.map(
							(block, index) => {
								if (block.__component === "blocks.hero") {
									return <Hero {...block} key={index} />;
								} else if (
									block.__component === "blocks.about"
								) {
									return <About {...block} key={index} />;
								} else if (
									block.__component ===
									"blocks.technical-skills"
								) {
									return <Skills {...block} key={index} />;
								} else if (
									block.__component ===
									"blocks.features-projects"
								) {
									return <Projects {...block} key={index} />;
								} else if (
									block.__component === "blocks.contact"
								) {
									return <Contact {...block} key={index} />;
								}
							},
						)}
					</main>
					<Footer
						copyright={
							homePageData[currLocale]?.FooterCopyrights ?? ""
						}
					/>
				</>
			)}
		</>
	);
}

export default App;
