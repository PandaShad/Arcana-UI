<script lang="ts">
	import { TabsContent } from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils.js';
	import type { ComponentProps } from 'svelte';

	let { class: className, ...restProps }: ComponentProps<typeof TabsContent> =
		$props();
</script>

<TabsContent
	class={cn(
		'*:[figure]:first:mt-0 relative [&>.steps]:mt-6 [&_h3.font-heading]:text-base [&_h3.font-heading]:font-medium',
		className
	)}
	{...restProps}
/>
