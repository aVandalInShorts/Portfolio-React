import { type seoProps } from "../../modules/SEO/SEO";
import seoFrData from "./objects/seo/fr.json";
import seoEnData from "./objects/seo/en.json";
import homepageFrData from "./objects/homepage/fr.json";
import homepageEnData from "./objects/homepage/en.json";
import type { appProps } from "../../strapiProps.interface";

export const getSEOData = () => {
	return {
		"fr-CA": seoFrData as seoProps,
		en: seoEnData as seoProps,
	};
};

export const getHomepageData = () => {
	return {
		"fr-CA": homepageFrData as appProps,
		en: homepageEnData as appProps,
	};
};
