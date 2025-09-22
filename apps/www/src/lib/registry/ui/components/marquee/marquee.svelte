<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		reverse = false,
		pauseOnHover = false,
		children,
		vertical = false,
		repeat = 4,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		/**
		 * Whether to reverse the animation direction
		 * @default false
		 */
		reverse?: boolean;
		/**
		 * Whether to pause the animation on hover
		 * @default false
		 */
		pauseOnHover?: boolean;
		/**
		 * Whether to animate vertically instead of horizontally
		 * @default false
		 */
		vertical?: boolean;
		/**
		 * Number of times to repeat the content
		 * @default 4
		 */
		repeat?: number;
	} = $props();
</script>

<div
	bind:this={ref}
	{...restProps}
	class={cn(
		'group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]',
		vertical ? 'flex-col' : 'flex-row',
		className
	)}
>
	{#each Array.from({ length: repeat }) as _, index (index)}
		<div
			class={cn(
				'flex shrink-0 justify-around [gap:var(--gap)]',
				vertical
					? 'animate-marquee-vertical flex-col'
					: 'animate-marquee flex-row',
				pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '',
				reverse ? '[animation-direction:reverse]' : ''
			)}
		>
			{@render children?.()}
		</div>
	{/each}
</div>
