<script lang="ts">
	import { UseClipboard } from '@/hooks/use-clipboard.svelte';
	import {
		getCommand,
		PACKAGE_MANAGERS,
		type PackageManager
	} from '@/package-manager';
	import { UserConfigContext } from '@/user-config.svelte';
	import type { Command } from 'package-manager-detector';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
	import { CheckIcon, ClipboardIcon, TerminalIcon } from '@lucide/svelte';
	import { cn } from '@/utils';
	import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
	import { Button } from './ui/button';

	const {
		type,
		command
	}: { type: Command | 'create'; command: string | string[] } = $props();

	const userConfig = UserConfigContext.get();

	function getCommandText(agent: PackageManager) {
		const cmd = getCommand(agent, type, command);
		return `${cmd.command} ${cmd.args.join(' ')}`.trim();
	}

	const commandText = $derived(
		getCommandText(userConfig.current.packageManager)
	);
	const clipboard = new UseClipboard();
</script>

<figure data-rehype-pretty-code-figure>
	<div class="overflow-x-auto">
		<Tabs
			bind:value={
				() => userConfig.current.packageManager,
				(v) => {
					userConfig.setConfig({ packageManager: v });
				}
			}
			class="gap-8"
		>
			<div class="border-border:50 flex items-center gap-2 border-b px-3 py-1">
				<div
					class="bg-foreground flex size-4 items-center justify-center rounded-[1px] opacity-70"
				>
					<TerminalIcon class="text-code size-3" />
				</div>
				<TabsList class="rounded-none bg-transparent p-0">
					{#each PACKAGE_MANAGERS as pm (pm)}
						<TabsTrigger
							value={pm}
							class="data-[state=active]:bg-accent data-[state=active]:border-input h-7 border border-transparent pt-0.5 data-[state=active]:shadow-none"
						>
							{pm}
						</TabsTrigger>
					{/each}
				</TabsList>
			</div>
			<div class="no-scrollbar overflow-x-auto">
				{#each PACKAGE_MANAGERS as pm (pm)}
					<TabsContent
						value={pm}
						class="mt-0 px-4 py-3.5"
						data-llm-ignore={pm === 'yarn' || pm === 'yarn@berry'
							? ''
							: undefined}
					>
						{#snippet child({ props })}
							{@const { hidden, class: className, ...rest } = props}
							<div
								{...rest}
								class={cn(className as string, (hidden as boolean) && 'hidden')}
							>
								<pre><code
										class="font-mono text-sm leading-none"
										data-language="bash">{getCommandText(pm)}</code
									></pre>
							</div>
						{/snippet}
					</TabsContent>
				{/each}
			</div>
		</Tabs>
		<Tooltip disableCloseOnTriggerClick>
			<TooltipTrigger onclick={() => clipboard.copy(commandText)}>
				{#snippet child({ props })}
					<Button
						{...props}
						data-slot="copy-button"
						size="icon"
						variant="ghost"
						class="absolute right-2 top-2 z-10 size-7 opacity-70 hover:opacity-100 focus-visible:opacity-100"
					>
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
	</div>
</figure>
