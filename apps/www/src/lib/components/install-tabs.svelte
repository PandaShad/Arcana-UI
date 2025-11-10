<script lang="ts">
	import CodeTabs from './code-tabs.svelte';
	import type { Snippet } from 'svelte';
	import DocTabsList from './doc-tabs/doc-tabs-list.svelte';
	import DocTabsTrigger from './doc-tabs/doc-tabs-trigger.svelte';
	import DocTabsContent from './doc-tabs/doc-tabs-content.svelte';

	let {
		cli,
		manual
	}: {
		cli: Snippet;
		manual: Snippet;
	} = $props();
</script>

<CodeTabs>
	<DocTabsList>
		<DocTabsTrigger value="cli">CLI</DocTabsTrigger>
		<DocTabsTrigger value="manual">Manual</DocTabsTrigger>
	</DocTabsList>
	<DocTabsContent value="cli">
		{@render cli?.()}
	</DocTabsContent>
	<DocTabsContent value="manual" data-manual-install="" data-llm-ignore>
		{@render manual?.()}
	</DocTabsContent>
</CodeTabs>
