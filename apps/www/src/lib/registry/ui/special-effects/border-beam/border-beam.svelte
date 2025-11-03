<script lang="ts">
	import { animate, type Transition } from 'motion';
	import { onDestroy } from 'svelte';
	import { cn } from '$lib/utils';
	import type { WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		size = 50,
		delay = 0,
		duration = 6,
		colorFrom = '#ffaa40',
		colorTo = '#9c40ff',
		transition,
		style,
		reverse = false,
		initialOffset = 0,
		borderWidth = 1,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		/**
		 * The size of the border beam in pixels
		 * @default 50
		 */
		size?: number;
		/**
		 * Delay before starting the animation in seconds
		 * @default 0
		 */
		delay?: number;
		/**
		 * Duration of the animation in seconds
		 * @default 6
		 */
		duration?: number;
		/**
		 * Starting color of the border beam
		 * @default '#ffaa40'
		 */
		colorFrom?: string;
		/**
		 * Ending color of the border beam
		 * @default '#9c40ff'
		 */
		colorTo?: string;
		/**
		 * The motion transition of the border beam.
		 */
		transition?: Transition;
		/**
		 * Initial offset of the animation in percentage
		 * @default 0
		 */
		initialOffset?: number;
		/**
		 * Width of the border beam in pixels
		 * @default 1
		 */
		borderWidth?: number;
		/**
		 * Whether to reverse the animation direction
		 * @default false
		 */
		reverse?: boolean;
	} = $props();

	let beamElement: HTMLDivElement | null = null;
	let animationControls: { stop: () => void } | null = null;

	$effect(() => {
		if (!beamElement) return;

		if (animationControls) {
			animationControls.stop();
		}

		const fromOffset = reverse
			? `${100 - initialOffset}%`
			: `${initialOffset}%`;
		const toOffset = reverse ? `${-initialOffset}%` : `${100 + initialOffset}%`;

		animationControls = animate(
			beamElement,
			{
				offsetDistance: [fromOffset, toOffset]
			},
			{
				repeat: Infinity,
				ease: 'linear',
				duration,
				delay: -delay,
				...transition
			}
		);

		return () => {
			if (animationControls) {
				animationControls.stop();
			}
		};
	});

	onDestroy(() => {
		if (animationControls) {
			animationControls.stop();
		}
	});
</script>

<div
	bind:this={ref}
	class="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
	style:border-width="{borderWidth}px"
	{...restProps}
>
	<div
		bind:this={beamElement}
		class={cn(
			'absolute aspect-square bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent',
			className
		)}
		style:width="{size}px"
		style:offset-path="rect(0 auto auto 0 round {size}px)"
		style:--color-from={colorFrom}
		style:--color-to={colorTo}
		style:offset-distance="{initialOffset}%"
		{style}
	></div>
</div>
