<script lang="ts">
	import { onMount } from 'svelte';
	import CopyButton from '$lib/components/copy-button.svelte';
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLPreElement> = $props();

	let preNode = $state<HTMLPreElement>();
	let code = $state('');

	onMount(() => {
		if (preNode) {
			// Extract plain text from the highlighted code
			code = preNode.innerText.trim();
		}
	});
</script>

<div class="relative mb-4 mt-6">
	<!--
	We cannot have a newline between the pre and children or we will get a newline in the code block
	-->
	<pre
		bind:this={preNode}
		class={cn(
			'shiki-block overflow-x-auto rounded-lg border bg-muted/50 p-4 text-sm',
			'no-scrollbar min-w-0 outline-none',
			className
		)}
		{...restProps}>{@render children?.()}</pre>
	<CopyButton text={code} />
</div>
