<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import {
		SidebarContent,
		Sidebar,
		SidebarGroup,
		SidebarGroupLabel,
		SidebarGroupContent,
		SidebarMenu,
		SidebarMenuItem,
		SidebarMenuButton
	} from './ui/sidebar';
	import type { SidebarNavItem } from '@/types/navigation';
	import { page } from '$app/state';

	let {
		navItems,
		...restProps
	}: ComponentProps<typeof Sidebar> & { navItems: SidebarNavItem[] } = $props();

	const pathname = $derived(page.url.pathname);
</script>

<Sidebar
	class="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
	collapsible="none"
	{...restProps}
>
	<SidebarContent class="no-scrollbar overflow-x-hidden px-2 pb-12">
		<div class="h-(--top-spacing) shrink-0"></div>
		{#each navItems as item (item.title)}
			<SidebarGroup>
				<SidebarGroupLabel class="text-muted-foreground font-medium">
					{item.title}
				</SidebarGroupLabel>
				<SidebarGroupContent>
					{#if item.items?.length}
						<SidebarMenu class="gap-0.5">
							{#each item.items as subItem (subItem.href)}
								{#if subItem.items?.length === 0}
									<SidebarMenuItem class="w-full">
										<SidebarMenuButton
											isActive={subItem.href === pathname}
											class="data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:-inset-y-1 after:inset-x-0 after:z-0 after:rounded-md"
										>
											{#snippet child({ props })}
												<a href={subItem.href} {...props}>
													<span
														class="w-(--sidebar-width) absolute inset-0 flex bg-transparent"
													></span>
													{subItem.title}
													{#if subItem.indicator === 'new'}
														<span
															class="flex size-2 rounded-full bg-blue-500"
															title="New"
														></span>
													{/if}
												</a>
											{/snippet}
										</SidebarMenuButton>
									</SidebarMenuItem>
								{/if}
							{/each}
						</SidebarMenu>
					{/if}
				</SidebarGroupContent>
			</SidebarGroup>
		{/each}
	</SidebarContent>
</Sidebar>
