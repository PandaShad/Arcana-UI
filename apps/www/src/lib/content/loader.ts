import type { Component } from 'svelte';
import type { DocMetadata, DocModule } from '@/types/docs';

const modules = import.meta.glob<DocModule>('/content/**/*.md', {
	eager: true
});

export function getAllDocs(): DocMetadata[] {
	return Object.entries(modules).map(([path, module]) => {
		const slug = path
			.replace('/content/', '')
			.replace('.md', '')
			.replace('/index', '')
			.trim();

		return {
			...module.metadata,
			path: slug,
			slug: slug.split('/').pop() || ''
		};
	});
}

export function getDocByPath(
	slug: string
): { component: Component; metadata: DocMetadata } | null {
	const targetPath = `/content/${slug}.md`;
	const indexPath = `/content/${slug}/index.md`;
	const module = modules[targetPath] || modules[indexPath];

	if (!module) return null;

	return {
		component: module.default,
		metadata: {
			...module.metadata,
			path: slug,
			slug: slug.split('/').pop() || ''
		}
	};
}
