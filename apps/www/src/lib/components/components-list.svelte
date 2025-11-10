<script lang="ts">
	import { getAllDocs } from '@/content/loader';
	import { resolve } from '$app/paths';

	const allComponents = getAllDocs().filter((doc) => doc.path.startsWith('components/'));
	const list = allComponents.filter((c) => {
		if (c.title === 'Components') return false;
		return true;
	});
</script>

<div
	class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20"
>
	{#each list as component (component.title)}
		<a
			href={resolve(`/docs/${component.path}`)}
			class="flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline md:text-base"
		>
			{component.title}
		</a>
	{/each}
</div>
