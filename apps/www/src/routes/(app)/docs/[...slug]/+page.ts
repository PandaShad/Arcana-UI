import { getDoc } from "@/docs";
import { getAllDocs } from "@/content/loader";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = async () => {
	console.info("Prerendering /docs");
	const docs = getAllDocs();

	return docs.map((doc) => ({
		slug: doc.path.replace("components/", "")
	}));
};

export const load: PageLoad = async ({ params }) => {
	console.info(`Loading /docs/${params.slug}`);
	const doc = await getDoc(params.slug);
	return { ...doc, viewerData: null };
};