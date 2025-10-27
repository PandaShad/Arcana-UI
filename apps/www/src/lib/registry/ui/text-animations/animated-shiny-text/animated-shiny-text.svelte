<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		shimmerWidth = 100,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> & {
		/** Width of the shimmer effect in pixels
		 * @default 100
		 */
		shimmerWidth?: number;
	} = $props();
</script>

<span
	bind:this={ref}
	style:--shiny-width="{shimmerWidth}px"
	class={cn(
		'mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70',

		// Shine effect
		'animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',

		// Shine gradient
		'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80',

		className
	)}
	{...restProps}
>
	{@render children?.()}
</span>
