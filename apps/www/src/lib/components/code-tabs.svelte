<script lang="ts">
	import { type InstallationType } from '$lib/user-config.svelte.js';
	import { Tabs } from '$lib/components/ui/tabs';
	import { UserConfigContext } from '$lib/user-config.svelte.js';
	import type { ComponentProps } from 'svelte';

	let { children }: ComponentProps<typeof Tabs> = $props();

	const userConfig = UserConfigContext.get();
</script>

<Tabs
	value={userConfig.current.installationType}
	onValueChange={(v) =>
		userConfig.setConfig({ installationType: v as InstallationType })}
	class="relative mt-6 w-full"
>
	{@render children?.()}
</Tabs>
