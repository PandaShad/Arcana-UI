<script lang="ts">
	import { inView, motionValue, springValue } from 'motion';
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		value,
		startValue = 0,
		direction = 'up',
		delay = 0,
		decimalPlaces = 0,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> & {
		/**
		 * The target number to count to
		 */
		value: number;
		/**
		 * The number to start counting from
		 * @default 0
		 */
		startValue?: number;
		/**
		 * The direction of the ticker animation
		 * @default 'up'
		 */
		direction?: 'up' | 'down';
		/**
		 * Delay before starting the animation in seconds
		 * @default 0
		 */
		delay?: number;
		/**
		 * Number of decimal places to display
		 * @default 0
		 */
		decimalPlaces?: number;
	} = $props();

	const mv = motionValue(direction === 'down' ? value : startValue);
	const spring = springValue(mv, {
		damping: 60,
		stiffness: 100
	});

	let isInView = $state(false);
	let displayValue = $state(
		Intl.NumberFormat('en-US', {
			minimumFractionDigits: decimalPlaces,
			maximumFractionDigits: decimalPlaces
		}).format(startValue)
	);

	$effect(() => {
		if (ref) {
			const stop = inView(
				ref,
				() => {
					isInView = true;
					return () => {
						isInView = false;
					};
				},
				{ margin: '0px' }
			);

			return () => {
				stop();
			};
		}
	});

	$effect(() => {
		if (isInView) {
			const timer = setTimeout(() => {
				mv.set(direction === 'down' ? startValue : value);
			}, delay * 1000);

			return () => clearTimeout(timer);
		}
	});

	$effect(() => {
		const unsubscribe = spring.on('change', (latest) => {
			displayValue = Intl.NumberFormat('en-US', {
				minimumFractionDigits: decimalPlaces,
				maximumFractionDigits: decimalPlaces
			}).format(Number(latest.toFixed(decimalPlaces)));
		});

		return () => unsubscribe();
	});
</script>

<span
	bind:this={ref}
	class={cn(
		'inline-block tracking-wider text-black tabular-nums dark:text-white',
		className
	)}
	{...restProps}
>
	{displayValue}
</span>
