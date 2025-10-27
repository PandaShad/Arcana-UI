import { onDestroy } from 'svelte';
import { inView } from 'motion';
import type { UseTypingAnimationOptions } from './types.js';

/**
 * Composable for creating typing animation effects
 * Provides reusable logic for the typing animation pattern
 */
export function useTypingAnimation(text: string, options: UseTypingAnimationOptions = {}) {
	const {
		duration = 100,
		delay = 0,
		startOnView = false,
		inViewOptions = { amount: 0.3 }
	} = options;

	let displayedText = $state('');
	let started = $state(false);
	let isComplete = $state(false);
	let element: HTMLElement | null = null;

	let cleanupInView: (() => void) | null = null;
	let startTimeout: ReturnType<typeof setTimeout> | null = null;
	let typingInterval: ReturnType<typeof setInterval> | null = null;

	function startTyping() {
		if (started) return;
		started = true;
		isComplete = false;

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
				isComplete = true;
			}
		}, duration);
	}

	function reset() {
		displayedText = '';
		started = false;
		isComplete = false;

		if (startTimeout) {
			clearTimeout(startTimeout);
			startTimeout = null;
		}
		if (typingInterval) {
			clearInterval(typingInterval);
			typingInterval = null;
		}
	}

	function initializeAnimation(targetElement: HTMLElement) {
		element = targetElement;
		reset();

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
				inViewOptions as any
			);
		}
	}

	function restart() {
		reset();
		if (element) {
			initializeAnimation(element);
		}
	}

	function cleanup() {
		if (startTimeout) {
			clearTimeout(startTimeout);
		}
		if (typingInterval) {
			clearInterval(typingInterval);
		}
		if (cleanupInView) {
			cleanupInView();
		}
	}

	onDestroy(cleanup);

	return {
		get displayedText() { return displayedText; },
		get started() { return started; },
		get isComplete() { return isComplete; },
		initializeAnimation,
		restart,
		reset,
		cleanup
	};
}