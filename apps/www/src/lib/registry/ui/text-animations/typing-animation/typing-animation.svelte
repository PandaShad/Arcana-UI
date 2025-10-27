<script lang="ts">
	import { cn, type WithElementRef, type WithoutChildren } from '$lib/utils';
	import { onMount, onDestroy } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { animate, inView } from 'motion';

	type Props = WithElementRef<WithoutChildren<HTMLAttributes<HTMLElement>>> & {
		/**
		 * The text to animate with typing effect
		 */
		text: string;
		/**
		 * Duration per character in milliseconds
		 * @default 100
		 */
		duration?: number;
		/**
		 * Initial delay before starting animation in milliseconds
		 * @default 0
		 */
		delay?: number;
		/**
		 * HTML tag to render as
		 * @default 'div'
		 */
		as?: keyof HTMLElementTagNameMap;
		/**
		 * Whether to start animation when element comes into view
		 * @default false
		 */
		startOnView?: boolean;
		/**
		 * Motion animation props to apply to the element
		 */
		motionProps?: Record<string, any>;
	};

	let {
		ref = $bindable(null),
		text,
		class: className,
		duration = 100,
		delay = 0,
		as = 'div',
		startOnView = false,
		motionProps = {},
		...restProps
	}: Props = $props();

	let displayedText = $state('');
	let started = $state(false);
	let element: HTMLElement | null = null;
	let cleanupInView: (() => void) | null = null;
	let startTimeout: ReturnType<typeof setTimeout> | null = null;
	let typingInterval: ReturnType<typeof setInterval> | null = null;
	let motionAnimation: any = null;

	function startTyping() {
		if (started) return;
		started = true;

		const graphemes = Array.from(text);
		let i = 0;

		typingInterval = setInterval(() => {
			if (i < graphemes.length) {
				displayedText = graphemes.slice(0, i + 1).join('');
				i++;
			} else {
				if (typingInterval) {
					clearInterval(typingInterval);
					typingInterval = null;
				}
			}
		}, duration);
	}

	function initializeAnimation() {
		if (!element) return;

		if (Object.keys(motionProps).length > 0) {
			motionAnimation = animate(element, motionProps);
		}

		if (!startOnView) {
			startTimeout = setTimeout(() => {
				startTyping();
			}, delay);
		} else {
			cleanupInView = inView(
				element,
				() => {
					startTimeout = setTimeout(() => {
						startTyping();
					}, delay);
				},
				{ amount: 0.3 }
			);
		}
	}

	onMount(() => {
		if (element) {
			initializeAnimation();
		}
	});

	onDestroy(() => {
		if (startTimeout) {
			clearTimeout(startTimeout);
		}
		if (typingInterval) {
			clearInterval(typingInterval);
		}
		if (cleanupInView) {
			cleanupInView();
		}
		if (motionAnimation) {
			motionAnimation.stop();
		}
	});

	$effect(() => {
		if (element) {
			ref = element;
			initializeAnimation();
		}
	});

	$effect(() => {
		text;
		displayedText = '';
		started = false;
		if (startTimeout) {
			clearTimeout(startTimeout);
			startTimeout = null;
		}
		if (typingInterval) {
			clearInterval(typingInterval);
			typingInterval = null;
		}
		if (element) {
			initializeAnimation();
		}
	});
</script>

<svelte:element
	this={as}
	bind:this={element}
	class={cn('text-4xl font-bold leading-[5rem] tracking-[-0.02em]', className)}
	{...restProps}
>
	{displayedText}
</svelte:element>
