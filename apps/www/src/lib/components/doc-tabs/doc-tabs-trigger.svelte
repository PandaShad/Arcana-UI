<script lang="ts">
	import { TabsTrigger } from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils.js';
	import type { ComponentProps } from 'svelte';

	let { class: className, ...restProps }: ComponentProps<typeof TabsTrigger> =
		$props();
</script>

<TabsTrigger
	class={cn(
		'text-muted-foreground data-[state=active]:text-foreground px-0 text-base data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent',
		className
	)}
	{...restProps}
/>
