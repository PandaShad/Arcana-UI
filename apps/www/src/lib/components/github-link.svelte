<script lang="ts">
	import { siteConfig } from '$lib/config.js';
	import { onMount } from 'svelte';
	import { Button } from './ui/button';
	import { GithubIcon } from '@lucide/svelte';

	async function getGithubStarCount() {
		try {
			const res = await fetch('https://ungh.cc/repos/PandaShad/Arcana-UI');
			const data = await res.json();
			return data.repo?.stars ?? 69420;
		} catch (error) {
			console.error(error);
			return 69420;
		}
	}

	let stars = $state(69420);

	onMount(async () => {
		stars = await getGithubStarCount();
	});
</script>

<Button
	href={siteConfig.links.github}
	target="_blank"
	rel="noreferrer"
	size="sm"
	variant="ghost"
	class="h-8 shadow-none"
>
	<GithubIcon />
	<span class="text-muted-foreground w-8 text-xs tabular-nums">
		{stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars.toLocaleString()}
	</span>
</Button>
