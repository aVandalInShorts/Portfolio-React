// Env variables:
// - Vite: STRAPI_API, STRAPI_API_TOKEN

const STRAPI_URL = "process.env.STRAPI_API";
const STRAPI_TOKEN = "import.meta.env?.STRAPI_API_TOKEN";

export async function getPage(page: string, params?: Record<string, string>) {
	if (!STRAPI_URL) throw new Error("Missing STRAPI_URL environment variable");
	if (!STRAPI_TOKEN)
		throw new Error("Missing STRAPI_TOKEN environment variable");

	// Build query string from params (excluding any legacy "route" usage)
	const qs = new URLSearchParams({ ...(params ?? {}) }).toString();

	// Adjust endpoint path to your content type (e.g., /api/pages or /api/page)
	const url = `${STRAPI_URL}/api/${page}${qs ? `?${qs}` : ""}`;

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${STRAPI_TOKEN}`,
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) throw new Error(`Strapi error ${res.status}`);
	return res.json();
}
