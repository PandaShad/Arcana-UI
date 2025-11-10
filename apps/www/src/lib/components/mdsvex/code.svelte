<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLElement> = $props();
</script>

<code
	class={cn(
		'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</code>
