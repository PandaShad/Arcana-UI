import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import MagicString from "magic-string";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			smartypants: {
				dashes: 'oldschool'
			},
			layout: path.resolve(__dirname, './src/lib/components/mdsvex/layout.svelte'),	
		}),
		componentPreviews()
	],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: { "@/*": "./src/lib/*" }
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;

function componentPreviews() {
	const TARGET = "<ComponentPreview";
	const camelize = (/** @type {string} */ s) => s.replace(/-./g, (w) => w[1].toUpperCase());

	return {
		name: "inject-component-preview",
		markup: ({ content, filename }) => {
			if (!filename?.endsWith(".md") || !content.includes(TARGET)) return;

			const ms = new MagicString(content);
			const results = content.matchAll(/<ComponentPreview name=["|']([^\s]*)["|']/g);
			const components = new Set();
			for (const exec of results) {
				const [, name] = exec;
				const insertIndex = exec.index + TARGET.length;
				const identifier = camelize(name);
				if (name.includes("sidebar")) continue;
				const prop = ` component={${identifier}}`;
				ms.appendRight(insertIndex, prop);

				components.add(name);
			}

			const importIndex = content.search("import ComponentPreview");
			for (const name of components) {
				const identifier = camelize(name);
				let importStatement = `import ${identifier} from "$lib/registry/examples/${name}.svelte";`;
				ms.appendLeft(importIndex, importStatement);
			}

			return { code: ms.toString(), map: ms.generateMap() };
		},
	};
}
