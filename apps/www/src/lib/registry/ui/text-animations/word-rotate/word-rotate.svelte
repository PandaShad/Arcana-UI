<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { fly } from 'svelte/transition';

	let {
		ref = $bindable(null),
		class: className,
		words,
		duration = 2500,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLHeadingElement>> & {
		/**
		 * Array of words to rotate
		 */
		words: string[];
		/**
		 * Duration of each word in milliseconds
		 * @default 2500
		 */
		duration?: number;
	} = $props();

	let index = $state(0);

	onMount(() => {
		let interval = setInterval(() => {
			index = (index + 1) % words.length;
		}, duration);
		return () => clearInterval(interval);
	});
</script>

<div class="overflow-hidden py-2">
	{#key index}
		<h1
			in:fly={{ y: -50, delay: 200 }}
			out:fly={{ y: 50, duration: 200 }}
			class={cn(className)}
			{...restProps}
		>
			{words[index]}
		</h1>
	{/key}
</div>
