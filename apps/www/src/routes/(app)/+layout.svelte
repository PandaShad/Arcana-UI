<script lang="ts">
	import SiteHeader from '@/components/site-header.svelte';
	import { Toaster } from '@/components/ui/sonner';
	import { TooltipProvider } from '@/components/ui/tooltip';
	import { UserConfig, UserConfigContext } from '@/user-config.svelte';
	import { ModeWatcher, setTheme } from 'mode-watcher';
	import { watch } from 'runed';

	let { children, data } = $props();

	const userConfig = UserConfigContext.set(new UserConfig(data.userConfig));

	const themeColors = { light: '#ffffff', dark: '#09090b' };
	const modeClasses = $derived([
		`layout-${userConfig.current.layout}`,
		`theme-${userConfig.current.activeTheme}`
	]);

	watch.pre(
		() => userConfig.current.activeTheme,
		() => setTheme(userConfig.current.activeTheme)
	);
</script>

<ModeWatcher
	defaultMode="system"
	disableTransitions
	defaultTheme={userConfig.current.activeTheme}
	{themeColors}
	darkClassNames={['dark', ...modeClasses]}
	lightClassNames={['light', ...modeClasses]}
/>

<Toaster position="top-center" />

<div class="bg-background relative z- flex min-h-svh flex-col">
	<SiteHeader />
	<main class="flex flex-1 flex-col">
		<TooltipProvider>
			{@render children()}
		</TooltipProvider>
	</main>
</div>
