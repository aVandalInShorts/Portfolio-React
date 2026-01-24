import { useEffect, useState } from "react";
import { Footer } from "./modules/Footer/Footer";
import { Header, type navProps } from "./modules/Header/Header";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import { Loading } from "./modules/Loading/Loading";
import type { appProps, contentBlock, locales } from "./strapiProps.interface";

type homePageDataLocale = {
	[curr in locales]?: appProps;
};

function App() {
	const [homePageData, setHomePageData] = useState<homePageDataLocale>({});
	const [loading, setLoading] = useState(true);

	const detectDefaultLocale = () => {
		const language = navigator.language;
		if (language.includes("en")) {
			return "en" as locales;
		}
		return "fr-CA" as locales;
	};

	const toggleCurrLocale = () => {
		setCurrLocale(currLocale === "en" ? "fr-CA" : "en");
		history.pushState(
			"",
			document.title,
			window.location.pathname + window.location.search,
		);
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

	useEffect(() => {
		if (!homePageData[currLocale]) {
			const params = new URLSearchParams();
			params.append("populate[Content][on][blocks.about][populate]", "*");
			params.append(
				"populate[Content][on][blocks.contact][populate][Buttons][populate]",
				"*",
			);
			params.append(
				"populate[Content][on][blocks.contact][populate][socials][populate]",
				"*",
			);
			params.append(
				"populate[Content][on][blocks.features-projects][populate][projects][populate][Image][populate]",
				"*",
			);
			params.append(
				"populate[Content][on][blocks.features-projects][populate][projects][populate][skills][populate]",
				"*",
			);
			params.append(
				"populate[Content][on][blocks.hero][populate][Buttons][populate]",
				"*",
			);
			params.append(
				"populate[Content][on][blocks.hero][populate][socials][populate]",
				"*",
			);
			params.append(
				"populate[Content][on][blocks.technical-skills][populate][Categories][populate][skills][populate]",
				"*",
			);

			params.append("locale", currLocale);

			fetch(
				`${import.meta.env.VITE_STRAPI_API_URL}/api/homepage?${params.toString()}`,
			)
				.then((response) => response.json())
				.then((data) => {
					setHomePageData({
						...homePageData,
						[currLocale]: data.data,
					});
					setLoading(false);
				})
				.catch(console.error);
		}
	}, [currLocale, homePageData]);

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<>
					<Header
						title={homePageData[currLocale]?.HeaderTitle}
						nav={navItems}
						currLocale={currLocale}
						toggleLocale={toggleCurrLocale}
					/>
					{homePageData[currLocale]?.Content.map((block, index) => {
						if (block.__component === "blocks.hero") {
							return <Hero {...block} key={index} />;
						} else if (block.__component === "blocks.about") {
							return <About {...block} key={index} />;
						} else if (
							block.__component === "blocks.technical-skills"
						) {
							return <Skills {...block} key={index} />;
						} else if (
							block.__component === "blocks.features-projects"
						) {
							return <Projects {...block} key={index} />;
						} else if (block.__component === "blocks.contact") {
							return <Contact {...block} key={index} />;
						}
					})}
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
