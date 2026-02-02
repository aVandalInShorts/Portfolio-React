import { useEffect } from "react";
import { getSEOData } from "../../services/data/strapi.service";

export interface seoProps {
	Title?: string;
	Description?: string;
	Keywords?: string;
}

type seoDataLocale = {
	[curr in string]?: seoProps;
};

export const SEO = ({ currLocale }: { currLocale: string }) => {
	const seoData: seoDataLocale = getSEOData();

	const updateFields = () => {
		document.title = seoData?.[currLocale]?.Title || "François Vandal";
		document
			.querySelector('meta[property="og:title"]')
			?.setAttribute("content", seoData?.[currLocale]?.Title || "");

		document
			.querySelector('meta[name="description"]')
			?.setAttribute("content", seoData?.[currLocale]?.Description || "");
		document
			.querySelector('meta[property="og:description"]')
			?.setAttribute("content", seoData?.[currLocale]?.Description || "");

		document
			.querySelector('meta[property="og:url"]')
			?.setAttribute("content", window.location.href);
		document
			.querySelector('meta[property="og:image"]')
			?.setAttribute(
				"content",
				window.location.href + "src/assets/favicon.svg",
			);

		document
			.querySelector('meta[name="keywords"]')
			?.setAttribute("content", seoData?.[currLocale]?.Keywords || "");
	};

	useEffect(() => {
		updateFields();
	}, [currLocale]);

	return <></>;
};
