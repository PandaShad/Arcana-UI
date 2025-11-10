import { error } from "@sveltejs/kit";
import { getDocByPath } from "@/content/loader";

export async function getDoc(slug: string) {
	const normalizedSlug = slug === "" ? "index" : slug;
	console.info(`Fetching doc for slug: ${normalizedSlug}`);
	const doc = getDocByPath(normalizedSlug);

	if (!doc) {
		error(404, "Could not find the documentation page.");
	}

	return doc;
}