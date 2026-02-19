import { type seoProps } from "../../modules/SEO/SEO";
import seoFrData from "./objects/seo/fr.json";
import seoEnData from "./objects/seo/en.json";
import homepageFrData from "./objects/homepage/fr.json";
import homepageEnData from "./objects/homepage/en.json";
import type { appProps, locales } from "../../strapiProps.interface";

export const getSEOData = () => {
	return {
		"fr-CA": seoFrData as seoProps,
		en: seoEnData as seoProps,
	};
};

export const getHomepageData = () => {
	const generateJSONData = true;

	if (generateJSONData && import.meta.env.MODE === "development") {
		getHomepageDataFromStrapi("fr-CA");
		getHomepageDataFromStrapi("en");
	}

	return {
		"fr-CA": homepageFrData as appProps,
		en: homepageEnData as appProps,
	};
};

const getHomepageDataFromStrapi = async (currLocale: locales) => {
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
			console.log("DATA", currLocale, data.data);
		})
		.catch((error) => {
			console.error("Error fetching data from Strapi", error);
		});
};
