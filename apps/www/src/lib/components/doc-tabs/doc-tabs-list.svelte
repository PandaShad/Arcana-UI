<script lang="ts">
	import { TabsList } from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils.js';
	import type { ComponentProps } from 'svelte';

	let { class: className, ...restProps }: ComponentProps<typeof TabsList> =
		$props();
</script>

<TabsList
	class={cn(
		'justify-start gap-4 rounded-none bg-transparent px-2 md:px-0',
		className
	)}
	data-llm-ignore
	{...restProps}
/>
