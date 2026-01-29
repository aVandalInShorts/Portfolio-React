import { useEffect, useState } from "react";

interface seoProps {
	Title?: string;
	Description?: string;
	Keywords?: string;
}

type seoDataLocale = {
	[curr in string]?: seoProps;
};

export const SEO = ({ currLocale }: { currLocale: string }) => {
	const [seoData, setSeoData] = useState<seoDataLocale | null>(null);

	useEffect(() => {
		const params = new URLSearchParams();
		params.append("locale", currLocale);

		fetch(
			`${import.meta.env.VITE_STRAPI_API_URL}/api/seo?${params.toString()}`,
		)
			.then((response) => response.json())
			.then((data) => {
				const seoAttributes = data.data;
				setSeoData({
					...seoData,
					[currLocale]: {
						Title: seoAttributes.Title,
						Description: seoAttributes.Description,
						Keywords: seoAttributes.Keywords,
					},
				});
				console.log("DATA", data);
			})
			.catch(console.error);
	}, [currLocale]);

	useEffect(() => {
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
	}, [seoData]);

	return <></>;
};
