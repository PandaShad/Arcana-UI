<script lang="ts">
	import { cn } from '@/utils';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	class={cn('grid w-full auto-rows-[22rem] grid-cols-3 gap-4', className)}
	{...restProps}
>
	{@render children?.()}
</div>
