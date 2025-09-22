<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		colors = ['#FF0080', '#7928CA', '#0070F3', '#38bdf8'],
		speed = 1,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> & {
		/**
		 * Array of colors to use for the aurora effect
		 * @default ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]
		 */
		colors?: string[];
		/**
		 * Speed of the aurora effect
		 * @default 1
		 */
		speed?: number;
	} = $props();
</script>

<span
	bind:this={ref}
	{...restProps}
	class={cn('relative inline-block', className)}
>
	<span class="sr-only">{@render children?.()}</span>
	<span
		class="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
		style={`background-image: linear-gradient(135deg, ${colors.join(', ')}, ${colors[0]})`}
	>
		{@render children?.()}
	</span>
</span>
