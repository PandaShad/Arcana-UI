<script lang="ts">
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte.js';
	import { cn } from '$lib/utils.js';
	import ClipboardIcon from '@lucide/svelte/icons/clipboard';
	import CheckIcon from '@lucide/svelte/icons/check';
	import type { ComponentProps } from 'svelte';
	import { Button } from './ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

	let {
		text,
		variant = 'ghost',
		class: className,
		...restProps
	}: ComponentProps<typeof Button> & {
		text: string;
	} = $props();

	const clipboard = new UseClipboard();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const rp = $derived(restProps as any);
</script>

<Tooltip disableCloseOnTriggerClick>
	<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
	<TooltipTrigger
		{...rp}
		class={cn(
			'bg-code absolute right-2 top-3 z-10 size-7 hover:opacity-100 focus-visible:opacity-100',
			className
		)}
		onclick={() => clipboard.copy(text)}
	>
		{#snippet child({ props })}
			<Button {...props} data-slot="copy-button" size="icon" {variant}>
				<span class="sr-only" data-llm-ignore>Copy</span>
				{#if clipboard.copied}
					<CheckIcon />
				{:else}
					<ClipboardIcon />
				{/if}
			</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent>
		{clipboard.copied ? 'Copied' : 'Copy to Clipboard'}
	</TooltipContent>
</Tooltip>
