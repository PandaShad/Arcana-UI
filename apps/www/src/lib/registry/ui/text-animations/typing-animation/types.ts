import type { HTMLAttributes } from 'svelte/elements';
import type { WithElementRef, WithoutChildren } from '$lib/utils';

export interface TypingAnimationProps extends WithElementRef<WithoutChildren<HTMLAttributes<HTMLElement>>> {
	/**
	 * The text to animate with typing effect
	 */
	text: string;
	/**
	 * Additional CSS classes to apply
	 */
	class?: string;
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
}

export interface TypingAnimationConfig {
	text: string;
	duration: number;
	delay: number;
	startOnView: boolean;
	motionProps: Record<string, any>;
}

export interface UseTypingAnimationOptions {
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
	 * Whether to start animation when element comes into view
	 * @default false
	 */
	startOnView?: boolean;
	/**
	 * InView options when startOnView is true
	 */
	inViewOptions?: {
		amount?: number | 'some' | 'all';
		margin?: string;
		root?: Element;
	};
}