<script lang="ts">
	import { Tabs } from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils.js';
	import type { ComponentProps } from 'svelte';

	let { class: className, ...restProps }: ComponentProps<typeof Tabs> =
		$props();
</script>

<Tabs class={cn('relative mt-6 w-full', className)} {...restProps} />
