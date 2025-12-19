import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = fileURLToPath(new URL(".", import.meta.url));
export const staticDirPath = path.join(__dirname, "src/registry/json");
export const contentDirPath = path.join(__dirname, "content");

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
	],

	server: {
		fs: {
			allow: [ staticDirPath, contentDirPath ],
		}
	},

	resolve: {
		alias: {
			$lib: fileURLToPath(new URL('./src/lib', import.meta.url))
		},
	},

	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
