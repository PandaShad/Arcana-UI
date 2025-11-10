<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { mainNavItems } from '@/constants/navigation';
	import MainNav from './main-nav.svelte';
	import MobileNav from './mobile-nav.svelte';
	import GithubLink from './github-link.svelte';
	import LayoutToggle from './layout-toggle.svelte';
	import ModeSwitcher from './mode-switcher.svelte';
</script>

<header class="bg-background sticky top-0 z-50 w-full">
	<div class="container-wrapper 3xl:fixed:px-0 px-6">
		<div
			class="3xl:fixed:container h-(--header-height) **:data-[slot=separator]:!h-4 flex items-center gap-2"
		>
			<MobileNav class="flex lg:hidden" />
			<Button
				href="/"
				variant="ghost"
				size="icon"
				class="hidden size-8 lg:flex"
			>
				<h1 class="size-5">✨</h1>
				<span class="sr-only">nova-ui-svelte</span>
			</Button>
			<MainNav items={mainNavItems} class="hidden lg:flex" />
			<div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
				<div class="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
					<!-- <CommandMenu {colors} /> -->
				</div>
				<Separator orientation="vertical" class="ml-2 hidden lg:block" />
				<GithubLink />
				<Separator orientation="vertical" class="3xl:flex hidden" />
				<LayoutToggle class="3xl:flex hidden" />
				<Separator orientation="vertical" />
				<ModeSwitcher />
			</div>
		</div>
	</div>
</header>
