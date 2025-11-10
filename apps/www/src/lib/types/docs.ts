import type { Component } from 'svelte';

export interface DocMetadata {
	title: string;
	description: string;
	path: string;
	slug: string;
	navLabel?: string;
	links?: {
		doc?: string;
		api?: string;
		source?: string;
	};
	component: boolean;
	toc: Array<{
		title: string;
		url: string;
		items: any[];
	}>;
}

export interface DocModule {
	default: Component;
	metadata: DocMetadata;
}
