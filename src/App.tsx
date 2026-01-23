import { useEffect, useState } from "react";
import { Footer } from "./modules/Footer/Footer";
import { Header, type navProps } from "./modules/Header/Header";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import { Loading } from "./modules/Loading/Loading";
import type { appProps, ContentBlock } from "./strapiProps.interface";

function App() {
	const [homePageData, setHomePageData] = useState<appProps | null>(null);
	const [loading, setLoading] = useState(true);
	const [navItems, setNavItems] = useState<navProps[]>([]);

	useEffect(() => {
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
			"populate[Content][on][blocks.features-projects][populate][projects][populate][skills][populate]",
			"*",
		);
		params.append(
			"populate[Content][on][blocks.hero][populate][Buttons][populate]",
			"*",
		);
		params.append(
			"populate[Content][on][blocks.hero][populate]",
			"socials",
		);
		params.append(
			"populate[Content][on][blocks.technical-skills][populate][Categories][populate][skills][populate]",
			"*",
		);

		fetch(
			`${import.meta.env.VITE_STRAPI_API_URL}api/homepage?${params.toString()}`,
		)
			.then((response) => response.json())
			.then((data) => {
				setHomePageData(data.data);
				setLoading(false);

				setNavItems(
					(data.data?.Content ?? []).map(
						(block: ContentBlock) =>
							({
								label: block.MenuValue,
								hash: block.Hash,
							}) as navProps,
					),
				);
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
					<Header title={homePageData?.HeaderTitle} nav={navItems} />
					<Hero />
					<About />
					<Skills />
					<Projects />
					<Contact />
					<Footer copyright={homePageData?.FooterCopyrights ?? ""} />
				</>
			)}
		</>
	);
}

export default App;
