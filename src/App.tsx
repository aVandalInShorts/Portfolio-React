import { useEffect, useState } from "react";
import { Footer } from "./modules/Footer/Footer";
import { Header } from "./modules/Header/Header";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import { Loading } from "./modules/Loading/Loading";

interface defaultStrapiFields {
	createdAt: string;
	documentId: string;
	id: number;
	locale?: string;
	publishedAt: string;
	updatedAt: string;
}

interface appProps extends defaultStrapiFields {
	Content:
		| heroContent
		| aboutContent
		| technicalSkillsContent
		| featureProjectsContent
		| contactContent;
	HeaderTitle: string;
	FooterCopyrights: string;
}

interface componentBaseProps {
	__component: string;
	id: number;
	Hash?: string;
	MenuValue?: string;
}

interface heroContent extends componentBaseProps {
	__component: "blocks.hero";
	Pretitle: string;
	Name: string;
	Title: string;
	Description: string;
	Buttons: buttonRepeater[];
	socials: socialsRepeater[];
}

interface aboutContent extends componentBaseProps {
	__component: "blocks.about";
	title: string;
	Text: descriptionRepeater[];
	List: Array<{ id: number; Title: string; Text: string }>;
}

interface skillRepeater extends defaultStrapiFields {
	Title: string;
	Icon?: iconRepeater;
}

interface descriptionRepeater {
	type: string;
	children: Array<{ type: string; text: string }>;
}

interface iconRepeater extends defaultStrapiFields {
	value: string;
}

interface socialsRepeater extends defaultStrapiFields {
	Name: string;
	URL: string;
	icons: iconRepeater;
}

interface buttonRepeater {
	IsDownload?: boolean;
	Type: string;
	URL: string;
	Value: string;
	id: number;
}

interface projectRepeater extends defaultStrapiFields {
	Title: string;
	Description: string;
	GitURL?: string;
	ProjectURL?: string;
}

interface technicalSkillsContent extends componentBaseProps {
	__component: "blocks.technical-skills";
	Title: string;
	Description: string;
	Categories: Array<{
		id: number;
		title: string;
		skills: skillRepeater[];
	}>;
}

interface featureProjectsContent extends componentBaseProps {
	__component: "blocks.features-projects";
	Title: string;
	Description: string;
	Projects?: projectRepeater[];
}

interface contactContent extends componentBaseProps {
	__component: "blocks.contact";
	Title: string;
	Description: descriptionRepeater[];
	Buttons: buttonRepeater[];
}

function App() {
	const [homePageData, setHomePageData] = useState<appProps | null>(null);
	const [loading, setLoading] = useState(true);

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
					<Header title={""} nav={[]} />
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
