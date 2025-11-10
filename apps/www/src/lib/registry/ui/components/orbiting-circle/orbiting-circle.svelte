<script lang="ts">
	import type { WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		reverse = false,
		duration = 20,
		delay,
		radius = 160,
		path = true,
		iconSize = 30,
		speed = 1,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		/**
		 * Whether to reverse the orbit direction
		 * @default false
		 */
		reverse?: boolean;
		/**
		 * Duration of one orbit in seconds
		 * @default 20
		 */
		duration?: number;
		/**
		 * Delay before starting the orbit animation in seconds
		 */
		delay?: number;
		/**
		 * Radius of the orbit in pixels
		 * @default 160
		 */
		radius?: number;
		/**
		 * Whether to show the orbit path
		 * @default true
		 */
		path?: boolean;
		/**
		 * Size of the orbiting icon in pixels
		 * @default 30
		 */
		iconSize?: number;
		/**
		 * Speed multiplier for the orbit animation
		 * @default 1
		 */
		speed?: number;
	} = $props();

	const calculatedDuration = duration / speed;
</script>

{#if path}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		class="pointer-events-none absolute inset-0 size-full"
	>
		<circle
			class="stroke-black/10 stroke-1 dark:stroke-white/10"
			cx="50%"
			cy="50%"
			r={radius}
			fill="none"
		/>
	</svg>
{/if}
